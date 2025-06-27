# Quota Chat Widget

Un widget de chat intelligent avec gestion de quotas et reconnaissance vocale, construit avec React, TypeScript et Supabase.

## 🚀 Technologies utilisées

- **Frontend**: React 18, TypeScript, Vite
- **UI**: shadcn/ui, Tailwind CSS
- **Backend**: Supabase (Base de données, Auth, Realtime)
- **État**: TanStack Query (React Query)
- **Routing**: React Router DOM
- **Formulaires**: React Hook Form + Zod
- **Reconnaissance vocale**: Web Speech API

## 📁 Structure du projet

```
├── src/
│   ├── components/          # Composants React
│   │   ├── ui/             # Composants UI (shadcn/ui)
│   │   ├── client-config/  # Configuration client
│   │   └── ...
│   ├── pages/              # Pages de l'application
│   ├── hooks/              # Hooks personnalisés
│   ├── integrations/       # Intégrations (Supabase)
│   ├── lib/                # Utilitaires
│   └── types/              # Types TypeScript
├── public/                 # Assets statiques
├── supabase/               # Configuration Supabase
└── chatbot-standalone/     # Widget standalone
```

## 🛠️ Installation et développement

### Prérequis

- Node.js 18+ et npm
- Compte Supabase

### Installation

```bash
# Cloner le repository
git clone <YOUR_GIT_URL>

# Installer les dépendances
npm install

# Démarrer le serveur de développement
npm run dev
```

L'application sera disponible sur `http://localhost:8080`

## 🚀 Déploiement

### Render

1. Connectez votre repository GitHub à Render
2. Créez un nouveau **Static Site**
3. Configurez :
   - **Build Command**: `npm run build`
   - **Publish Directory**: `dist`
   - **Root Directory**: `.` (la racine du projet)

### Variables d'environnement

Créez un fichier `.env.local` avec vos variables Supabase :

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## 📦 Scripts disponibles

- `npm run dev` - Démarre le serveur de développement
- `npm run build` - Build de production
- `npm run preview` - Prévisualise le build de production
- `npm run lint` - Lance ESLint

## 🔧 Configuration

### Supabase

1. Créez un projet Supabase
2. Configurez les tables nécessaires (voir `supabase/migrations/`)
3. Ajoutez vos variables d'environnement

### Widget Standalone

Le dossier `chatbot-standalone/` contient une version standalone du widget qui peut être intégrée dans n'importe quel site web.

## 📝 Fonctionnalités

- ✅ Authentification utilisateur
- ✅ Chat en temps réel
- ✅ Reconnaissance vocale
- ✅ Gestion des quotas
- ✅ Configuration client
- ✅ Interface d'administration
- ✅ Widget standalone

## 🤝 Contribution

1. Fork le projet
2. Créez une branche feature (`git checkout -b feature/AmazingFeature`)
3. Committez vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request
