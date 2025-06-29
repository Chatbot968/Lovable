# Configuration Supabase

## Informations de connexion

- **URL Supabase**: `https://hgqndkfkuitafuzawuxl.supabase.co`
- **Project ID**: `hgqndkfkuitafuzawuxl`
- **Service Role Key**: `yJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhncW5ka2ZrdWl0YWZ1emF3dXhsIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NzkzNDg5MiwiZXhwIjoyMDYzNTEwODkyfQ.BexhC9LB-7Aea67mUPQI1OMVIZonH7-Z5EOOzq7GHDY`

## Structure de la base de données

### Tables principales

1. **client_config** - Configuration des chatbots clients
   - `client_id` (PRIMARY KEY)
   - `logo_url`
   - `color_primary`
   - `webhook_url`
   - `bot_description`
   - `banner_color`
   - `chat_background_color`
   - `text_color`
   - `created_at`

2. **client_quota** - Gestion des quotas d'utilisation
   - `client_id` (PRIMARY KEY, FOREIGN KEY vers client_config)
   - `tokens_used`
   - `tokens_max`
   - `reset_day`
   - `updated_at`

3. **admin_authenticated** - Authentification des administrateurs
   - `id` (UUID PRIMARY KEY)
   - `nom`
   - `prenom`
   - `email`
   - `question_1_reponse`
   - `question_2_reponse`
   - `created_at`

### Fonctions RPC

- `check_and_increment_quota(client_id)` - Vérifie et incrémente les quotas
- `update_client_id(old_id, new_id)` - Met à jour un client_id de manière sécurisée
- `verify_admin_auth(email, q1, q2)` - Vérifie l'authentification admin

## Configuration des projets

### Backend (server.js)
✅ **Configuré** - Utilise la service role key pour les opérations CRUD

### Dashboard React
✅ **Configuré** - Utilise la clé publique pour l'authentification

### Widget Chatbot
✅ **Configuré** - Récupère les configurations via l'API backend

## Données de démonstration

Les migrations incluent des données de test :
- `demo-client` - Configuration de démonstration
- `client-restaurant` - Exemple restaurant
- `client-tech` - Exemple support technique

## Sécurité

- **Row Level Security (RLS)** activé sur toutes les tables
- **Politiques d'accès** configurées pour permettre :
  - Lecture publique des configurations (pour le widget)
  - Accès complet pour les opérations admin
  - Mise à jour des quotas par le widget

## Prochaines étapes

1. ✅ **Configuration terminée** - Toutes les informations Supabase sont intégrées
2. ✅ **Backend configuré** - Utilise la service role key
3. ✅ **Dashboard configuré** - Utilise la clé publique
4. ✅ **Migrations appliquées** - Structure de base de données en place

**Le projet est maintenant entièrement configuré avec Supabase !** 🎉

## Test de connexion

Pour tester la connexion, vous pouvez :

1. **Backend** : Déployer sur Render avec les variables d'environnement
2. **Dashboard** : Tester localement avec `npm run dev`
3. **Widget** : Tester avec un client_id existant (ex: `demo-client`)

Tous les composants utilisent maintenant la même instance Supabase avec les bonnes permissions. 