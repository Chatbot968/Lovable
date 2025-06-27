# 🚀 Guide d'intégration - Chatbot Widget

Ce guide vous explique comment intégrer le widget chatbot sur votre site web en quelques étapes simples.

## 📋 Prérequis

- Un site web (HTML, CSS, JavaScript)
- Une configuration de chatbot créée dans le dashboard
- Un webhook URL pour traiter les messages

## 🔧 Intégration rapide

### 1. Code d'intégration de base

Ajoutez cette ligne dans la section `<head>` ou juste avant la fermeture de `</body>` de votre HTML :

```html
<script src="https://votre-domaine.com/chatbot.js" data-client-id="VOTRE_CLIENT_ID"></script>
```

### 2. Exemple complet

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mon Site Web</title>
</head>
<body>
    <h1>Bienvenue sur mon site</h1>
    <p>Le widget chatbot apparaîtra en bas à droite de la page.</p>
    
    <!-- Intégration du widget chatbot -->
    <script src="https://votre-domaine.com/chatbot.js" data-client-id="CLIENT123"></script>
</body>
</html>
```

## ⚙️ Options de configuration

Vous pouvez personnaliser le comportement du widget avec des attributs `data-*` :

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

### Options disponibles

| Attribut | Valeur par défaut | Description |
|----------|-------------------|-------------|
| `data-client-id` | **Requis** | Identifiant unique de votre configuration |
| `data-position` | `bottom-right` | Position du widget (`bottom-right`, `bottom-left`) |
| `data-theme` | `light` | Thème visuel (`light`, `dark`) |
| `data-language` | `fr` | Langue (`fr`, `en`) |
| `data-auto-open` | `false` | Ouverture automatique (`true`, `false`) |
| `data-greeting` | `Bonjour ! Comment puis-je vous aider ?` | Message de bienvenue |
| `data-voice-enabled` | `false` | Activation de la synthèse vocale (`true`, `false`) |

## 🎨 Personnalisation avancée

### Configuration via le dashboard

1. Connectez-vous au dashboard
2. Créez ou modifiez une configuration
3. Personnalisez :
   - **Logo** : URL de votre logo
   - **Couleurs** : Couleur principale, bannière, fond du chat
   - **Description** : Nom de votre assistant
   - **Webhook** : URL de traitement des messages

### Exemple de configuration

```json
{
  "client_id": "CLIENT123",
  "logo_url": "https://example.com/logo.png",
  "color_primary": "#4299e1",
  "webhook_url": "https://your-webhook.com/chat",
  "bot_description": "Assistant virtuel personnalisé",
  "banner_color": "#2d3748",
  "chat_background_color": "#f7fafc",
  "text_color": "#2d3748"
}
```

## 🔌 Utilisation programmatique

Vous pouvez aussi initialiser le widget manuellement :

```javascript
// Attendre que le script soit chargé
document.addEventListener('DOMContentLoaded', function() {
  // Créer une instance manuellement
  const widget = new ChatbotWidget('CLIENT123', {
    position: 'bottom-right',
    theme: 'light',
    language: 'fr',
    autoOpen: true,
    greeting: 'Bonjour !',
    voiceEnabled: true
  });

  // Contrôler le widget
  widget.toggle(); // Ouvrir/fermer
  widget.sendMessage('Hello'); // Envoyer un message
});
```

## 🌐 Format du webhook

Votre webhook doit accepter des requêtes POST avec ce format :

### Requête entrante

```json
{
  "message": "Message de l'utilisateur",
  "clientId": "CLIENT123",
  "timestamp": "2024-01-01T12:00:00.000Z"
}
```

### Réponse attendue

Le widget accepte plusieurs formats de réponse :

#### Format objet simple
```json
{
  "response": "Réponse du bot"
}
```

#### Format tableau
```json
[
  {
    "texte": "Réponse du bot"
  }
]
```

#### Format texte direct
```json
"Réponse du bot"
```

## 📱 Responsive design

Le widget s'adapte automatiquement aux différentes tailles d'écran :

- **Desktop** : Widget fixe en bas à droite
- **Tablet** : Widget redimensionné
- **Mobile** : Widget plein écran

## 🔒 Sécurité et isolation

- **CSS isolé** : Aucun conflit avec votre CSS
- **JavaScript isolé** : Pas d'interférence avec votre code
- **CORS** : Support des requêtes cross-origin
- **HTTPS** : Fonctionne uniquement en HTTPS en production

## 🧪 Test et débogage

### Page de test

Utilisez la page de test pour vérifier l'intégration :

```
https://votre-domaine.com/test
```

### Console de débogage

Le widget affiche des logs dans la console :

```javascript
// Activer les logs détaillés
localStorage.setItem('chatbot-debug', 'true');
```

### Erreurs courantes

| Erreur | Solution |
|--------|----------|
| `Configuration introuvable` | Vérifiez le clientId |
| `Erreur de connexion` | Vérifiez l'URL du webhook |
| `Widget non chargé` | Vérifiez l'URL du script |

## 📊 Analytics et monitoring

### Événements disponibles

```javascript
// Écouter les événements du widget
document.addEventListener('chatbot:message', function(event) {
  console.log('Message envoyé:', event.detail);
});

document.addEventListener('chatbot:response', function(event) {
  console.log('Réponse reçue:', event.detail);
});

document.addEventListener('chatbot:open', function(event) {
  console.log('Widget ouvert');
});

document.addEventListener('chatbot:close', function(event) {
  console.log('Widget fermé');
});
```

## 🚀 Déploiement en production

### 1. Configuration HTTPS

Le widget nécessite HTTPS en production pour la reconnaissance vocale.

### 2. CDN recommandé

Hébergez le widget sur un CDN pour de meilleures performances :

```
https://cdn.votre-domaine.com/chatbot.js
```

### 3. Cache et versioning

Utilisez le versioning pour les mises à jour :

```
https://cdn.votre-domaine.com/chatbot.js?v=1.0.0
```

## 📞 Support

Pour toute question ou problème :

- 📧 **Email** : support@monchatbot.com
- 📖 **Documentation** : https://docs.monchatbot.com
- 🐛 **Issues** : GitHub Issues
- 💬 **Chat** : Utilisez le widget sur notre site !

## 🔄 Mises à jour

Le widget se met à jour automatiquement. Pour forcer une mise à jour :

```javascript
// Recharger le widget
if (window.chatbotWidget) {
  window.chatbotWidget.destroy();
}
// Puis recharger la page ou réinitialiser
```

---

**🎉 Félicitations !** Votre widget chatbot est maintenant intégré et prêt à aider vos utilisateurs ! 