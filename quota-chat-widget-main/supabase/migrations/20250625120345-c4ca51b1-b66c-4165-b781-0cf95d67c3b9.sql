
-- Supprimer l'ancienne fonction et créer la nouvelle avec le bon nom de paramètre
DROP FUNCTION IF EXISTS public.check_and_increment_quota(text);

-- Créer la fonction check_and_increment_quota corrigée
CREATE OR REPLACE FUNCTION public.check_and_increment_quota(p_client_id text)
RETURNS boolean
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  current_used int;
  max_limit int;
BEGIN
  -- Récupérer les quotas actuels avec les nouvelles colonnes
  SELECT COALESCE(used, tokens_used, 0), COALESCE("limit", tokens_max, 100) 
  INTO current_used, max_limit
  FROM public.client_quota
  WHERE client_id = p_client_id;

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

-- Ajouter les colonnes manquantes à client_quota si elles n'existent pas
DO $$ 
BEGIN
    -- Vérifier si la colonne 'used' existe, sinon la créer
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                   WHERE table_name = 'client_quota' AND column_name = 'used') THEN
        ALTER TABLE public.client_quota ADD COLUMN used integer DEFAULT 0;
    END IF;
    
    -- Vérifier si la colonne 'limit' existe, sinon la créer
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                   WHERE table_name = 'client_quota' AND column_name = 'limit') THEN
        ALTER TABLE public.client_quota ADD COLUMN "limit" integer DEFAULT 100;
    END IF;
    
    -- Vérifier si la colonne 'last_updated_at' existe, sinon la créer
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                   WHERE table_name = 'client_quota' AND column_name = 'last_updated_at') THEN
        ALTER TABLE public.client_quota ADD COLUMN last_updated_at timestamp with time zone DEFAULT now();
    END IF;
    
    -- Vérifier si la colonne 'description' existe dans client_config, sinon la créer
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                   WHERE table_name = 'client_config' AND column_name = 'description') THEN
        ALTER TABLE public.client_config ADD COLUMN description text DEFAULT 'Bonjour, comment puis-je vous aider ?';
    END IF;
END $$;

-- Migrer les données existantes si nécessaire
UPDATE public.client_quota 
SET used = COALESCE(tokens_used, 0), 
    "limit" = COALESCE(tokens_max, 100),
    last_updated_at = COALESCE(updated_at, NOW())
WHERE used IS NULL OR "limit" IS NULL OR last_updated_at IS NULL;
