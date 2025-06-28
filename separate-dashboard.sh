#!/bin/bash

# Script pour séparer le dashboard du widget
# Usage: ./separate-dashboard.sh

set -e

echo "🚀 Séparation du dashboard..."

# Variables
DASHBOARD_DIR="chatbot-dashboard"
SOURCE_DIR="."

# Créer le dossier dashboard
if [ -d "$DASHBOARD_DIR" ]; then
    echo "⚠️  Le dossier $DASHBOARD_DIR existe déjà. Suppression..."
    rm -rf "$DASHBOARD_DIR"
fi

echo "📁 Création du dossier dashboard..."
mkdir -p "$DASHBOARD_DIR"

# Copier les fichiers de base
echo "📋 Copie des fichiers de configuration..."
cp "$SOURCE_DIR/package.json" "$DASHBOARD_DIR/"
cp "$SOURCE_DIR/vite.config.ts" "$DASHBOARD_DIR/"
cp "$SOURCE_DIR/tailwind.config.ts" "$DASHBOARD_DIR/"
cp "$SOURCE_DIR/tsconfig.json" "$DASHBOARD_DIR/"
cp "$SOURCE_DIR/tsconfig.app.json" "$DASHBOARD_DIR/"
cp "$SOURCE_DIR/postcss.config.js" "$DASHBOARD_DIR/"
cp "$SOURCE_DIR/components.json" "$DASHBOARD_DIR/"
cp "$SOURCE_DIR/eslint.config.js" "$DASHBOARD_DIR/"
cp "$SOURCE_DIR/index.html" "$DASHBOARD_DIR/"

# Copier la configuration Supabase
echo "🗄️  Copie de la configuration Supabase..."
cp -r "$SOURCE_DIR/supabase" "$DASHBOARD_DIR/"

# Créer la structure src
echo "📂 Création de la structure src..."
mkdir -p "$DASHBOARD_DIR/src"

# Copier les dossiers source essentiels
echo "📁 Copie des dossiers source..."
cp -r "$SOURCE_DIR/src/pages" "$DASHBOARD_DIR/src/"
cp -r "$SOURCE_DIR/src/integrations" "$DASHBOARD_DIR/src/"
cp -r "$SOURCE_DIR/src/hooks" "$DASHBOARD_DIR/src/"
cp -r "$SOURCE_DIR/src/lib" "$DASHBOARD_DIR/src/"
cp -r "$SOURCE_DIR/src/types" "$DASHBOARD_DIR/src/"

# Copier les composants UI et essentiels
echo "🧩 Copie des composants..."
mkdir -p "$DASHBOARD_DIR/src/components"
cp -r "$SOURCE_DIR/src/components/ui" "$DASHBOARD_DIR/src/components/"
cp "$SOURCE_DIR/src/components/AuthContext.tsx" "$DASHBOARD_DIR/src/components/"
cp "$SOURCE_DIR/src/components/ProtectedRoute.tsx" "$DASHBOARD_DIR/src/components/"

# Copier les fichiers principaux
echo "📄 Copie des fichiers principaux..."
cp "$SOURCE_DIR/src/App.tsx" "$DASHBOARD_DIR/src/"
cp "$SOURCE_DIR/src/main.tsx" "$DASHBOARD_DIR/src/"
cp "$SOURCE_DIR/src/index.css" "$DASHBOARD_DIR/src/"
cp "$SOURCE_DIR/src/App.css" "$DASHBOARD_DIR/src/"
cp "$SOURCE_DIR/src/vite-env.d.ts" "$DASHBOARD_DIR/src/"

# Créer le dossier public
echo "🌐 Création du dossier public..."
mkdir -p "$DASHBOARD_DIR/public"
cp "$SOURCE_DIR/public/favicon.ico" "$DASHBOARD_DIR/public/"
cp "$SOURCE_DIR/public/robots.txt" "$DASHBOARD_DIR/public/"
cp "$SOURCE_DIR/public/placeholder.svg" "$DASHBOARD_DIR/public/"

# Modifier le package.json pour le dashboard
echo "⚙️  Modification du package.json..."
sed -i 's/"name": "chatbot-widget-saas"/"name": "chatbot-dashboard"/' "$DASHBOARD_DIR/package.json"
sed -i 's/"version": "1.0.0"/"version": "1.0.0"/' "$DASHBOARD_DIR/package.json"

# Supprimer les dépendances du serveur du package.json
echo "🧹 Nettoyage des dépendances serveur..."
node -e "
const fs = require('fs');
const pkg = JSON.parse(fs.readFileSync('$DASHBOARD_DIR/package.json', 'utf8'));

// Supprimer les dépendances serveur
delete pkg.dependencies.express;
delete pkg.dependencies.cors;
delete pkg.devDependencies.concurrently;

// Modifier les scripts
pkg.scripts = {
  'dev': 'vite',
  'build': 'vite build',
  'preview': 'vite preview',
  'lint': 'eslint .'
};

fs.writeFileSync('$DASHBOARD_DIR/package.json', JSON.stringify(pkg, null, 2));
"

# Modifier vite.config.ts pour le dashboard
echo "🔧 Configuration de Vite pour le dashboard..."
cat > "$DASHBOARD_DIR/vite.config.ts" << 'EOF'
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  server: {
    host: "::",
    port: 3001, // Port différent du widget
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
EOF

# Créer le fichier .env.example
echo "🔐 Création du fichier .env.example..."
cat > "$DASHBOARD_DIR/.env.example" << 'EOF'
# Supabase Configuration
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your_anon_key_here

# Dashboard Configuration
VITE_DASHBOARD_URL=https://dashboard.monchatbot.com
VITE_WIDGET_URL=https://cdn.monchatbot.com
EOF

# Créer le fichier render.yaml pour le dashboard
echo "🚀 Création du fichier render.yaml..."
cat > "$DASHBOARD_DIR/render.yaml" << 'EOF'
services:
  - type: web
    name: chatbot-dashboard
    env: node
    plan: free
    buildCommand: npm install && npm run build
    startCommand: npm run preview
    envVars:
      - key: VITE_SUPABASE_URL
        sync: false
      - key: VITE_SUPABASE_ANON_KEY
        sync: false
      - key: NODE_ENV
        value: production
EOF

# Créer un README pour le dashboard
echo "📖 Création du README..."
cat > "$DASHBOARD_DIR/README.md" << 'EOF'
# 🤖 Chatbot Dashboard

Interface d'administration pour gérer les configurations de chatbots.

## 🚀 Installation

```bash
npm install
```

## 🔧 Configuration

1. Copier `.env.example` vers `.env.local`
2. Remplir les variables Supabase

## 🛠️ Développement

```bash
npm run dev
```

## 🚀 Déploiement

```bash
npm run build
npm run preview
```

## 📊 Fonctionnalités

- Gestion des configurations client
- Interface d'administration moderne
- Génération de codes d'intégration
- Guide d'intégration intégré
EOF

# Créer un .gitignore pour le dashboard
echo "🚫 Création du .gitignore..."
cat > "$DASHBOARD_DIR/.gitignore" << 'EOF'
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?

# Environment variables
.env
.env.local
.env.development.local
.env.test.local
.env.production.local
EOF

echo "✅ Dashboard séparé avec succès !"
echo ""
echo "📁 Structure créée :"
echo "  $DASHBOARD_DIR/"
echo "  ├── src/"
echo "  │   ├── pages/           # Pages du dashboard"
echo "  │   ├── components/      # Composants UI"
echo "  │   ├── integrations/    # Intégrations Supabase"
echo "  │   └── ..."
echo "  ├── public/              # Assets statiques"
echo "  ├── supabase/            # Configuration Supabase"
echo "  └── package.json         # Dépendances dashboard"
echo ""
echo "🚀 Prochaines étapes :"
echo "  1. cd $DASHBOARD_DIR"
echo "  2. npm install"
echo "  3. cp .env.example .env.local"
echo "  4. npm run dev"
echo ""
echo "🎯 URLs finales :"
echo "  Dashboard: https://dashboard.monchatbot.com"
echo "  Widget: https://cdn.monchatbot.com/chatbot.js"
echo "  Configs: https://dashboard.monchatbot.com/configs/:clientId.json" 