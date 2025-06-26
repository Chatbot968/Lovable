# Chatbot Standalone

Version standalone du chatbot widget pour intégration facile via script.

## Installation

```bash
npm install
```

## Développement

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Intégration

### 1. Via CDN (recommandé)

Ajoutez ce script à votre page HTML :

```html
<!DOCTYPE html>
<html>
<head>
    <title>Mon Site</title>
</head>
<body>
    <!-- Votre contenu -->
    
    <!-- Chatbot Widget -->
    <script src="https://votre-cdn.com/chatbot.js"></script>
    <script>
        // Initialiser le chatbot
        const chatbot = new ChatbotWidget({
            clientId: 'votre-client-id',
            isDemo: false // Mettre à true pour le mode démo
        });
    </script>
</body>
</html>
```

### 2. Via import ES6

```javascript
import { ChatbotWidget } from './dist/chatbot.js';

// Créer une instance du chatbot
const chatbot = new ChatbotWidget({
    clientId: 'votre-client-id',
    isDemo: false
});
```

### 3. Via script tag local

```html
<script src="./dist/chatbot.js"></script>
<script>
    const chatbot = new ChatbotWidget({
        clientId: 'votre-client-id'
    });
</script>
```

## Configuration

Le chatbot nécessite un `clientId` qui correspond à un client configuré dans votre base de données Supabase.

### Paramètres

- `clientId` (string, requis) : L'identifiant du client
- `isDemo` (boolean, optionnel) : Active le mode démo avec des réponses simulées

## Fonctionnalités

- ✅ Interface de chat moderne
- ✅ Support du markdown dans les réponses
- ✅ Mode plein écran
- ✅ Personnalisation des couleurs
- ✅ Intégration webhook
- ✅ Gestion des erreurs
- ✅ Responsive design

## Structure des fichiers

```
chatbot-standalone/
├── src/
│   ├── components/ui/     # Composants UI
│   ├── integrations/      # Configuration Supabase
│   ├── lib/              # Utilitaires
│   ├── chatbot.tsx       # Composant principal
│   ├── main.tsx          # Point d'entrée
│   └── index.css         # Styles
├── dist/                 # Fichiers buildés
├── package.json
├── vite.config.ts
└── README.md
```

## Développement

Pour tester le chatbot en mode développement :

1. Clonez le repository
2. Installez les dépendances : `npm install`
3. Lancez le serveur de développement : `npm run dev`
4. Ouvrez http://localhost:5173

Le chatbot sera affiché en mode démo pour les tests. 