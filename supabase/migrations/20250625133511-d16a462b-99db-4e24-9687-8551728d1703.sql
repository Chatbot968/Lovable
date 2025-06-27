
-- Créer l'utilisateur admin directement dans la base de données
-- Note: Le mot de passe sera hashé automatiquement par Supabase Auth
INSERT INTO auth.users (
  instance_id,
  id,
  aud,
  role,
  email,
  encrypted_password,
  email_confirmed_at,
  recovery_sent_at,
  last_sign_in_at,
  raw_app_meta_data,
  raw_user_meta_data,
  created_at,
  updated_at,
  confirmation_token,
  email_change,
  email_change_token_new,
  recovery_token
) VALUES (
  '00000000-0000-0000-0000-000000000000',
  gen_random_uuid(),
  'authenticated',
  'authenticated',
  'lamperein.diego47@gmail.com',
  crypt('diegolerigolo.47', gen_salt('bf')),
  NOW(),
  NOW(),
  NOW(),
  '{"provider": "email", "providers": ["email"]}',
  '{"full_name": "Diego Admin"}',
  NOW(),
  NOW(),
  '',
  '',
  '',
  ''
);

-- Récupérer l'ID de l'utilisateur créé et l'ajouter à admin_users
INSERT INTO public.admin_users (user_id, email, granted_by, is_active)
SELECT 
  id,
  'lamperein.diego47@gmail.com',
  id,
  true
FROM auth.users 
WHERE email = 'lamperein.diego47@gmail.com';
