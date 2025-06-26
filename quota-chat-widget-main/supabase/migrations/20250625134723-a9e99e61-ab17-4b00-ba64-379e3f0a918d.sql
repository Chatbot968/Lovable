
-- Supprimer la table admin_users existante
DROP TABLE IF EXISTS public.admin_users CASCADE;

-- Supprimer les fonctions liées aux anciens admins
DROP FUNCTION IF EXISTS public.is_admin(uuid);
DROP FUNCTION IF EXISTS public.create_first_admin(text);

-- Créer la nouvelle table admin_authenticated
CREATE TABLE public.admin_authenticated (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  nom TEXT NOT NULL,
  prenom TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  question_1_reponse TEXT NOT NULL,
  question_2_reponse TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL
);

-- Insérer l'admin avec les informations fournies
INSERT INTO public.admin_authenticated (nom, prenom, email, question_1_reponse, question_2_reponse)
VALUES ('lamperim', 'diego', 'lamperimdiego.47@gmail.com', 'bons', 'pilou');

-- Activer RLS sur la nouvelle table
ALTER TABLE public.admin_authenticated ENABLE ROW LEVEL SECURITY;

-- Politique pour permettre la lecture (pour la vérification de connexion)
CREATE POLICY "Allow read for authentication" ON public.admin_authenticated
  FOR SELECT USING (true);

-- Fonction pour vérifier l'authentification admin
CREATE OR REPLACE FUNCTION public.verify_admin_auth(
  p_email TEXT,
  p_question_1 TEXT,
  p_question_2 TEXT
) RETURNS BOOLEAN
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM public.admin_authenticated
    WHERE email = p_email 
    AND question_1_reponse = p_question_1 
    AND question_2_reponse = p_question_2
  );
END;
$$;
