
-- Ajouter les nouveaux champs de couleur à la table client_config
ALTER TABLE public.client_config 
ADD COLUMN banner_color text DEFAULT '#3B82F6',
ADD COLUMN chat_background_color text DEFAULT '#ffffff',
ADD COLUMN text_color text DEFAULT '#000000';

-- Créer une fonction pour modifier le client_id de manière sécurisée
CREATE OR REPLACE FUNCTION public.update_client_id(
  old_client_id text,
  new_client_id text
) 
RETURNS boolean
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  config_rows_affected integer;
  quota_rows_affected integer;
BEGIN
  -- Vérifier que le nouveau client_id n'existe pas déjà
  IF EXISTS (SELECT 1 FROM public.client_config WHERE client_id = new_client_id) THEN
    RAISE EXCEPTION 'Le client_id % existe déjà', new_client_id;
  END IF;

  -- Mettre à jour client_config
  UPDATE public.client_config 
  SET client_id = new_client_id 
  WHERE client_id = old_client_id;
  
  GET DIAGNOSTICS config_rows_affected = ROW_COUNT;

  -- Mettre à jour client_quota
  UPDATE public.client_quota 
  SET client_id = new_client_id 
  WHERE client_id = old_client_id;
  
  GET DIAGNOSTICS quota_rows_affected = ROW_COUNT;

  -- Vérifier que les deux mises à jour ont réussi
  IF config_rows_affected > 0 AND quota_rows_affected > 0 THEN
    -- Log de la modification
    RAISE NOTICE 'Client ID modifié avec succès: % -> %', old_client_id, new_client_id;
    RETURN true;
  ELSE
    -- Rollback automatique en cas d'échec
    RAISE EXCEPTION 'Échec de la mise à jour du client_id: config_rows=%, quota_rows=%', config_rows_affected, quota_rows_affected;
  END IF;
END;
$$;
