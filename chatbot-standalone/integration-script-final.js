/**
 * Script d'intégration final du Chatbot Widget
 * Utilise le composant React buildé
 */

(function() {
    'use strict';
    
    // Configuration par défaut
    const defaultConfig = {
        clientId: null,
        isDemo: false,
        position: 'bottom-right'
    };
    
    // Variables globales
    let chatbotInstance = null;
    let isLoaded = false;
    let React = null;
    let ReactDOM = null;
    let ChatbotComponent = null;
    
    /**
     * Initialise le chatbot
     * @param {Object} config - Configuration du chatbot
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
                // Fallback vers le widget simple
                renderFallbackWidget(finalConfig);
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
            const promises = [];
            
            // Charger React si pas déjà présent
            if (!window.React) {
                promises.push(loadScript('https://unpkg.com/react@18/umd/react.production.min.js'));
            }
            
            // Charger ReactDOM si pas déjà présent
            if (!window.ReactDOM) {
                promises.push(loadScript('https://unpkg.com/react-dom@18/umd/react-dom.production.min.js'));
            }
            
            // Charger le composant chatbot
            promises.push(loadScript('./dist/chatbot.js'));
            
            Promise.all(promises)
                .then(() => {
                    React = window.React;
                    ReactDOM = window.ReactDOM;
                    ChatbotComponent = window.ChatbotWidget;
                    resolve();
                })
                .catch(reject);
        });
    }
    
    /**
     * Charge un script dynamiquement
     */
    function loadScript(src) {
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = src;
            script.onload = resolve;
            script.onerror = reject;
            document.head.appendChild(script);
        });
    }
    
    /**
     * Rend le composant React chatbot
     */
    function renderChatbot(config) {
        const container = document.getElementById('chatbot-widget-container');
        if (!container || !React || !ReactDOM || !ChatbotComponent) {
            console.error('❌ Impossible de rendre le chatbot React');
            renderFallbackWidget(config);
            return;
        }
        
        try {
            // Créer l'élément React
            const element = React.createElement(ChatbotComponent, {
                clientId: config.clientId,
                isDemo: config.isDemo
            });
            
            // Rendre le composant
            const root = ReactDOM.createRoot(container);
            root.render(element);
            
            console.log('✅ Chatbot React rendu avec succès');
        } catch (error) {
            console.error('❌ Erreur lors du rendu React:', error);
            renderFallbackWidget(config);
        }
    }
    
    /**
     * Widget de fallback simple
     */
    function renderFallbackWidget(config) {
        const container = document.getElementById('chatbot-widget-container');
        if (!container) return;
        
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
                max-width: 200px;
            " onclick="window.openChatbot && window.openChatbot()">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                </svg>
                Besoin d'aide ?
            </div>
        `;
        
        // Ajouter la fonction pour ouvrir le chatbot
        window.openChatbot = function() {
            alert(`Chatbot Widget\nClient ID: ${config.clientId}\nMode Demo: ${config.isDemo}\n\nLe composant React n'a pas pu être chargé.`);
        };
        
        console.log('✅ Widget de fallback rendu');
    }
    
    /**
     * Détruit le chatbot
     */
    function destroyChatbot() {
        const container = document.getElementById('chatbot-widget-container');
        if (container) {
            // Si c'est un composant React, on doit le démonter proprement
            if (ReactDOM && container._reactRootContainer) {
                try {
                    ReactDOM.unmountComponentAtNode(container);
                } catch (e) {
                    console.warn('Erreur lors du démontage React:', e);
                }
            }
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
    
    console.log('📦 Script d\'intégration chatbot final chargé');
    
})(); 