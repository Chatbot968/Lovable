import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { Plus, Settings, Copy, ExternalLink, Trash2, Eye } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/components/AuthContext";

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
}

export default function Dashboard() {
  const [configs, setConfigs] = useState<ClientConfig[]>([]);
  const [loading, setLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingConfig, setEditingConfig] = useState<ClientConfig | null>(null);
  const { toast } = useToast();
  const { user } = useAuth();

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

  const loadConfigs = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('client_configs')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setConfigs(data || []);
    } catch (error) {
      console.error('Erreur chargement configs:', error);
      toast({
        title: "Erreur",
        description: "Impossible de charger les configurations.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      if (editingConfig) {
        // Mise à jour
        const { error } = await supabase
          .from('client_configs')
          .update({
            ...formData,
            updated_at: new Date().toISOString()
          })
          .eq('id', editingConfig.id);

        if (error) throw error;
        
        toast({
          title: "Succès",
          description: "Configuration mise à jour avec succès.",
        });
      } else {
        // Création
        const { error } = await supabase
          .from('client_configs')
          .insert([{
            ...formData,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
          }]);

        if (error) throw error;
        
        toast({
          title: "Succès",
          description: "Configuration créée avec succès.",
        });
      }

      setIsDialogOpen(false);
      setEditingConfig(null);
      resetForm();
      loadConfigs();
    } catch (error) {
      console.error('Erreur sauvegarde:', error);
      toast({
        title: "Erreur",
        description: "Impossible de sauvegarder la configuration.",
        variant: "destructive",
      });
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

  const handleDelete = async (configId: string) => {
    if (!confirm('Êtes-vous sûr de vouloir supprimer cette configuration ?')) return;

    try {
      const { error } = await supabase
        .from('client_configs')
        .delete()
        .eq('id', configId);

      if (error) throw error;
      
      toast({
        title: "Succès",
        description: "Configuration supprimée avec succès.",
      });
      loadConfigs();
    } catch (error) {
      console.error('Erreur suppression:', error);
      toast({
        title: "Erreur",
        description: "Impossible de supprimer la configuration.",
        variant: "destructive",
      });
    }
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
    toast({
      title: "Copié !",
      description: "Code d'intégration copié dans le presse-papiers.",
    });
  };

  const copyConfigUrl = (clientId: string) => {
    const url = `https://dashboard.monchatbot.com/configs/${clientId}.json`;
    navigator.clipboard.writeText(url);
    toast({
      title: "Copié !",
      description: "URL de configuration copiée dans le presse-papiers.",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            🤖 Dashboard Chatbot
          </h1>
          <p className="text-gray-600">
            Gérez vos configurations de chatbots et intégrez-les sur vos sites web.
          </p>
        </div>

        <Tabs defaultValue="configs" className="space-y-6">
          <TabsList>
            <TabsTrigger value="configs">Configurations</TabsTrigger>
            <TabsTrigger value="integration">Guide d'intégration</TabsTrigger>
          </TabsList>

          <TabsContent value="configs" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-900">
                Configurations de chatbots
              </h2>
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <Button onClick={() => {
                    setEditingConfig(null);
                    resetForm();
                  }}>
                    <Plus className="w-4 h-4 mr-2" />
                    Nouvelle configuration
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle>
                      {editingConfig ? 'Modifier la configuration' : 'Nouvelle configuration'}
                    </DialogTitle>
                    <DialogDescription>
                      Configurez votre chatbot avec ses paramètres personnalisés.
                    </DialogDescription>
                  </DialogHeader>
                  
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="client_id">Client ID *</Label>
                        <Input
                          id="client_id"
                          value={formData.client_id}
                          onChange={(e) => setFormData({...formData, client_id: e.target.value})}
                          placeholder="ex: CLIENT123"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="bot_description">Description du bot *</Label>
                        <Input
                          id="bot_description"
                          value={formData.bot_description}
                          onChange={(e) => setFormData({...formData, bot_description: e.target.value})}
                          placeholder="ex: Assistant virtuel"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="webhook_url">URL Webhook *</Label>
                      <Input
                        id="webhook_url"
                        value={formData.webhook_url}
                        onChange={(e) => setFormData({...formData, webhook_url: e.target.value})}
                        placeholder="https://your-webhook.com/chat"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="logo_url">URL du logo</Label>
                      <Input
                        id="logo_url"
                        value={formData.logo_url}
                        onChange={(e) => setFormData({...formData, logo_url: e.target.value})}
                        placeholder="https://example.com/logo.png"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="color_primary">Couleur principale</Label>
                        <Input
                          id="color_primary"
                          type="color"
                          value={formData.color_primary}
                          onChange={(e) => setFormData({...formData, color_primary: e.target.value})}
                        />
                      </div>
                      <div>
                        <Label htmlFor="banner_color">Couleur de la bannière</Label>
                        <Input
                          id="banner_color"
                          type="color"
                          value={formData.banner_color}
                          onChange={(e) => setFormData({...formData, banner_color: e.target.value})}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="chat_background_color">Couleur de fond du chat</Label>
                        <Input
                          id="chat_background_color"
                          type="color"
                          value={formData.chat_background_color}
                          onChange={(e) => setFormData({...formData, chat_background_color: e.target.value})}
                        />
                      </div>
                      <div>
                        <Label htmlFor="text_color">Couleur du texte</Label>
                        <Input
                          id="text_color"
                          type="color"
                          value={formData.text_color}
                          onChange={(e) => setFormData({...formData, text_color: e.target.value})}
                        />
                      </div>
                    </div>

                    <div className="flex justify-end space-x-2">
                      <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                        Annuler
                      </Button>
                      <Button type="submit">
                        {editingConfig ? 'Mettre à jour' : 'Créer'}
                      </Button>
                    </div>
                  </form>
                </DialogContent>
              </Dialog>
            </div>

            {loading ? (
              <div className="text-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto"></div>
                <p className="mt-2 text-gray-600">Chargement...</p>
              </div>
            ) : configs.length === 0 ? (
              <Card>
                <CardContent className="text-center py-8">
                  <Settings className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    Aucune configuration
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Créez votre première configuration de chatbot pour commencer.
                  </p>
                  <Button onClick={() => setIsDialogOpen(true)}>
                    <Plus className="w-4 h-4 mr-2" />
                    Créer une configuration
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <div className="grid gap-4">
                {configs.map((config) => (
                  <Card key={config.id}>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="flex items-center gap-2">
                            {config.client_id}
                            <Badge variant={config.is_active ? "default" : "secondary"}>
                              {config.is_active ? "Actif" : "Inactif"}
                            </Badge>
                          </CardTitle>
                          <CardDescription>
                            {config.bot_description}
                          </CardDescription>
                        </div>
                        <div className="flex gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => copyIntegrationCode(config.client_id)}
                          >
                            <Copy className="w-4 h-4 mr-1" />
                            Code
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => copyConfigUrl(config.client_id)}
                          >
                            <ExternalLink className="w-4 h-4 mr-1" />
                            URL
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleEdit(config)}
                          >
                            <Eye className="w-4 h-4 mr-1" />
                            Éditer
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleDelete(config.id)}
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="font-medium">Webhook:</span>
                          <p className="text-gray-600 truncate">{config.webhook_url}</p>
                        </div>
                        <div>
                          <span className="font-medium">Créé le:</span>
                          <p className="text-gray-600">
                            {new Date(config.created_at).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="integration" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>📋 Guide d'intégration</CardTitle>
                <CardDescription>
                  Intégrez facilement votre chatbot sur n'importe quel site web.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-2">1. Code d'intégration</h3>
                  <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                    {`<script src="https://cdn.monchatbot.com/chatbot.js" data-client-id="VOTRE_CLIENT_ID"></script>`}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">2. Options de configuration</h3>
                  <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
{`<script 
  src="https://cdn.monchatbot.com/chatbot.js" 
  data-client-id="VOTRE_CLIENT_ID"
  data-position="bottom-right"
  data-theme="light"
  data-language="fr"
  data-auto-open="false"
  data-greeting="Bonjour ! Comment puis-je vous aider ?"
  data-voice-enabled="true">
</script>`}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">3. Utilisation programmatique</h3>
                  <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
{`// Créer une instance manuellement
const widget = new ChatbotWidget('VOTRE_CLIENT_ID', {
  position: 'bottom-right',
  theme: 'light',
  language: 'fr',
  autoOpen: true,
  greeting: 'Bonjour !',
  voiceEnabled: true
});

// Contrôler le widget
widget.toggle(); // Ouvrir/fermer
widget.sendMessage('Hello'); // Envoyer un message`}
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-medium text-blue-900 mb-2">💡 Conseils</h4>
                  <ul className="text-blue-800 space-y-1 text-sm">
                    <li>• Le widget se charge automatiquement et s'isole du CSS de votre site</li>
                    <li>• La configuration est récupérée automatiquement via l'URL JSON</li>
                    <li>• Testez d'abord en mode développement avant la production</li>
                    <li>• Assurez-vous que votre webhook répond correctement aux requêtes POST</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
} 