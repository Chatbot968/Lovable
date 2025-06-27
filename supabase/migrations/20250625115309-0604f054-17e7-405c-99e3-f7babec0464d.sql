
-- Corriger la fonction RPC pour modifier le client_id de manière sécurisée
-- L'ordre est important : d'abord client_quota, puis client_config
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
  -- Vérifier que l'ancien client_id existe
  IF NOT EXISTS (SELECT 1 FROM public.client_config WHERE client_id = old_client_id) THEN
    RAISE EXCEPTION 'Le client_id % n''existe pas', old_client_id;
  END IF;

  -- Vérifier que le nouveau client_id n'existe pas déjà
  IF EXISTS (SELECT 1 FROM public.client_config WHERE client_id = new_client_id) THEN
    RAISE EXCEPTION 'Le client_id % existe déjà', new_client_id;
  END IF;

  -- Mettre à jour client_quota EN PREMIER (table enfant)
  UPDATE public.client_quota 
  SET client_id = new_client_id 
  WHERE client_id = old_client_id;
  
  GET DIAGNOSTICS quota_rows_affected = ROW_COUNT;

  -- Puis mettre à jour client_config (table parent)
  UPDATE public.client_config 
  SET client_id = new_client_id 
  WHERE client_id = old_client_id;
  
  GET DIAGNOSTICS config_rows_affected = ROW_COUNT;

  -- Vérifier que les deux mises à jour ont réussi
  IF config_rows_affected > 0 AND quota_rows_affected > 0 THEN
    RAISE NOTICE 'Client ID modifié avec succès: % -> %', old_client_id, new_client_id;
    RETURN true;
  ELSE
    RAISE EXCEPTION 'Échec de la mise à jour du client_id: config_rows=%, quota_rows=%', config_rows_affected, quota_rows_affected;
  END IF;
END;
$$;
