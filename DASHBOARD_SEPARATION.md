# 🛠️ Guide de séparation du Dashboard

Ce guide vous explique comment extraire et héberger le dashboard séparément du widget chatbot.

## 📁 Structure du Dashboard

### 🎯 **Dossiers essentiels pour le dashboard**

```
dashboard/
├── src/
│   ├── pages/                    # Pages principales
│   │   ├── Dashboard.tsx         # Page principale du dashboard
│   │   ├── Auth.tsx             # Page d'authentification
│   │   └── NotFound.tsx         # Page 404
│   ├── components/              # Composants React
│   │   ├── ui/                  # Composants UI (shadcn/ui)
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── dialog.tsx
│   │   │   ├── input.tsx
│   │   │   ├── label.tsx
│   │   │   ├── tabs.tsx
│   │   │   ├── badge.tsx
│   │   │   ├── toast.tsx
│   │   │   └── ... (tous les composants UI)
│   │   ├── AuthContext.tsx      # Contexte d'authentification
│   │   └── ProtectedRoute.tsx   # Route protégée
│   ├── integrations/            # Intégrations externes
│   │   └── supabase/
│   │       ├── client.ts        # Client Supabase
│   │       └── types.ts         # Types TypeScript
│   ├── hooks/                   # Hooks personnalisés
│   │   ├── use-toast.ts         # Hook pour les notifications
│   │   └── use-mobile.tsx       # Hook pour détecter mobile
│   ├── lib/                     # Utilitaires
│   │   └── utils.ts             # Fonctions utilitaires
│   ├── types/                   # Types TypeScript
│   │   ├── client.ts            # Types client
│   │   └── speech-recognition.d.ts
│   ├── App.tsx                  # Composant principal
│   ├── main.tsx                 # Point d'entrée
│   ├── index.css                # Styles globaux
│   └── App.css                  # Styles de l'app
├── public/                      # Assets statiques
│   ├── favicon.ico
│   ├── robots.txt
│   └── placeholder.svg
├── supabase/                    # Configuration Supabase
│   ├── config.toml
│   └── migrations/
├── package.json                 # Dépendances
├── vite.config.ts              # Configuration Vite
├── tailwind.config.ts          # Configuration Tailwind
├── tsconfig.json               # Configuration TypeScript
└── index.html                  # Template HTML
```

## 🚀 **Étapes de séparation**

### 1. **Créer un nouveau projet dashboard**

```bash
# Créer un nouveau dossier
mkdir chatbot-dashboard
cd chatbot-dashboard

# Initialiser un nouveau projet Vite
npm create vite@latest . -- --template react-ts
```

### 2. **Copier les fichiers essentiels**

```bash
# Copier les dossiers source
cp -r ../quota-chat-widget-main/src/pages ./src/
cp -r ../quota-chat-widget-main/src/components ./src/
cp -r ../quota-chat-widget-main/src/integrations ./src/
cp -r ../quota-chat-widget-main/src/hooks ./src/
cp -r ../quota-chat-widget-main/src/lib ./src/
cp -r ../quota-chat-widget-main/src/types ./src/

# Copier les fichiers de configuration
cp ../quota-chat-widget-main/vite.config.ts ./
cp ../quota-chat-widget-main/tailwind.config.ts ./
cp ../quota-chat-widget-main/tsconfig.json ./
cp ../quota-chat-widget-main/tsconfig.app.json ./
cp ../quota-chat-widget-main/postcss.config.js ./
cp ../quota-chat-widget-main/components.json ./
cp ../quota-chat-widget-main/eslint.config.js ./

# Copier la configuration Supabase
cp -r ../quota-chat-widget-main/supabase ./
```

### 3. **Modifier le package.json**

```json
{
  "name": "chatbot-dashboard",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "lint": "eslint ."
  },
  "dependencies": {
    "@hookform/resolvers": "^3.9.0",
    "@radix-ui/react-accordion": "^1.2.0",
    "@radix-ui/react-alert-dialog": "^1.1.1",
    "@radix-ui/react-aspect-ratio": "^1.1.0",
    "@radix-ui/react-avatar": "^1.1.0",
    "@radix-ui/react-checkbox": "^1.1.1",
    "@radix-ui/react-collapsible": "^1.1.0",
    "@radix-ui/react-context-menu": "^2.2.1",
    "@radix-ui/react-dialog": "^1.1.2",
    "@radix-ui/react-dropdown-menu": "^2.1.1",
    "@radix-ui/react-hover-card": "^1.1.1",
    "@radix-ui/react-label": "^2.1.0",
    "@radix-ui/react-menubar": "^1.1.1",
    "@radix-ui/react-navigation-menu": "^1.2.0",
    "@radix-ui/react-popover": "^1.1.1",
    "@radix-ui/react-progress": "^1.1.0",
    "@radix-ui/react-radio-group": "^1.2.0",
    "@radix-ui/react-scroll-area": "^1.1.0",
    "@radix-ui/react-select": "^2.1.1",
    "@radix-ui/react-separator": "^1.1.0",
    "@radix-ui/react-slider": "^1.2.0",
    "@radix-ui/react-slot": "^1.1.0",
    "@radix-ui/react-switch": "^1.1.0",
    "@radix-ui/react-tabs": "^1.1.0",
    "@radix-ui/react-toast": "^1.2.1",
    "@radix-ui/react-toggle": "^1.1.0",
    "@radix-ui/react-toggle-group": "^1.1.0",
    "@radix-ui/react-tooltip": "^1.1.4",
    "@supabase/supabase-js": "^2.50.1",
    "@tanstack/react-query": "^5.56.2",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "cmdk": "^1.0.0",
    "date-fns": "^3.6.0",
    "embla-carousel-react": "^8.3.0",
    "input-otp": "^1.2.4",
    "lucide-react": "^0.462.0",
    "next-themes": "^0.3.0",
    "react": "^18.3.1",
    "react-day-picker": "^8.10.1",
    "react-dom": "^18.3.1",
    "react-hook-form": "^7.53.0",
    "react-markdown": "^10.1.0",
    "react-resizable-panels": "^2.1.3",
    "react-router-dom": "^6.26.2",
    "recharts": "^2.12.7",
    "sonner": "^1.5.0",
    "tailwind-merge": "^2.5.2",
    "tailwindcss-animate": "^1.0.7",
    "vaul": "^0.9.3",
    "zod": "^3.23.8"
  },
  "devDependencies": {
    "@eslint/js": "^9.9.0",
    "@tailwindcss/typography": "^0.5.15",
    "@types/node": "^22.5.5",
    "@types/react": "^18.3.3",
    "@types/react-dom": "^18.3.0",
    "@vitejs/plugin-react-swc": "^3.5.0",
    "autoprefixer": "^10.4.20",
    "eslint": "^9.9.0",
    "eslint-plugin-react-hooks": "^5.1.0-rc.0",
    "eslint-plugin-react-refresh": "^0.4.9",
    "globals": "^15.9.0",
    "postcss": "^8.4.47",
    "tailwindcss": "^3.4.11",
    "typescript": "^5.5.3",
    "typescript-eslint": "^8.0.1",
    "vite": "^5.4.1"
  }
}
```

### 4. **Modifier App.tsx pour le dashboard uniquement**

```tsx
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/components/AuthContext";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import Dashboard from "./pages/Dashboard";
import Auth from "./pages/Auth";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/auth" element={<Auth />} />
            <Route path="/" element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
```

### 5. **Modifier vite.config.ts**

```ts
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
```

## 🔧 **Configuration des variables d'environnement**

Créer un fichier `.env.local` :

```env
# Supabase Configuration
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your_anon_key_here

# Dashboard Configuration
VITE_DASHBOARD_URL=https://dashboard.monchatbot.com
VITE_WIDGET_URL=https://cdn.monchatbot.com
```

## 🚀 **Déploiement séparé**

### **Dashboard sur Render**

```yaml
# render-dashboard.yaml
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
```

### **Widget sur CDN**

Le widget (`chatbot.js`) peut être hébergé sur :
- **Cloudflare Pages**
- **Vercel**
- **Netlify**
- **AWS S3 + CloudFront**

## 📁 **Fichiers à exclure du dashboard**

❌ **Ne pas copier** :
- `public/chatbot.js` (widget autonome)
- `public/example.html` (exemple widget)
- `public/test.html` (test widget)
- `server.js` (API widget)
- `src/components/ChatbotWidget.tsx` (widget React)
- `src/components/VoiceChatWidget.tsx` (widget React)
- `src/pages/Index.tsx` (ancienne page)

## 🔗 **Communication entre dashboard et widget**

### **Dashboard → Widget**
- Le dashboard génère des configurations JSON
- Les configurations sont accessibles via `/configs/:clientId.json`
- Le widget récupère sa configuration depuis cette URL

### **Widget → Dashboard**
- Le widget envoie des requêtes au webhook configuré
- Le dashboard peut afficher les statistiques d'utilisation

## 🎯 **URLs finales**

```
Dashboard: https://dashboard.monchatbot.com
Widget: https://cdn.monchatbot.com/chatbot.js
Configs: https://dashboard.monchatbot.com/configs/:clientId.json
```

## 📦 **Scripts de déploiement**

```bash
# Dashboard
npm run build
npm run preview

# Widget (séparé)
# Copier public/chatbot.js vers CDN
```

## ✅ **Avantages de la séparation**

1. **Scalabilité** : Dashboard et widget peuvent évoluer indépendamment
2. **Performance** : Widget léger, dashboard riche en fonctionnalités
3. **Sécurité** : Isolation des responsabilités
4. **Maintenance** : Développement et déploiement séparés
5. **CDN** : Widget optimisé pour la distribution globale

## 🎉 **Résultat final**

- **Dashboard** : Interface d'administration complète
- **Widget** : Fichier JavaScript autonome
- **API** : Configuration dynamique
- **Séparation** : Architecture modulaire et scalable

**Le dashboard est maintenant prêt à être hébergé séparément !** 🚀 