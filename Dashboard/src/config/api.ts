// Configuration centralisée pour l'API backend
export const API_CONFIG = {
  // URL de ton backend sur Render - change cette URL selon ton déploiement
  BACKEND_URL: "https://backend-dxeo.onrender.com",
  
  // Endpoints
  ENDPOINTS: {
    CONFIGS: "/api/configs",
    CONFIG_BY_ID: (clientId: string) => `/configs/${clientId}.json`,
    ASK: "/api/ask"
  }
};

// Fonction utilitaire pour construire les URLs complètes
export const buildApiUrl = (endpoint: string) => `${API_CONFIG.BACKEND_URL}${endpoint}`; 