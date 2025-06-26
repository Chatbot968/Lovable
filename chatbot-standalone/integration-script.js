/**
 * Script d'intégration du Chatbot Widget
 * 
 * Utilisation:
 * 1. Incluez ce script dans votre page HTML
 * 2. Appelez initChatbot() avec votre clientId
 */

(function() {
    'use strict';
    
    // Configuration par défaut
    const defaultConfig = {
        clientId: null,
        isDemo: false,
        position: 'bottom-right', // 'bottom-right', 'bottom-left', 'top-right', 'top-left'
        theme: 'light' // 'light', 'dark'
    };
    
    // Variables globales
    let chatbotInstance = null;
    let isLoaded = false;
    
    /**
     * Initialise le chatbot
     * @param {Object} config - Configuration du chatbot
     * @param {string} config.clientId - ID du client (requis)
     * @param {boolean} config.isDemo - Mode démo (optionnel)
     * @param {string} config.position - Position du widget (optionnel)
     * @param {string} config.theme - Thème (optionnel)
     */
    function initChatbot(config = {}) {
        const finalConfig = { ...defaultConfig, ...config };
        
        if (!finalConfig.clientId) {
            console.error('❌ Chatbot: clientId est requis');
            return;
        }
        
        console.log('🚀 Initialisation du chatbot avec config:', finalConfig);
        
        // Créer le conteneur du chatbot
        createChatbotContainer(finalConfig);
        
        // Charger les dépendances si pas déjà fait
        if (!isLoaded) {
            loadDependencies().then(() => {
                isLoaded = true;
                renderChatbot(finalConfig);
            }).catch(error => {
                console.error('❌ Erreur lors du chargement des dépendances:', error);
            });
        } else {
            renderChatbot(finalConfig);
        }
    }
    
    /**
     * Crée le conteneur HTML pour le chatbot
     */
    function createChatbotContainer(config) {
        // Supprimer l'ancien conteneur s'il existe
        const existingContainer = document.getElementById('chatbot-widget-container');
        if (existingContainer) {
            existingContainer.remove();
        }
        
        // Créer le nouveau conteneur
        const container = document.createElement('div');
        container.id = 'chatbot-widget-container';
        container.style.cssText = `
            position: fixed;
            z-index: 9999;
            ${getPositionStyles(config.position)};
        `;
        
        document.body.appendChild(container);
    }
    
    /**
     * Retourne les styles CSS selon la position
     */
    function getPositionStyles(position) {
        const positions = {
            'bottom-right': 'bottom: 20px; right: 20px;',
            'bottom-left': 'bottom: 20px; left: 20px;',
            'top-right': 'top: 20px; right: 20px;',
            'top-left': 'top: 20px; left: 20px;'
        };
        
        return positions[position] || positions['bottom-right'];
    }
    
    /**
     * Charge les dépendances nécessaires
     */
    function loadDependencies() {
        return new Promise((resolve, reject) => {
            // Vérifier si React est déjà chargé
            if (window.React && window.ReactDOM) {
                resolve();
                return;
            }
            
            // Charger React depuis CDN
            const reactScript = document.createElement('script');
            reactScript.src = 'https://unpkg.com/react@18/umd/react.production.min.js';
            reactScript.onload = () => {
                const reactDOMScript = document.createElement('script');
                reactDOMScript.src = 'https://unpkg.com/react-dom@18/umd/react-dom.production.min.js';
                reactDOMScript.onload = resolve;
                reactDOMScript.onerror = reject;
                document.head.appendChild(reactDOMScript);
            };
            reactScript.onerror = reject;
            document.head.appendChild(reactScript);
        });
    }
    
    /**
     * Rend le composant chatbot
     */
    function renderChatbot(config) {
        const container = document.getElementById('chatbot-widget-container');
        if (!container) {
            console.error('❌ Conteneur chatbot non trouvé');
            return;
        }
        
        // Ici, vous devriez charger votre composant ChatbotWidget
        // Pour l'instant, on affiche un message de placeholder
        container.innerHTML = `
            <div style="
                background: #3B82F6;
                color: white;
                padding: 12px 16px;
                border-radius: 8px;
                cursor: pointer;
                box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
                font-size: 14px;
                display: flex;
                align-items: center;
                gap: 8px;
            " onclick="window.openChatbot && window.openChatbot()">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                </svg>
                Besoin d'aide ?
            </div>
        `;
        
        // Ajouter la fonction pour ouvrir le chatbot
        window.openChatbot = function() {
            alert('Chatbot en cours de développement!\nClient ID: ' + config.clientId + '\nMode Demo: ' + config.isDemo);
        };
        
        console.log('✅ Chatbot rendu avec succès');
    }
    
    /**
     * Détruit le chatbot
     */
    function destroyChatbot() {
        const container = document.getElementById('chatbot-widget-container');
        if (container) {
            container.remove();
        }
        chatbotInstance = null;
        console.log('🗑️ Chatbot détruit');
    }
    
    // Exposer les fonctions globalement
    window.ChatbotWidget = {
        init: initChatbot,
        destroy: destroyChatbot
    };
    
    // Auto-initialisation si configuré
    if (window.CHATBOT_CONFIG) {
        initChatbot(window.CHATBOT_CONFIG);
    }
    
    console.log('📦 Script d\'intégration chatbot chargé');
    
})(); 