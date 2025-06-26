
-- Créer la table client_config pour stocker la configuration de chaque client
CREATE TABLE IF NOT EXISTS public.client_config (
  client_id text PRIMARY KEY,
  logo_url text,
  color_primary text DEFAULT '#3B82F6',
  webhook_url text NOT NULL,
  bot_description text DEFAULT 'Bonjour, comment puis-je vous aider ?',
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Créer la table client_quota pour gérer les quotas
CREATE TABLE IF NOT EXISTS public.client_quota (
  client_id text PRIMARY KEY REFERENCES public.client_config(client_id) ON DELETE CASCADE,
  tokens_used integer DEFAULT 0 NOT NULL,
  tokens_max integer NOT NULL,
  reset_day integer DEFAULT 1,
  updated_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Activer Row Level Security sur les deux tables
ALTER TABLE public.client_config ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.client_quota ENABLE ROW LEVEL SECURITY;

-- Politique RLS pour client_config - accès public en lecture (pour le widget)
CREATE POLICY "Allow public read access to client_config" 
ON public.client_config 
FOR SELECT 
USING (true);

-- Politique RLS pour client_quota - accès public en lecture et écriture (pour le widget)
CREATE POLICY "Allow public read access to client_quota" 
ON public.client_quota 
FOR SELECT 
USING (true);

CREATE POLICY "Allow public update access to client_quota" 
ON public.client_quota 
FOR UPDATE 
USING (true);

-- Politique RLS pour permettre l'insertion et mise à jour depuis l'admin (pour plus tard)
CREATE POLICY "Allow admin insert and update client_config" 
ON public.client_config 
FOR ALL 
USING (true);

CREATE POLICY "Allow admin insert and update client_quota" 
ON public.client_quota 
FOR ALL 
USING (true);

-- Créer la fonction RPC pour vérifier et incrémenter les quotas
CREATE OR REPLACE FUNCTION public.check_and_increment_quota(client_id text)
RETURNS boolean AS $$
DECLARE
  current_usage integer;
  max_usage integer;
BEGIN
  -- Récupérer les quotas actuels
  SELECT tokens_used, tokens_max INTO current_usage, max_usage
  FROM public.client_quota
  WHERE client_quota.client_id = check_and_increment_quota.client_id;

  -- Vérifier si des données ont été trouvées
  IF current_usage IS NULL THEN
    RETURN false;
  END IF;

  -- Vérifier si le quota n'est pas dépassé
  IF current_usage < max_usage THEN
    -- Incrémenter le compteur
    UPDATE public.client_quota
    SET tokens_used = tokens_used + 1,
        updated_at = timezone('utc'::text, now())
    WHERE client_quota.client_id = check_and_increment_quota.client_id;
    RETURN true;
  ELSE
    RETURN false;
  END IF;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Insérer quelques données de démonstration
INSERT INTO public.client_config (client_id, logo_url, color_primary, webhook_url, bot_description) VALUES
('demo-client', 'https://via.placeholder.com/40', '#3B82F6', 'https://webhook.demo.com/chat', 'Bonjour ! Je suis votre assistant virtuel. Comment puis-je vous aider aujourd''hui ?'),
('client-restaurant', 'https://via.placeholder.com/40', '#EF4444', 'https://restaurant.webhook.com/ai', 'Bienvenue ! Je peux vous aider avec nos menus, réservations et services.'),
('client-tech', 'https://via.placeholder.com/40', '#10B981', 'https://tech.support.com/bot', 'Support technique disponible 24/7. Décrivez votre problème.')
ON CONFLICT (client_id) DO NOTHING;

INSERT INTO public.client_quota (client_id, tokens_used, tokens_max, reset_day) VALUES
('demo-client', 45, 100, 1),
('client-restaurant', 12, 200, 1),
('client-tech', 189, 500, 1)
ON CONFLICT (client_id) DO NOTHING;
