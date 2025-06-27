
-- Phase 1: Set up authentication and user profiles system
-- Create profiles table for user management
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  email TEXT NOT NULL,
  full_name TEXT,
  role TEXT NOT NULL DEFAULT 'client' CHECK (role IN ('admin', 'client')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL
);

-- Enable RLS on profiles
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Create trigger to automatically create profile on user signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger AS $$
BEGIN
  INSERT INTO public.profiles (id, email, full_name, role)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'full_name', ''),
    COALESCE(NEW.raw_user_meta_data->>'role', 'client')
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger to call the function
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Phase 2: Add user_id columns to client tables for ownership
ALTER TABLE public.client_config ADD COLUMN IF NOT EXISTS user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE;
ALTER TABLE public.client_quota ADD COLUMN IF NOT EXISTS user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE;

-- Update existing records to have a default admin user (you'll need to create this user)
-- For now, we'll leave them NULL and handle in application logic

-- Phase 3: Implement Row Level Security policies

-- Profiles RLS policies
CREATE POLICY "Users can view own profile" ON public.profiles
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" ON public.profiles
  FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Admins can view all profiles" ON public.profiles
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM public.profiles 
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Client Config RLS policies
CREATE POLICY "Users can view own client configs" ON public.client_config
  FOR SELECT USING (
    user_id = auth.uid() OR 
    EXISTS (
      SELECT 1 FROM public.profiles 
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

CREATE POLICY "Users can create own client configs" ON public.client_config
  FOR INSERT WITH CHECK (user_id = auth.uid());

CREATE POLICY "Users can update own client configs" ON public.client_config
  FOR UPDATE USING (
    user_id = auth.uid() OR 
    EXISTS (
      SELECT 1 FROM public.profiles 
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

CREATE POLICY "Users can delete own client configs" ON public.client_config
  FOR DELETE USING (
    user_id = auth.uid() OR 
    EXISTS (
      SELECT 1 FROM public.profiles 
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Client Quota RLS policies
CREATE POLICY "Users can view own client quotas" ON public.client_quota
  FOR SELECT USING (
    user_id = auth.uid() OR 
    EXISTS (
      SELECT 1 FROM public.profiles 
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

CREATE POLICY "Users can update own client quotas" ON public.client_quota
  FOR UPDATE USING (
    user_id = auth.uid() OR 
    EXISTS (
      SELECT 1 FROM public.profiles 
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

CREATE POLICY "System can increment quotas" ON public.client_quota
  FOR UPDATE USING (true) WITH CHECK (true);

-- Update the quota check function to work with RLS
CREATE OR REPLACE FUNCTION public.check_and_increment_quota(p_client_id text)
RETURNS boolean
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  current_used int;
  max_limit int;
BEGIN
  -- Temporarily disable RLS for this function
  PERFORM set_config('row_security', 'off', true);
  
  -- Récupérer les quotas actuels avec les nouvelles colonnes
  SELECT COALESCE(used, tokens_used, 0), COALESCE("limit", tokens_max, 100) 
  INTO current_used, max_limit
  FROM public.client_quota
  WHERE client_id = p_client_id;

  -- Re-enable RLS
  PERFORM set_config('row_security', 'on', true);

  -- Vérifier si des données ont été trouvées
  IF current_used IS NULL THEN
    RAISE EXCEPTION 'Client % non trouvé dans client_quota', p_client_id;
  END IF;

  -- Vérifier si le quota n'est pas dépassé
  IF current_used >= max_limit THEN
    RAISE EXCEPTION 'Quota dépassé pour le client %: %/%', p_client_id, current_used, max_limit;
  END IF;

  -- Incrémenter le compteur dans les nouvelles colonnes ET les anciennes pour compatibilité
  UPDATE public.client_quota
  SET used = COALESCE(used, 0) + 1,
      tokens_used = COALESCE(tokens_used, 0) + 1,
      last_updated_at = NOW(),
      updated_at = NOW()
  WHERE client_id = p_client_id;

  RETURN true;
END;
$$;

-- Create a secure function to get client config for widget (bypasses RLS for public access)
CREATE OR REPLACE FUNCTION public.get_client_config_public(p_client_id text)
RETURNS TABLE(
  client_id text,
  logo_url text,
  color_primary text,
  webhook_url text,
  bot_description text,
  banner_color text,
  chat_background_color text,
  text_color text
)
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  RETURN QUERY
  SELECT 
    cc.client_id,
    cc.logo_url,
    cc.color_primary,
    cc.webhook_url,
    cc.bot_description,
    cc.banner_color,
    cc.chat_background_color,
    cc.text_color
  FROM public.client_config cc
  WHERE cc.client_id = p_client_id;
END;
$$;
