# Script PowerShell pour séparer le dashboard du widget
# Usage: .\separate-dashboard.ps1

param(
    [string]$SourceDir = ".",
    [string]$DashboardDir = "dashboard"
)

Write-Host "🚀 Séparation du dashboard..." -ForegroundColor Green

# Vérifier si le dossier dashboard existe déjà
if (Test-Path $DashboardDir) {
    Write-Host "⚠️  Le dossier $DashboardDir existe déjà. Suppression..." -ForegroundColor Yellow
    Remove-Item -Recurse -Force $DashboardDir
}

Write-Host "📁 Création du dossier dashboard..." -ForegroundColor Blue
New-Item -ItemType Directory -Path $DashboardDir | Out-Null

# Copier les fichiers de base
Write-Host "📋 Copie des fichiers de configuration..." -ForegroundColor Blue
$configFiles = @(
    "package.json",
    "vite.config.ts", 
    "tailwind.config.ts",
    "tsconfig.json",
    "tsconfig.app.json",
    "postcss.config.js",
    "components.json",
    "eslint.config.js",
    "index.html"
)

foreach ($file in $configFiles) {
    if (Test-Path "$SourceDir\$file") {
        Copy-Item "$SourceDir\$file" "$DashboardDir\$file"
    }
}

# Copier la configuration Supabase
Write-Host "🗄️  Copie de la configuration Supabase..." -ForegroundColor Blue
if (Test-Path "$SourceDir\supabase") {
    Copy-Item -Recurse "$SourceDir\supabase" "$DashboardDir\supabase"
}

# Créer la structure src
Write-Host "📂 Création de la structure src..." -ForegroundColor Blue
New-Item -ItemType Directory -Path "$DashboardDir\src" | Out-Null

# Copier les dossiers source essentiels
Write-Host "📁 Copie des dossiers source..." -ForegroundColor Blue
$sourceDirs = @("pages", "integrations", "hooks", "lib", "types")
foreach ($dir in $sourceDirs) {
    if (Test-Path "$SourceDir\src\$dir") {
        Copy-Item -Recurse "$SourceDir\src\$dir" "$DashboardDir\src\$dir"
    }
}

# Copier les composants UI et essentiels
Write-Host "🧩 Copie des composants..." -ForegroundColor Blue
New-Item -ItemType Directory -Path "$DashboardDir\src\components" | Out-Null
if (Test-Path "$SourceDir\src\components\ui") {
    Copy-Item -Recurse "$SourceDir\src\components\ui" "$DashboardDir\src\components\ui"
}
if (Test-Path "$SourceDir\src\components\AuthContext.tsx") {
    Copy-Item "$SourceDir\src\components\AuthContext.tsx" "$DashboardDir\src\components\"
}
if (Test-Path "$SourceDir\src\components\ProtectedRoute.tsx") {
    Copy-Item "$SourceDir\src\components\ProtectedRoute.tsx" "$DashboardDir\src\components\"
}

# Copier les fichiers principaux
Write-Host "📄 Copie des fichiers principaux..." -ForegroundColor Blue
$mainFiles = @("App.tsx", "main.tsx", "index.css", "App.css", "vite-env.d.ts")
foreach ($file in $mainFiles) {
    if (Test-Path "$SourceDir\src\$file") {
        Copy-Item "$SourceDir\src\$file" "$DashboardDir\src\$file"
    }
}

# Créer le dossier public
Write-Host "🌐 Création du dossier public..." -ForegroundColor Blue
New-Item -ItemType Directory -Path "$DashboardDir\public" | Out-Null
$publicFiles = @("favicon.ico", "robots.txt", "placeholder.svg")
foreach ($file in $publicFiles) {
    if (Test-Path "$SourceDir\public\$file") {
        Copy-Item "$SourceDir\public\$file" "$DashboardDir\public\$file"
    }
}

# Modifier le package.json pour le dashboard
Write-Host "⚙️  Modification du package.json..." -ForegroundColor Blue
$packageJson = Get-Content "$DashboardDir\package.json" | ConvertFrom-Json
$packageJson.name = "chatbot-dashboard"

# Supprimer les dépendances serveur
if ($packageJson.dependencies.express) {
    $packageJson.dependencies.PSObject.Properties.Remove('express')
}
if ($packageJson.dependencies.cors) {
    $packageJson.dependencies.PSObject.Properties.Remove('cors')
}
if ($packageJson.devDependencies.concurrently) {
    $packageJson.devDependencies.PSObject.Properties.Remove('concurrently')
}

# Modifier les scripts
$packageJson.scripts = @{
    "dev" = "vite"
    "build" = "vite build"
    "preview" = "vite preview"
    "lint" = "eslint ."
}

$packageJson | ConvertTo-Json -Depth 10 | Set-Content "$DashboardDir\package.json"

# Modifier vite.config.ts pour le dashboard
Write-Host "🔧 Configuration de Vite pour le dashboard..." -ForegroundColor Blue
$viteConfig = @"
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
"@
Set-Content "$DashboardDir\vite.config.ts" $viteConfig

# Créer le fichier .env.example
Write-Host "🔐 Création du fichier .env.example..." -ForegroundColor Blue
$envExample = @"
# Supabase Configuration
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your_anon_key_here

# Dashboard Configuration
VITE_DASHBOARD_URL=https://dashboard.monchatbot.com
VITE_WIDGET_URL=https://cdn.monchatbot.com
"@
Set-Content "$DashboardDir\.env.example" $envExample

# Créer le fichier render.yaml pour le dashboard
Write-Host "🚀 Création du fichier render.yaml..." -ForegroundColor Blue
$renderYaml = @"
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
"@
Set-Content "$DashboardDir\render.yaml" $renderYaml

# Créer un README pour le dashboard
Write-Host "📖 Création du README..." -ForegroundColor Blue
$readme = @"
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
"@
Set-Content "$DashboardDir\README.md" $readme

# Créer un .gitignore pour le dashboard
Write-Host "🚫 Création du .gitignore..." -ForegroundColor Blue
$gitignore = @"
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
"@
Set-Content "$DashboardDir\.gitignore" $gitignore

Write-Host "✅ Dashboard séparé avec succès !" -ForegroundColor Green
Write-Host ""
Write-Host "📁 Structure créée :" -ForegroundColor Cyan
Write-Host "  $DashboardDir/" -ForegroundColor White
Write-Host "  ├── src/" -ForegroundColor White
Write-Host "  │   ├── pages/           # Pages du dashboard" -ForegroundColor Gray
Write-Host "  │   ├── components/      # Composants UI" -ForegroundColor Gray
Write-Host "  │   ├── integrations/    # Intégrations Supabase" -ForegroundColor Gray
Write-Host "  │   └── ..." -ForegroundColor Gray
Write-Host "  ├── public/              # Assets statiques" -ForegroundColor Gray
Write-Host "  ├── supabase/            # Configuration Supabase" -ForegroundColor Gray
Write-Host "  └── package.json         # Dépendances dashboard" -ForegroundColor Gray
Write-Host ""
Write-Host "🚀 Prochaines étapes :" -ForegroundColor Yellow
Write-Host "  1. cd $DashboardDir" -ForegroundColor White
Write-Host "  2. npm install" -ForegroundColor White
Write-Host "  3. Copy-Item .env.example .env.local" -ForegroundColor White
Write-Host "  4. npm run dev" -ForegroundColor White
Write-Host ""
Write-Host "🎯 URLs finales :" -ForegroundColor Cyan
Write-Host "  Dashboard: https://dashboard.monchatbot.com" -ForegroundColor White
Write-Host "  Widget: https://cdn.monchatbot.com/chatbot.js" -ForegroundColor White
Write-Host "  Configs: https://dashboard.monchatbot.com/configs/:clientId.json" -ForegroundColor White 