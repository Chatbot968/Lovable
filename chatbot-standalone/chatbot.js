(function() {
  'use strict';

  // Configuration par défaut
  const DEFAULT_CONFIG = {
    position: 'bottom-right',
    theme: 'light',
    language: 'fr',
    autoOpen: false,
    greeting: 'Bonjour ! Comment puis-je vous aider ?'
  };

  // Classe principale du widget
  class ChatbotWidget {
    constructor(clientId, options = {}) {
      this.clientId = clientId;
      this.config = { ...DEFAULT_CONFIG, ...options };
      this.isOpen = false;
      this.isListening = false;
      this.chatHistory = [];
      this.clientConfig = null;
      this.recognition = null;
      this.audioContext = null;
      this.speechSynthesis = window.speechSynthesis;
      
      this.init();
    }

    async init() {
      try {
        await this.loadClientConfig();
        this.createWidget();
        this.setupEventListeners();
        this.injectStyles();
        
        if (this.config.autoOpen) {
          setTimeout(() => this.toggle(), 1000);
        }
      } catch (error) {
        console.error('Erreur d\'initialisation du chatbot:', error);
      }
    }

    async loadClientConfig() {
      try {
        const response = await fetch(`https://backend-ohha.onrender.com/configs/${this.clientId}.json`);
        if (!response.ok) {
          throw new Error(`Configuration introuvable pour le client: ${this.clientId}`);
        }
        this.clientConfig = await response.json();
        console.log('✅ Configuration chargée:', this.clientConfig);
        // Vérification du webhook_url
        if (!this.clientConfig.webhook_url || !this.clientConfig.webhook_url.startsWith('https://backend-ohha.onrender.com/api/ask')) {
          console.warn('⚠️ Le webhook_url de la config ne pointe pas vers https://backend-ohha.onrender.com/api/ask');
        }
      } catch (error) {
        console.error('❌ Erreur chargement config:', error);
        throw error;
      }
    }

    createWidget() {
      // Créer le conteneur principal
      this.container = document.createElement('div');
      this.container.id = 'chatbot-widget-container';
      this.container.innerHTML = `
        <div id="chatbot-widget" class="chatbot-widget">
          <div class="chatbot-header">
            <div class="chatbot-logo">
              <img src="${this.clientConfig?.logo_url || 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDJDNi40OCAyIDIgNi40OCAyIDEyQzIgMTcuNTIgNi40OCAyMiAxMiAyMkMxNy41MiAyMiAyMiAxNy41MiAyMiAxMkMyMiA2LjQ4IDE3LjUyIDIgMTIgMloiIGZpbGw9IiM2QjcyODAiLz4KPHBhdGggZD0iTTggMTJIMTZNNyAxNkgxN00xMCA4SDE0IiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8L3N2Zz4K'}" alt="Logo" />
            </div>
            <div class="chatbot-title">
              <h3>${this.clientConfig?.bot_description || 'Assistant virtuel'}</h3>
            </div>
            <div class="chatbot-controls">
              <button class="chatbot-btn chatbot-btn-voice" id="voice-btn" title="Reconnaissance vocale">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/>
                  <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
                  <line x1="12" y1="19" x2="12" y2="23"/>
                  <line x1="8" y1="23" x2="16" y2="23"/>
                </svg>
              </button>
              <button class="chatbot-btn chatbot-btn-close" id="close-btn" title="Fermer">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            </div>
          </div>
          
          <div class="chatbot-messages" id="chat-messages">
            <div class="chatbot-message chatbot-message-bot">
              <div class="message-content">
                ${this.config.greeting}
              </div>
              <div class="message-time">${new Date().toLocaleTimeString()}</div>
            </div>
          </div>
          
          <div class="chatbot-input">
            <input type="text" id="message-input" placeholder="Tapez votre message..." />
            <button class="chatbot-btn chatbot-btn-send" id="send-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="22" y1="2" x2="11" y2="13"/>
                <polygon points="22,2 15,22 11,13 2,9"/>
              </svg>
            </button>
          </div>
        </div>
        
        <button class="chatbot-toggle" id="chatbot-toggle">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          </svg>
        </button>
      `;

      document.body.appendChild(this.container);
    }

    setupEventListeners() {
      // Bouton toggle
      const toggleBtn = document.getElementById('chatbot-toggle');
      toggleBtn.addEventListener('click', () => this.toggle());

      // Bouton fermer
      const closeBtn = document.getElementById('close-btn');
      closeBtn.addEventListener('click', () => this.toggle());

      // Bouton envoi
      const sendBtn = document.getElementById('send-btn');
      const messageInput = document.getElementById('message-input');
      
      sendBtn.addEventListener('click', () => this.sendMessage());
      messageInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
          this.sendMessage();
        }
      });

      // Bouton reconnaissance vocale
      const voiceBtn = document.getElementById('voice-btn');
      voiceBtn.addEventListener('click', () => this.toggleVoiceRecognition());

      // Initialiser la reconnaissance vocale
      this.initializeSpeechRecognition();
    }

    initializeSpeechRecognition() {
      if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
        console.warn('Reconnaissance vocale non supportée');
        return;
      }

      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      this.recognition = new SpeechRecognition();
      
      this.recognition.continuous = false;
      this.recognition.interimResults = false;
      this.recognition.lang = this.config.language === 'fr' ? 'fr-FR' : 'en-US';

      this.recognition.onstart = () => {
        this.isListening = true;
        this.updateVoiceButton();
      };

      this.recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        document.getElementById('message-input').value = transcript;
        this.sendMessage(transcript);
      };

      this.recognition.onerror = (event) => {
        console.error('Erreur reconnaissance vocale:', event.error);
        this.isListening = false;
        this.updateVoiceButton();
      };

      this.recognition.onend = () => {
        this.isListening = false;
        this.updateVoiceButton();
      };
    }

    updateVoiceButton() {
      const voiceBtn = document.getElementById('voice-btn');
      if (this.isListening) {
        voiceBtn.classList.add('listening');
        voiceBtn.innerHTML = `
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="6" y="4" width="12" height="20" rx="2" ry="2"/>
            <line x1="12" y1="18" x2="12.01" y2="18"/>
            <line x1="9" y1="11" x2="15" y2="11"/>
          </svg>
        `;
      } else {
        voiceBtn.classList.remove('listening');
        voiceBtn.innerHTML = `
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/>
            <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
            <line x1="12" y1="19" x2="12" y2="23"/>
            <line x1="8" y1="23" x2="16" y2="23"/>
          </svg>
        `;
      }
    }

    toggleVoiceRecognition() {
      if (!this.recognition) {
        console.warn('Reconnaissance vocale non disponible');
        return;
      }

      if (this.isListening) {
        this.recognition.stop();
      } else {
        this.recognition.start();
      }
    }

    async sendMessage(messageText = null) {
      const messageInput = document.getElementById('message-input');
      const text = messageText || messageInput.value.trim();
      
      if (!text) return;

      // Ajouter le message utilisateur
      this.addMessage(text, true);
      messageInput.value = '';

      try {
        // Envoyer au webhook
        const response = await fetch(this.clientConfig.webhook_url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ 
            message: text,
            clientId: this.clientId,
            timestamp: new Date().toISOString()
          }),
        });

        if (!response.ok) {
          throw new Error(`Erreur ${response.status}: ${response.statusText}`);
        }

        const responseData = await response.json();
        
        // Extraire la réponse
        let botResponse = '';
        if (Array.isArray(responseData)) {
          botResponse = responseData[0]?.texte || responseData[0]?.text || responseData[0]?.response || 'Réponse vide';
        } else if (typeof responseData === 'object') {
          botResponse = responseData.response || responseData.texte || responseData.text || responseData.message || 'Réponse vide';
        } else if (typeof responseData === 'string') {
          botResponse = responseData;
        } else {
          botResponse = 'Format de réponse non reconnu';
        }

        // Ajouter la réponse du bot
        this.addMessage(botResponse, false);

        // Synthèse vocale si activée
        if (this.config.voiceEnabled && this.speechSynthesis) {
          this.speak(botResponse);
        }

      } catch (error) {
        console.error('Erreur envoi message:', error);
        this.addMessage('⚠️ Erreur de connexion. Veuillez réessayer.', false);
      }
    }

    addMessage(text, isUser) {
      const messagesContainer = document.getElementById('chat-messages');
      const messageDiv = document.createElement('div');
      messageDiv.className = `chatbot-message ${isUser ? 'chatbot-message-user' : 'chatbot-message-bot'}`;
      
      messageDiv.innerHTML = `
        <div class="message-content">${text}</div>
        <div class="message-time">${new Date().toLocaleTimeString()}</div>
      `;
      
      messagesContainer.appendChild(messageDiv);
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
      
      this.chatHistory.push({ text, isUser, timestamp: new Date().toISOString() });
    }

    speak(text) {
      if (this.speechSynthesis && this.speechSynthesis.speaking) {
        this.speechSynthesis.cancel();
      }

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = this.config.language === 'fr' ? 'fr-FR' : 'en-US';
      utterance.rate = 0.9;
      utterance.pitch = 1;
      this.speechSynthesis.speak(utterance);
    }

    toggle() {
      const widget = document.getElementById('chatbot-widget');
      this.isOpen = !this.isOpen;
      
      if (this.isOpen) {
        widget.classList.add('open');
        document.getElementById('message-input').focus();
      } else {
        widget.classList.remove('open');
      }
    }

    injectStyles() {
      const styles = `
        #chatbot-widget-container {
          position: fixed;
          z-index: 999999;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        /* PATCH DEBUG: Forcer l'affichage du bouton toggle */
        #chatbot-widget-container .chatbot-toggle {
          opacity: 1 !important;
          display: block !important;
          z-index: 2147483647 !important;
          background: #e11d48 !important; /* rose flashy pour debug */
        }

        .chatbot-widget {
          position: fixed;
          bottom: 20px;
          right: 20px;
          width: 350px;
          height: 500px;
          background: white;
          border-radius: 12px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          transform: translateY(100px) scale(0.8);
          opacity: 0;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid #e5e7eb;
        }

        .chatbot-widget.open {
          transform: translateY(0) scale(1);
          opacity: 1;
        }

        .chatbot-toggle {
          position: fixed;
          bottom: 20px;
          right: 20px;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: ${this.clientConfig?.color_primary || '#6B7280'};
          border: none;
          color: white;
          cursor: pointer;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
          transition: all 0.3s ease;
          z-index: 999998;
        }

        .chatbot-toggle:hover {
          transform: scale(1.1);
          box-shadow: 0 6px 25px rgba(0, 0, 0, 0.2);
        }

        .chatbot-widget.open + .chatbot-toggle {
          opacity: 0;
          pointer-events: none;
        }

        .chatbot-header {
          display: flex;
          align-items: center;
          padding: 16px;
          background: ${this.clientConfig?.color_primary || '#6B7280'};
          color: white;
          border-bottom: 1px solid #e5e7eb;
        }

        .chatbot-logo {
          width: 32px;
          height: 32px;
          margin-right: 12px;
        }

        .chatbot-logo img {
          width: 100%;
          height: 100%;
          border-radius: 6px;
          object-fit: cover;
        }

        .chatbot-title h3 {
          margin: 0;
          font-size: 14px;
          font-weight: 600;
          flex: 1;
        }

        .chatbot-controls {
          display: flex;
          gap: 8px;
        }

        .chatbot-btn {
          background: none;
          border: none;
          color: white;
          cursor: pointer;
          padding: 6px;
          border-radius: 6px;
          transition: background-color 0.2s;
        }

        .chatbot-btn:hover {
          background: rgba(255, 255, 255, 0.1);
        }

        .chatbot-btn.listening {
          background: rgba(255, 255, 255, 0.2);
          animation: pulse 1.5s infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }

        .chatbot-messages {
          flex: 1;
          padding: 16px;
          overflow-y: auto;
          background: ${this.clientConfig?.chat_background_color || '#f9fafb'};
        }

        .chatbot-message {
          margin-bottom: 12px;
          max-width: 80%;
        }

        .chatbot-message-user {
          margin-left: auto;
        }

        .chatbot-message-bot {
          margin-right: auto;
        }

        .message-content {
          padding: 12px 16px;
          border-radius: 18px;
          font-size: 14px;
          line-height: 1.4;
          word-wrap: break-word;
        }

        .chatbot-message-user .message-content {
          background: ${this.clientConfig?.color_primary || '#6B7280'};
          color: white;
          border-bottom-right-radius: 4px;
        }

        .chatbot-message-bot .message-content {
          background: white;
          color: #374151;
          border: 1px solid #e5e7eb;
          border-bottom-left-radius: 4px;
        }

        .message-time {
          font-size: 11px;
          color: #9ca3af;
          margin-top: 4px;
          text-align: right;
        }

        .chatbot-message-user .message-time {
          text-align: right;
        }

        .chatbot-message-bot .message-time {
          text-align: left;
        }

        .chatbot-input {
          display: flex;
          padding: 16px;
          gap: 8px;
          border-top: 1px solid #e5e7eb;
          background: white;
        }

        .chatbot-input input {
          flex: 1;
          padding: 12px 16px;
          border: 1px solid #d1d5db;
          border-radius: 24px;
          font-size: 14px;
          outline: none;
          transition: border-color 0.2s;
        }

        .chatbot-input input:focus {
          border-color: ${this.clientConfig?.color_primary || '#6B7280'};
        }

        .chatbot-btn-send {
          background: ${this.clientConfig?.color_primary || '#6B7280'};
          color: white;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background-color 0.2s;
        }

        .chatbot-btn-send:hover {
          background: ${this.clientConfig?.color_primary || '#6B7280'}dd;
        }

        @media (max-width: 480px) {
          .chatbot-widget {
            width: calc(100vw - 40px);
            height: calc(100vh - 120px);
            bottom: 10px;
            right: 20px;
            left: 20px;
          }
        }
      `;

      const styleSheet = document.createElement('style');
      styleSheet.textContent = styles;
      document.head.appendChild(styleSheet);
    }
  }

  /**
   * Fonction pour récupérer le tag script de manière sécurisée
   * @returns {HTMLScriptElement|null} Le tag script ou null si non trouvé
   */
  function getScriptTag() {
    // Essayer d'abord document.currentScript (plus fiable)
    if (document.currentScript) {
      return document.currentScript;
    }
    
    // Fallback : chercher le script avec data-client-id
    const scripts = document.querySelectorAll('script[data-client-id]');
    if (scripts.length > 0) {
      return scripts[scripts.length - 1]; // Prendre le dernier script trouvé
    }
    
    // Fallback : chercher le script qui contient chatbot.js
    const allScripts = document.querySelectorAll('script[src*="chatbot.js"]');
    if (allScripts.length > 0) {
      return allScripts[allScripts.length - 1];
    }
    
    return null;
  }

  /**
   * Fonction pour extraire les options depuis les attributs data-*
   * @param {HTMLScriptElement} script - Le tag script
   * @returns {Object} Les options extraites
   */
  function extractOptions(script) {
    return {
      position: script.getAttribute('data-position') || 'bottom-right',
      theme: script.getAttribute('data-theme') || 'light',
      language: script.getAttribute('data-language') || 'fr',
      autoOpen: script.getAttribute('data-auto-open') === 'true',
      greeting: script.getAttribute('data-greeting') || 'Bonjour ! Comment puis-je vous aider ?',
      voiceEnabled: script.getAttribute('data-voice-enabled') === 'true'
    };
  }

  /**
   * Fonction d'initialisation principale
   * @param {string} clientId - L'ID du client
   * @param {Object} options - Les options de configuration
   */
  function initChatbot(clientId, options = {}) {
    try {
      console.log('🤖 Initialisation du chatbot pour le client:', clientId);
      window.chatbotWidget = new ChatbotWidget(clientId, options);
    } catch (error) {
      console.error('❌ Erreur lors de l\'initialisation du chatbot:', error);
    }
  }

  /**
   * Fonction d'initialisation depuis le tag script
   * Récupère automatiquement les attributs et initialise le widget
   */
  function initFromScriptTag() {
    try {
      // Récupérer le tag script de manière sécurisée
      const script = getScriptTag();
      
      if (!script) {
        console.warn('⚠️ Tag script introuvable. Le chatbot ne peut pas être initialisé.');
        return;
      }

      // Récupérer le client ID (attribut requis)
      const clientId = script.getAttribute('data-client-id');
      
      if (!clientId) {
        console.error('❌ Client ID manquant. Ajoutez data-client-id="VOTRE_CLIENT_ID" au script.');
        return;
      }

      // Extraire les options depuis les attributs data-*
      const options = extractOptions(script);

      // Initialiser le chatbot
      initChatbot(clientId, options);
      
    } catch (error) {
      console.error('❌ Erreur lors de l\'initialisation depuis le tag script:', error);
    }
  }

  // Initialisation sécurisée
  if (document.readyState === 'loading') {
    // Le DOM n'est pas encore prêt, attendre
    document.addEventListener('DOMContentLoaded', initFromScriptTag);
  } else {
    // Le DOM est déjà prêt, initialiser immédiatement
    initFromScriptTag();
  }

  // Exposer les fonctions pour utilisation manuelle
  window.ChatbotWidget = ChatbotWidget;
  window.initChatbot = initChatbot;
})(); 