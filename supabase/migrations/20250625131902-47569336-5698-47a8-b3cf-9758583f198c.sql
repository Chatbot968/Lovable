
-- Créer une table pour les administrateurs autorisés
CREATE TABLE IF NOT EXISTS public.admin_users (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  email TEXT NOT NULL,
  granted_by UUID REFERENCES auth.users(id),
  granted_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL,
  is_active BOOLEAN DEFAULT true NOT NULL,
  UNIQUE(user_id)
);

-- Enable RLS on admin_users
ALTER TABLE public.admin_users ENABLE ROW LEVEL SECURITY;

-- Policy pour que les admins puissent voir tous les autres admins
CREATE POLICY "Admins can view all admin users" ON public.admin_users
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM public.admin_users au 
      WHERE au.user_id = auth.uid() AND au.is_active = true
    )
  );

-- Policy pour que les admins puissent créer d'autres admins
CREATE POLICY "Admins can create admin users" ON public.admin_users
  FOR INSERT WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.admin_users au 
      WHERE au.user_id = auth.uid() AND au.is_active = true
    )
  );

-- Policy pour que les admins puissent modifier le statut d'autres admins
CREATE POLICY "Admins can update admin users" ON public.admin_users
  FOR UPDATE USING (
    EXISTS (
      SELECT 1 FROM public.admin_users au 
      WHERE au.user_id = auth.uid() AND au.is_active = true
    )
  );

-- Corriger les politiques RLS pour client_config et client_quota
-- Supprimer les anciennes politiques qui causent des problèmes
DROP POLICY IF EXISTS "Users can view own client configs" ON public.client_config;
DROP POLICY IF EXISTS "Users can create own client configs" ON public.client_config;
DROP POLICY IF EXISTS "Users can update own client configs" ON public.client_config;
DROP POLICY IF EXISTS "Users can delete own client configs" ON public.client_config;

DROP POLICY IF EXISTS "Users can view own client quotas" ON public.client_quota;
DROP POLICY IF EXISTS "Users can update own client quotas" ON public.client_quota;

-- Nouvelles politiques plus robustes pour client_config
CREATE POLICY "Users can view own client configs" ON public.client_config
  FOR SELECT USING (
    user_id = auth.uid() OR 
    EXISTS (
      SELECT 1 FROM public.admin_users au 
      WHERE au.user_id = auth.uid() AND au.is_active = true
    )
  );

CREATE POLICY "Users can create own client configs" ON public.client_config
  FOR INSERT WITH CHECK (
    user_id = auth.uid() OR 
    EXISTS (
      SELECT 1 FROM public.admin_users au 
      WHERE au.user_id = auth.uid() AND au.is_active = true
    )
  );

CREATE POLICY "Users can update own client configs" ON public.client_config
  FOR UPDATE USING (
    user_id = auth.uid() OR 
    EXISTS (
      SELECT 1 FROM public.admin_users au 
      WHERE au.user_id = auth.uid() AND au.is_active = true
    )
  );

CREATE POLICY "Users can delete own client configs" ON public.client_config
  FOR DELETE USING (
    user_id = auth.uid() OR 
    EXISTS (
      SELECT 1 FROM public.admin_users au 
      WHERE au.user_id = auth.uid() AND au.is_active = true
    )
  );

-- Nouvelles politiques pour client_quota
CREATE POLICY "Users can view own client quotas" ON public.client_quota
  FOR SELECT USING (
    user_id = auth.uid() OR 
    EXISTS (
      SELECT 1 FROM public.admin_users au 
      WHERE au.user_id = auth.uid() AND au.is_active = true
    )
  );

CREATE POLICY "Users can create client quotas" ON public.client_quota
  FOR INSERT WITH CHECK (
    user_id = auth.uid() OR 
    EXISTS (
      SELECT 1 FROM public.admin_users au 
      WHERE au.user_id = auth.uid() AND au.is_active = true
    )
  );

CREATE POLICY "Users can update own client quotas" ON public.client_quota
  FOR UPDATE USING (
    user_id = auth.uid() OR 
    EXISTS (
      SELECT 1 FROM public.admin_users au 
      WHERE au.user_id = auth.uid() AND au.is_active = true
    )
  );

-- Fonction pour vérifier si un utilisateur est admin
CREATE OR REPLACE FUNCTION public.is_admin(user_uuid UUID DEFAULT auth.uid())
RETURNS BOOLEAN
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM public.admin_users 
    WHERE user_id = user_uuid AND is_active = true
  );
END;
$$;

-- Fonction pour créer le premier admin (à utiliser une seule fois)
CREATE OR REPLACE FUNCTION public.create_first_admin(admin_email TEXT)
RETURNS BOOLEAN
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  admin_user_id UUID;
BEGIN
  -- Vérifier qu'il n'y a pas déjà d'admin
  IF EXISTS (SELECT 1 FROM public.admin_users WHERE is_active = true) THEN
    RAISE EXCEPTION 'Des administrateurs existent déjà';
  END IF;
  
  -- Trouver l'utilisateur par email
  SELECT au.id INTO admin_user_id
  FROM auth.users au
  WHERE au.email = admin_email;
  
  IF admin_user_id IS NULL THEN
    RAISE EXCEPTION 'Utilisateur avec email % non trouvé', admin_email;
  END IF;
  
  -- Créer l'admin
  INSERT INTO public.admin_users (user_id, email, granted_by)
  VALUES (admin_user_id, admin_email, admin_user_id);
  
  RETURN true;
END;
$$;

-- Activer RLS sur les tables si ce n'est pas déjà fait
ALTER TABLE public.client_config ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.client_quota ENABLE ROW LEVEL SECURITY;
