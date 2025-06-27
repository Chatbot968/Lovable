# 🤖 Chatbot Widget SaaS

Une plateforme SaaS complète pour créer et intégrer des chatbots intelligents sur n'importe quel site web.

## 🚀 Architecture

Le projet est divisé en deux parties distinctes :

### 🧩 **Widget Autonome** (`public/chatbot.js`)
- Fichier JavaScript unique injectable sur n'importe quel site
- Interface de chat moderne avec reconnaissance vocale
- Configuration dynamique via clientId
- Isolation CSS complète (aucun conflit)
- Fonctionnalités : chat, reconnaissance vocale, synthèse vocale

### 🛠️ **Dashboard de Configuration** (React App)
- Interface d'administration pour gérer les configurations
- CRUD des configurations de chatbots
- Génération automatique des codes d'intégration
- Guide d'intégration complet

## 📁 Structure du projet

```
├── public/
│   ├── chatbot.js          # Widget autonome
│   └── example.html        # Exemple d'intégration
├── src/
│   ├── pages/
│   │   ├── Dashboard.tsx   # Dashboard de configuration
│   │   ├── Auth.tsx        # Authentification
│   │   └── NotFound.tsx    # Page 404
│   ├── components/         # Composants React
│   └── integrations/       # Intégrations Supabase
├── server.js               # API Express pour les configs
├── supabase/               # Configuration Supabase
└── chatbot-standalone/     # Ancien widget (déprécié)
```

## 🛠️ Installation et développement

### Prérequis

- Node.js 18+ et npm
- Compte Supabase
- Variables d'environnement configurées

### Installation

```bash
# Cloner le repository
git clone <YOUR_GIT_URL>

# Installer les dépendances
npm install

# Variables d'environnement
cp .env.example .env.local
# Remplir VITE_SUPABASE_URL et SUPABASE_SERVICE_ROLE_KEY
```

### Développement

```bash
# Dashboard uniquement (port 8080)
npm run dev

# API serveur uniquement (port 3000)
npm run dev:server

# Les deux en même temps
npm run dev:full
```

## 🚀 Déploiement

### Render (Recommandé)

1. **Connectez votre repository** GitHub à Render
2. **Créez un nouveau Web Service**
3. **Configurez** :
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`
   - **Environment Variables**:
     - `VITE_SUPABASE_URL`
     - `SUPABASE_SERVICE_ROLE_KEY`
     - `PORT` (optionnel, défaut: 3000)

### Vercel

1. **Connectez votre repository** à Vercel
2. **Configurez** :
   - **Framework Preset**: Node.js
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

## 📦 Scripts disponibles

- `npm run dev` - Dashboard de développement
- `npm run dev:server` - API serveur de développement
- `npm run dev:full` - Les deux en même temps
- `npm run build` - Build de production
- `npm start` - Démarrage en production
- `npm run lint` - Vérification du code

## 🔧 Configuration

### Variables d'environnement

```env
# Supabase
VITE_SUPABASE_URL=your_supabase_url
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# Serveur
PORT=3000
```

### Base de données Supabase

Le projet utilise les tables suivantes :

```sql
-- Table des configurations client
CREATE TABLE client_configs (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  client_id TEXT UNIQUE NOT NULL,
  logo_url TEXT,
  color_primary TEXT DEFAULT '#4299e1',
  webhook_url TEXT NOT NULL,
  bot_description TEXT NOT NULL,
  banner_color TEXT DEFAULT '#2d3748',
  chat_background_color TEXT DEFAULT '#f7fafc',
  text_color TEXT DEFAULT '#2d3748',
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

## 🎯 Utilisation

### 1. Créer une configuration

1. Connectez-vous au dashboard
2. Cliquez sur "Nouvelle configuration"
3. Remplissez les champs :
   - **Client ID** : Identifiant unique (ex: CLIENT123)
   - **Description** : Nom du bot
   - **Webhook URL** : URL de votre webhook n8n
   - **Logo** : URL de votre logo
   - **Couleurs** : Personnalisation visuelle

### 2. Intégrer le widget

Ajoutez cette ligne dans votre HTML :

```html
<script src="https://votre-domaine.com/chatbot.js" data-client-id="CLIENT123"></script>
```

### 3. Options avancées

```html
<script 
  src="https://votre-domaine.com/chatbot.js" 
  data-client-id="CLIENT123"
  data-position="bottom-right"
  data-theme="light"
  data-language="fr"
  data-auto-open="false"
  data-greeting="Bonjour ! Comment puis-je vous aider ?"
  data-voice-enabled="true">
</script>
```

## 🔌 API Endpoints

### Configuration JSON
```
GET /configs/:clientId.json
```

### Widget JavaScript
```
GET /chatbot.js
```

### Exemple d'intégration
```
GET /example
```

### Santé du service
```
GET /health
```

## 📝 Fonctionnalités

### Widget
- ✅ Chat en temps réel
- ✅ Reconnaissance vocale
- ✅ Synthèse vocale
- ✅ Interface responsive
- ✅ Isolation CSS complète
- ✅ Configuration dynamique
- ✅ Support multilingue
- ✅ Thèmes personnalisables

### Dashboard
- ✅ Gestion des configurations
- ✅ Interface d'administration
- ✅ Génération de codes d'intégration
- ✅ Guide d'intégration
- ✅ Authentification sécurisée
- ✅ CRUD complet

## 🤝 Contribution

1. Fork le projet
2. Créez une branche feature (`git checkout -b feature/AmazingFeature`)
3. Committez vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 🆘 Support

Pour toute question ou problème :
- 📧 Email : support@monchatbot.com
- 📖 Documentation : https://docs.monchatbot.com
- 🐛 Issues : GitHub Issues
