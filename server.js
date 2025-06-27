const express = require('express');
const cors = require('cors');
const path = require('path');
const { createClient } = require('@supabase/supabase-js');

const app = express();
const PORT = process.env.PORT || 3000;

// Configuration Supabase
const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Route pour servir les configurations JSON
app.get('/configs/:clientId.json', async (req, res) => {
  try {
    const { clientId } = req.params;
    
    console.log(`📥 Demande de configuration pour: ${clientId}`);
    
    // Si c'est un client de démo, retourner une config de test
    if (clientId === 'DEMO123') {
      const demoConfig = {
        client_id: 'DEMO123',
        logo_url: 'https://via.placeholder.com/32x32/4299e1/ffffff?text=🤖',
        color_primary: '#4299e1',
        webhook_url: 'https://httpbin.org/post', // URL de test
        bot_description: 'Assistant virtuel de démonstration',
        banner_color: '#2d3748',
        chat_background_color: '#f7fafc',
        text_color: '#2d3748'
      };
      
      console.log(`✅ Configuration démo retournée pour: ${clientId}`);
      return res.json(demoConfig);
    }
    
    const { data, error } = await supabase
      .from('client_configs')
      .select('*')
      .eq('client_id', clientId)
      .eq('is_active', true)
      .single();

    if (error || !data) {
      console.log(`❌ Configuration non trouvée pour: ${clientId}`);
      return res.status(404).json({
        error: 'Configuration introuvable',
        clientId: clientId
      });
    }

    console.log(`✅ Configuration trouvée pour: ${clientId}`);
    
    // Retourner la configuration au format attendu par le widget
    const config = {
      client_id: data.client_id,
      logo_url: data.logo_url,
      color_primary: data.color_primary,
      webhook_url: data.webhook_url,
      bot_description: data.bot_description,
      banner_color: data.banner_color,
      chat_background_color: data.chat_background_color,
      text_color: data.text_color
    };

    res.json(config);
  } catch (error) {
    console.error('❌ Erreur serveur:', error);
    res.status(500).json({
      error: 'Erreur serveur',
      message: error.message
    });
  }
});

// Route pour servir le widget chatbot.js
app.get('/chatbot.js', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'chatbot.js'));
});

// Route pour servir l'exemple
app.get('/example', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'example.html'));
});

// Route pour servir la page de test
app.get('/test', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'test.html'));
});

// Route de santé
app.get('/health', (req, res) => {
  res.json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    service: 'Chatbot Widget API',
    version: '1.0.0'
  });
});

// Route racine
app.get('/', (req, res) => {
  res.json({
    message: 'Chatbot Widget API',
    version: '1.0.0',
    endpoints: {
      config: '/configs/:clientId.json',
      widget: '/chatbot.js',
      example: '/example',
      test: '/test',
      health: '/health'
    },
    demo: {
      clientId: 'DEMO123',
      testUrl: '/test',
      exampleUrl: '/example'
    }
  });
});

// Gestion des erreurs 404
app.use('*', (req, res) => {
  res.status(404).json({
    error: 'Route non trouvée',
    path: req.originalUrl
  });
});

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`🚀 Serveur démarré sur le port ${PORT}`);
  console.log(`📊 Dashboard: http://localhost:${PORT}`);
  console.log(`🤖 Widget: http://localhost:${PORT}/chatbot.js`);
  console.log(`📋 Exemple: http://localhost:${PORT}/example`);
  console.log(`🧪 Test: http://localhost:${PORT}/test`);
  console.log(`⚙️ Configs: http://localhost:${PORT}/configs/:clientId.json`);
  console.log(`💚 Santé: http://localhost:${PORT}/health`);
});

module.exports = app; 