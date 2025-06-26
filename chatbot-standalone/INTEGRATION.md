# Guide d'intégration du Chatbot Standalone

## 📦 Ce que vous avez

Vous disposez maintenant d'une version standalone du chatbot qui peut être intégrée sur n'importe quel site web via un simple script.

### Structure des fichiers

```
chatbot-standalone/
├── dist/                    # Fichiers buildés (à déployer)
│   ├── chatbot.js          # Composant React (ES module)
│   └── chatbot.umd.cjs     # Composant React (UMD)
├── integration-script.js    # Script d'intégration simple
├── integration-script-final.js # Script d'intégration complet
├── example.html            # Exemple d'utilisation
└── README.md               # Documentation générale
```

## 🚀 Intégration rapide

### Option 1: Script simple (recommandé pour débuter)

```html
<!DOCTYPE html>
<html>
<head>
    <title>Mon Site</title>
</head>
<body>
    <!-- Votre contenu -->
    
    <!-- Chatbot Widget -->
    <script src="integration-script.js"></script>
    <script>
        ChatbotWidget.init({
            clientId: 'votre-client-id',
            isDemo: true // Mettre à false pour le mode réel
        });
    </script>
</body>
</html>
```

### Option 2: Script complet avec React

```html
<!DOCTYPE html>
<html>
<head>
    <title>Mon Site</title>
</head>
<body>
    <!-- Votre contenu -->
    
    <!-- Chatbot Widget avec React -->
    <script src="integration-script-final.js"></script>
    <script>
        ChatbotWidget.init({
            clientId: 'votre-client-id',
            isDemo: false,
            position: 'bottom-right' // bottom-right, bottom-left, top-right, top-left
        });
    </script>
</body>
</html>
```

### Option 3: Configuration automatique

```html
<script>
    window.CHATBOT_CONFIG = {
        clientId: 'votre-client-id',
        isDemo: false,
        position: 'bottom-right'
    };
</script>
<script src="integration-script-final.js"></script>
```

## ⚙️ Configuration

### Paramètres disponibles

| Paramètre | Type | Requis | Défaut | Description |
|-----------|------|--------|--------|-------------|
| `clientId` | string | ✅ | - | ID du client configuré dans Supabase |
| `isDemo` | boolean | ❌ | false | Active le mode démo avec réponses simulées |
| `position` | string | ❌ | 'bottom-right' | Position du widget |
| `theme` | string | ❌ | 'light' | Thème (light/dark) |

### Positions disponibles

- `bottom-right` (par défaut)
- `bottom-left`
- `top-right`
- `top-left`

## 🔧 API JavaScript

### Initialiser le chatbot

```javascript
ChatbotWidget.init({
    clientId: 'votre-client-id',
    isDemo: false,
    position: 'bottom-right'
});
```

### Détruire le chatbot

```javascript
ChatbotWidget.destroy();
```

### Vérifier si le chatbot est chargé

```javascript
if (window.ChatbotWidget) {
    console.log('Chatbot disponible');
}
```

## 📋 Prérequis

### 1. Configuration Supabase

Le chatbot nécessite un `clientId` qui correspond à un client configuré dans votre base de données Supabase avec :

- `client_id` : L'identifiant unique
- `logo_url` : URL du logo (optionnel)
- `color_primary` : Couleur principale
- `webhook_url` : URL du webhook pour les réponses
- `bot_description` : Description du bot
- `banner_color` : Couleur de la bannière (optionnel)
- `chat_background_color` : Couleur de fond du chat (optionnel)
- `text_color` : Couleur du texte (optionnel)

### 2. Webhook

Votre webhook doit accepter des requêtes POST avec le format :

```json
{
    "message": "Message de l'utilisateur"
}
```

Et retourner une réponse dans l'un de ces formats :

```json
// Format 1: Objet simple
{
    "response": "Réponse du bot"
}

// Format 2: Avec clé différente
{
    "texte": "Réponse du bot"
}

// Format 3: Tableau
[
    {
        "texte": "Réponse du bot"
    }
]

// Format 4: String directe
"Réponse du bot"
```

## 🎨 Personnalisation

### Couleurs

Les couleurs sont automatiquement appliquées selon la configuration du client dans Supabase :

- `color_primary` : Couleur principale du bouton
- `banner_color` : Couleur de la bannière du chat
- `chat_background_color` : Couleur de fond de la zone de chat
- `text_color` : Couleur du texte dans le chat

### CSS personnalisé

Vous pouvez ajouter des styles CSS personnalisés :

```css
#chatbot-widget-container {
    /* Vos styles personnalisés */
    filter: drop-shadow(0 10px 20px rgba(0,0,0,0.2));
}
```

## 🚀 Déploiement

### 1. Fichiers à déployer

Pour une intégration complète, déployez ces fichiers :

- `integration-script-final.js` (ou `integration-script.js`)
- `dist/chatbot.js`
- `dist/chatbot.umd.cjs` (optionnel)

### 2. CDN

Vous pouvez héberger les fichiers sur un CDN et les référencer :

```html
<script src="https://votre-cdn.com/integration-script-final.js"></script>
```

### 3. Intégration dans un framework

#### React
```jsx
import { useEffect } from 'react';

function App() {
    useEffect(() => {
        // Charger le script
        const script = document.createElement('script');
        script.src = '/integration-script-final.js';
        script.onload = () => {
            window.ChatbotWidget.init({
                clientId: 'votre-client-id'
            });
        };
        document.head.appendChild(script);
    }, []);

    return <div>Votre app</div>;
}
```

#### Vue.js
```javascript
mounted() {
    const script = document.createElement('script');
    script.src = '/integration-script-final.js';
    script.onload = () => {
        window.ChatbotWidget.init({
            clientId: 'votre-client-id'
        });
    };
    document.head.appendChild(script);
}
```

## 🐛 Dépannage

### Problèmes courants

1. **"Client ID manquant"**
   - Vérifiez que vous avez bien passé un `clientId`
   - Vérifiez que le client existe dans Supabase

2. **"Configuration introuvable"**
   - Vérifiez que le `clientId` correspond à un client dans votre base
   - Vérifiez la fonction RPC `get_client_config_public`

3. **"Erreur de connexion"**
   - Vérifiez que votre webhook est accessible
   - Vérifiez les CORS si nécessaire

4. **Le chatbot ne s'affiche pas**
   - Vérifiez la console pour les erreurs
   - Vérifiez que le script est bien chargé
   - Vérifiez que le conteneur est créé

### Mode debug

Activez les logs détaillés :

```javascript
// Avant d'initialiser le chatbot
localStorage.setItem('chatbot-debug', 'true');

ChatbotWidget.init({
    clientId: 'votre-client-id'
});
```

## 📞 Support

Pour toute question ou problème :

1. Vérifiez la console du navigateur pour les erreurs
2. Testez en mode démo d'abord
3. Vérifiez la configuration Supabase
4. Vérifiez que votre webhook fonctionne

## 🔄 Mise à jour

Pour mettre à jour le chatbot :

1. Rebuild le projet : `npm run build`
2. Remplacez les fichiers dans `dist/`
3. Mettez à jour le script d'intégration si nécessaire

---

**Note** : Ce chatbot est conçu pour être léger et facile à intégrer. Il utilise React 18 et est compatible avec tous les navigateurs modernes. 