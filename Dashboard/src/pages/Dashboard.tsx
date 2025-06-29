import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { API_CONFIG, buildApiUrl } from '../config/api';

interface ClientConfig {
  id: string;
  client_id: string;
  logo_url: string;
  color_primary: string;
  webhook_url: string;
  bot_description: string;
  banner_color?: string;
  chat_background_color?: string;
  text_color?: string;
  created_at: string;
  updated_at: string;
  is_active: boolean;
  message_count?: number;
  user_count?: number;
}

const Dashboard = () => {
  const navigate = useNavigate();
  const [configs, setConfigs] = useState<ClientConfig[]>([]);
  const [loading, setLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingConfig, setEditingConfig] = useState<ClientConfig | null>(null);
  const [stats, setStats] = useState({
    totalMessages: 0,
    totalUsers: 0,
    activeBots: 0,
    totalConfigs: 0
  });

  // Formulaire de configuration
  const [formData, setFormData] = useState({
    client_id: '',
    logo_url: '',
    color_primary: '#4299e1',
    webhook_url: '',
    bot_description: '',
    banner_color: '#2d3748',
    chat_background_color: '#f7fafc',
    text_color: '#2d3748',
    is_active: true
  });

  useEffect(() => {
    loadConfigs();
  }, []);

  // Charger les configs depuis l'API
  const loadConfigs = async () => {
    try {
      setLoading(true);
      const res = await fetch(buildApiUrl(API_CONFIG.ENDPOINTS.CONFIGS));
      const data = await res.json();
      setConfigs(data);
      setStats({
        totalMessages: data.reduce((acc, c) => acc + (c.message_count || 0), 0),
        totalUsers: data.reduce((acc, c) => acc + (c.user_count || 0), 0),
        activeBots: data.filter((c) => c.is_active).length,
        totalConfigs: data.length
      });
    } catch (error) {
      console.error('Erreur chargement configs:', error);
    } finally {
      setLoading(false);
    }
  };

  // Créer ou modifier une config via l'API
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editingConfig) {
        // Modifier
        await fetch(buildApiUrl(`${API_CONFIG.ENDPOINTS.CONFIGS}/${editingConfig.client_id}`), {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });
      } else {
        // Créer
        await fetch(buildApiUrl(API_CONFIG.ENDPOINTS.CONFIGS), {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });
      }
      setIsDialogOpen(false);
      setEditingConfig(null);
      resetForm();
      loadConfigs();
    } catch (error) {
      console.error('Erreur sauvegarde:', error);
    }
  };

  // Supprimer une config via l'API
  const handleDelete = async (configId: string) => {
    if (!confirm('Êtes-vous sûr de vouloir supprimer cette configuration ?')) return;
    try {
      await fetch(buildApiUrl(`${API_CONFIG.ENDPOINTS.CONFIGS}/${configId}`), { method: 'DELETE' });
      loadConfigs();
    } catch (error) {
      console.error('Erreur suppression:', error);
    }
  };

  const handleEdit = (config: ClientConfig) => {
    setEditingConfig(config);
    setFormData({
      client_id: config.client_id,
      logo_url: config.logo_url,
      color_primary: config.color_primary,
      webhook_url: config.webhook_url,
      bot_description: config.bot_description,
      banner_color: config.banner_color || '#2d3748',
      chat_background_color: config.chat_background_color || '#f7fafc',
      text_color: config.text_color || '#2d3748',
      is_active: config.is_active
    });
    setIsDialogOpen(true);
  };

  const resetForm = () => {
    setFormData({
      client_id: '',
      logo_url: '',
      color_primary: '#4299e1',
      webhook_url: '',
      bot_description: '',
      banner_color: '#2d3748',
      chat_background_color: '#f7fafc',
      text_color: '#2d3748',
      is_active: true
    });
  };

  const copyIntegrationCode = (clientId: string) => {
    const code = `<script src="https://cdn.monchatbot.com/chatbot.js" data-client-id="${clientId}"></script>`;
    navigator.clipboard.writeText(code);
    alert('Code d\'intégration copié !');
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    navigate('/login');
  };

  return (
    <div style={{ minHeight: '100vh', background: '#f8fafc' }}>
      {/* Header */}
      <header style={{ 
        background: 'white', 
        borderBottom: '1px solid #e2e8f0',
        padding: '1rem 2rem'
      }}>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ 
              background: '#2563eb', 
              color: 'white', 
              padding: '0.5rem',
              borderRadius: '8px',
              fontSize: '1.5rem'
            }}>
              🤖
            </div>
            <div>
              <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', margin: 0 }}>
                ChatBot Pro Dashboard
          </h1>
              <p style={{ margin: 0, color: '#64748b', fontSize: '0.875rem' }}>
                Gestion des chatbots commerciaux
              </p>
            </div>
          </div>
          <button 
            onClick={handleLogout}
            style={{ 
              background: '#dc2626',
              color: 'white',
              border: 'none',
              padding: '0.5rem 1rem',
              borderRadius: '6px',
              cursor: 'pointer'
            }}
          >
            Déconnexion
          </button>
        </div>
      </header>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
        {/* Stats Cards */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1rem',
          marginBottom: '2rem'
        }}>
          <div style={{ 
            background: 'white', 
            padding: '1.5rem', 
            borderRadius: '8px',
            border: '1px solid #e2e8f0'
          }}>
            <h3 style={{ margin: '0 0 0.5rem 0', color: '#64748b' }}>Messages Totaux</h3>
            <p style={{ fontSize: '2rem', fontWeight: 'bold', margin: 0, color: '#2563eb' }}>
              {stats.totalMessages.toLocaleString()}
            </p>
          </div>
          <div style={{ 
            background: 'white', 
            padding: '1.5rem', 
            borderRadius: '8px',
            border: '1px solid #e2e8f0'
          }}>
            <h3 style={{ margin: '0 0 0.5rem 0', color: '#64748b' }}>Utilisateurs Actifs</h3>
            <p style={{ fontSize: '2rem', fontWeight: 'bold', margin: 0, color: '#059669' }}>
              {stats.totalUsers.toLocaleString()}
            </p>
          </div>
          <div style={{ 
            background: 'white', 
            padding: '1.5rem', 
            borderRadius: '8px',
            border: '1px solid #e2e8f0'
          }}>
            <h3 style={{ margin: '0 0 0.5rem 0', color: '#64748b' }}>Bots Actifs</h3>
            <p style={{ fontSize: '2rem', fontWeight: 'bold', margin: 0, color: '#7c3aed' }}>
              {stats.activeBots}
            </p>
          </div>
          <div style={{ 
            background: 'white', 
            padding: '1.5rem', 
            borderRadius: '8px',
            border: '1px solid #e2e8f0'
          }}>
            <h3 style={{ margin: '0 0 0.5rem 0', color: '#64748b' }}>Configurations</h3>
            <p style={{ fontSize: '2rem', fontWeight: 'bold', margin: 0, color: '#ea580c' }}>
              {stats.totalConfigs}
            </p>
          </div>
        </div>

        {/* Configurations Section */}
        <div style={{ background: 'white', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
          <div style={{ 
            padding: '1.5rem', 
            borderBottom: '1px solid #e2e8f0',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <h2 style={{ margin: 0, fontSize: '1.25rem', fontWeight: 'bold' }}>
              Configurations de Chatbots
              </h2>
            <button 
              onClick={() => {
                    setEditingConfig(null);
                    resetForm();
                setIsDialogOpen(true);
              }}
              style={{ 
                background: '#2563eb',
                color: 'white',
                border: 'none',
                padding: '0.5rem 1rem',
                borderRadius: '6px',
                cursor: 'pointer'
              }}
            >
              + Nouvelle Configuration
            </button>
          </div>

          {loading ? (
            <div style={{ padding: '2rem', textAlign: 'center' }}>
              <p>Chargement...</p>
            </div>
          ) : configs.length === 0 ? (
            <div style={{ padding: '2rem', textAlign: 'center' }}>
              <p style={{ color: '#64748b' }}>Aucune configuration trouvée</p>
              <button 
                onClick={() => setIsDialogOpen(true)}
                style={{ 
                  background: '#2563eb',
                  color: 'white',
                  border: 'none',
                  padding: '0.5rem 1rem',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  marginTop: '1rem'
                }}
              >
                Créer la première configuration
              </button>
            </div>
          ) : (
            <div style={{ padding: '1.5rem' }}>
              {configs.map((config) => (
                <div key={config.id} style={{ 
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px',
                  padding: '1.5rem',
                  marginBottom: '1rem'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                        <h3 style={{ margin: 0, fontSize: '1.125rem', fontWeight: 'bold' }}>
                          {config.client_id}
                        </h3>
                        <span style={{ 
                          background: config.is_active ? '#dcfce7' : '#fef2f2',
                          color: config.is_active ? '#166534' : '#dc2626',
                          padding: '0.25rem 0.5rem',
                          borderRadius: '4px',
                          fontSize: '0.75rem',
                          fontWeight: 'bold'
                        }}>
                          {config.is_active ? 'Actif' : 'Inactif'}
                        </span>
                      </div>
                      <p style={{ margin: '0 0 1rem 0', color: '#64748b' }}>
                        {config.bot_description}
                      </p>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                        <div>
                          <strong>Messages:</strong> {config.message_count?.toLocaleString() || 0}
                        </div>
                        <div>
                          <strong>Utilisateurs:</strong> {config.user_count?.toLocaleString() || 0}
                        </div>
                        <div>
                          <strong>Webhook:</strong> {config.webhook_url}
                        </div>
                        <div>
                          <strong>Créé le:</strong> {new Date(config.created_at).toLocaleDateString()}
                        </div>
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <button 
                        onClick={() => copyIntegrationCode(config.client_id)}
                        style={{ 
                          background: '#f8fafc',
                          color: '#374151',
                          border: '1px solid #d1d5db',
                          padding: '0.5rem',
                          borderRadius: '6px',
                          cursor: 'pointer'
                        }}
                        title="Copier le code d'intégration"
                      >
                        📋
                      </button>
                      <button 
                        onClick={() => handleEdit(config)}
                        style={{ 
                          background: '#f8fafc',
                          color: '#374151',
                          border: '1px solid #d1d5db',
                          padding: '0.5rem',
                          borderRadius: '6px',
                          cursor: 'pointer'
                        }}
                        title="Modifier"
                      >
                        ✏️
                      </button>
                      <button 
                        onClick={() => handleDelete(config.id)}
                        style={{ 
                          background: '#fef2f2',
                          color: '#dc2626',
                          border: '1px solid #fecaca',
                          padding: '0.5rem',
                          borderRadius: '6px',
                          cursor: 'pointer'
                        }}
                        title="Supprimer"
                      >
                        🗑️
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Modal de configuration */}
      {isDialogOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000
        }}>
          <div style={{
            background: 'white',
            borderRadius: '8px',
            padding: '2rem',
            maxWidth: '600px',
            width: '90%',
            maxHeight: '90vh',
            overflow: 'auto'
          }}>
            <h2 style={{ margin: '0 0 1rem 0' }}>
                      {editingConfig ? 'Modifier la configuration' : 'Nouvelle configuration'}
            </h2>
            
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                      <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                    Client ID *
                  </label>
                  <input
                    type="text"
                          value={formData.client_id}
                          onChange={(e) => setFormData({...formData, client_id: e.target.value})}
                          placeholder="ex: CLIENT123"
                          required
                    style={{ width: '100%' }}
                        />
                      </div>
                      <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                    Description du bot *
                  </label>
                  <input
                    type="text"
                          value={formData.bot_description}
                          onChange={(e) => setFormData({...formData, bot_description: e.target.value})}
                          placeholder="ex: Assistant virtuel"
                          required
                    style={{ width: '100%' }}
                        />
                      </div>
                    </div>

                    <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                  URL Webhook *
                </label>
                <input
                  type="url"
                        value={formData.webhook_url}
                        onChange={(e) => setFormData({...formData, webhook_url: e.target.value})}
                        placeholder="https://your-webhook.com/chat"
                        required
                  style={{ width: '100%' }}
                      />
                    </div>

                    <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                  URL du logo
                </label>
                <input
                  type="url"
                        value={formData.logo_url}
                        onChange={(e) => setFormData({...formData, logo_url: e.target.value})}
                        placeholder="https://example.com/logo.png"
                  style={{ width: '100%' }}
                      />
                    </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                      <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                    Couleur principale
                  </label>
                  <input
                          type="color"
                          value={formData.color_primary}
                          onChange={(e) => setFormData({...formData, color_primary: e.target.value})}
                    style={{ width: '100%', height: '40px' }}
                        />
                      </div>
                      <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                    Couleur de la bannière
                  </label>
                  <input
                          type="color"
                          value={formData.banner_color}
                          onChange={(e) => setFormData({...formData, banner_color: e.target.value})}
                    style={{ width: '100%', height: '40px' }}
                        />
                      </div>
                    </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                      <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                    Couleur de fond du chat
                  </label>
                  <input
                          type="color"
                          value={formData.chat_background_color}
                          onChange={(e) => setFormData({...formData, chat_background_color: e.target.value})}
                    style={{ width: '100%', height: '40px' }}
                        />
                      </div>
                      <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                    Couleur du texte
                  </label>
                  <input
                          type="color"
                          value={formData.text_color}
                          onChange={(e) => setFormData({...formData, text_color: e.target.value})}
                    style={{ width: '100%', height: '40px' }}
                        />
                      </div>
                    </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <input
                  type="checkbox"
                  id="is_active"
                  checked={formData.is_active}
                  onChange={(e) => setFormData({...formData, is_active: e.target.checked})}
                />
                <label htmlFor="is_active" style={{ fontWeight: 'bold' }}>
                  Configuration active
                </label>
              </div>

              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end', marginTop: '1rem' }}>
                <button
                  type="button"
                  onClick={() => setIsDialogOpen(false)}
                  style={{
                    background: '#f8fafc',
                    color: '#374151',
                    border: '1px solid #d1d5db',
                    padding: '0.5rem 1rem',
                    borderRadius: '6px',
                    cursor: 'pointer'
                  }}
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  style={{
                    background: '#2563eb',
                    color: 'white',
                    border: 'none',
                    padding: '0.5rem 1rem',
                    borderRadius: '6px',
                    cursor: 'pointer'
                  }}
                >
                  {editingConfig ? 'Mettre à jour' : 'Créer'}
                </button>
              </div>
            </form>
                  </div>
                </div>
      )}
    </div>
  );
};

export default Dashboard; 