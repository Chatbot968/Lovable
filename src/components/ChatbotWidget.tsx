import React, { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useToast } from "@/hooks/use-toast";
import { Send, MessageSquare } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import ReactMarkdown from 'react-markdown';

interface ChatbotWidgetProps {
  clientId: string;
  isDemo?: boolean;
}

interface ClientConfig {
  client_id: string;
  logo_url: string;
  color_primary: string;
  webhook_url: string;
  bot_description: string;
  banner_color?: string;
  chat_background_color?: string;
  text_color?: string;
}

interface ChatMessage {
  text: string;
  isUser: boolean;
  timestamp: string;
}

export const ChatbotWidget = ({ clientId, isDemo = false }: ChatbotWidgetProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
  const [clientConfig, setClientConfig] = useState<ClientConfig | null>(null);
  const [configError, setConfigError] = useState<string | null>(null);
  const [isConfigLoading, setIsConfigLoading] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  // Charger la configuration client via la fonction sécurisée
  useEffect(() => {
    const loadClientConfig = async () => {
      if (!clientId) {
        console.error('❌ Client ID manquant');
        return;
      }

      console.log(`🔄 Chargement config pour client: ${clientId}`);
      setIsConfigLoading(true);

      try {
        // Use the secure RPC function that bypasses RLS for public access
        const { data, error } = await supabase
          .rpc('get_client_config_public', { p_client_id: clientId });

        if (error) {
          console.error('❌ Erreur lors du chargement de la config:', error);
          setConfigError(`Configuration introuvable pour le client: ${clientId}`);
          return;
        }

        if (!data || data.length === 0) {
          console.error('❌ Aucune configuration trouvée pour:', clientId);
          setConfigError(`Aucune configuration trouvée pour le client: ${clientId}`);
          return;
        }

        const config = data[0];
        setClientConfig(config);
        console.log('✅ Configuration chargée:', config);
      } catch (error) {
        console.error('❌ Erreur réseau:', error);
        setConfigError('Erreur de connexion');
      } finally {
        setIsConfigLoading(false);
      }
    };

    loadClientConfig();
  }, [clientId]);

  // Envoyer un message avec gestion améliorée des réponses webhook
  const sendMessage = async () => {
    if (!message.trim()) return;

    const userMessage: ChatMessage = {
      text: message,
      isUser: true,
      timestamp: new Date().toLocaleTimeString(),
    };
    setChatHistory((prev) => [...prev, userMessage]);
    
    const currentMessage = message;
    setMessage('');

    try {
      if (!clientConfig) {
        console.error('❌ Configuration client non chargée');
        toast({
          title: "Erreur",
          description: "Configuration client non chargée.",
          variant: "destructive",
        });
        return;
      }

      // Simuler une réponse si en mode démo
      if (isDemo) {
        setTimeout(() => {
          const demoResponse: ChatMessage = {
            text: `**[DEMO]** Merci pour votre message: "${currentMessage}". 

Ceci est une réponse simulée avec du **markdown** :
- Point 1
- Point 2
- *Texte en italique*`,
            isUser: false,
            timestamp: new Date().toLocaleTimeString(),
          };
          setChatHistory((prev) => [...prev, demoResponse]);
        }, 500);
        return;
      }

      console.log('🚀 Envoi message webhook:', {
        url: clientConfig.webhook_url,
        message: currentMessage
      });

      // Envoyer le message au webhook
      const response = await fetch(clientConfig.webhook_url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: currentMessage }),
      });

      if (!response.ok) {
        console.error('❌ Erreur webhook:', response.status, response.statusText);
        throw new Error(`Erreur ${response.status}: ${response.statusText}`);
      }

      const responseData = await response.json();
      console.log('📥 Réponse webhook reçue:', responseData);

      // Gérer différents formats de réponse
      let botResponseText = '';
      
      if (Array.isArray(responseData)) {
        // Format tableau: [{"texte": "..."}]
        botResponseText = responseData[0]?.texte || responseData[0]?.text || responseData[0]?.response || 'Réponse vide';
      } else if (typeof responseData === 'object') {
        // Format objet: {"response": "..."} ou {"texte": "..."}
        botResponseText = responseData.response || responseData.texte || responseData.text || responseData.message || 'Réponse vide';
      } else if (typeof responseData === 'string') {
        // Format string directe
        botResponseText = responseData;
      } else {
        botResponseText = 'Format de réponse non reconnu';
      }

      console.log('✅ Texte de réponse extrait:', botResponseText);

      const botResponse: ChatMessage = {
        text: botResponseText,
        isUser: false,
        timestamp: new Date().toLocaleTimeString(),
      };
      
      setChatHistory((prev) => [...prev, botResponse]);

    } catch (error) {
      console.error('❌ Erreur lors de l\'envoi du message:', error);
      
      const errorMessage: ChatMessage = {
        text: `⚠️ **Erreur de connexion**\n\nImpossible de contacter le service. Veuillez réessayer dans quelques instants.\n\n*Détails techniques: ${error instanceof Error ? error.message : 'Erreur inconnue'}*`,
        isUser: false,
        timestamp: new Date().toLocaleTimeString(),
      };
      
      setChatHistory((prev) => [...prev, errorMessage]);
      
      toast({
        title: "Erreur",
        description: "Erreur lors de l'envoi du message.",
        variant: "destructive",
      });
    }
  };

  // Scroll vers le bas à chaque nouveau message
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chatHistory]);

  // Basculer le mode plein écran
  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  // Styles dynamiques
  const widgetStyle: React.CSSProperties = {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    zIndex: 100,
  };

  const cardStyle: React.CSSProperties = {
    width: '350px',
    height: isFullScreen ? '100vh' : '500px',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '0.75rem',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    overflow: 'hidden'
  };

  const headerStyle: React.CSSProperties = {
    padding: '1rem',
    backgroundColor: clientConfig?.banner_color || clientConfig?.color_primary || '#3B82F6',
    color: '#fff',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  };

  const chatStyle: React.CSSProperties = {
    flex: 1,
    padding: '1rem',
    overflowY: 'auto' as const,
    backgroundColor: clientConfig?.chat_background_color || '#ffffff',
    color: clientConfig?.text_color || '#000000'
  };

  const inputStyle: React.CSSProperties = {
    padding: '1rem',
    borderTop: '1px solid #e2e8f0',
    display: 'flex',
  };

  if (configError) {
    return (
      <div style={widgetStyle}>
        <Button variant="destructive">{configError}</Button>
      </div>
    );
  }

  if (isConfigLoading) {
    return (
      <div style={widgetStyle}>
        <Button variant="secondary" disabled>Chargement...</Button>
      </div>
    );
  }

  return (
    <div style={widgetStyle}>
      {isOpen ? (
        <Card style={cardStyle}>
          <div style={headerStyle}>
            <div className="flex items-center space-x-3">
              <Avatar>
                <AvatarImage src={clientConfig?.logo_url} />
                <AvatarFallback><MessageSquare /></AvatarFallback>
              </Avatar>
              <span>{clientConfig?.client_id}</span>
            </div>
            <Button variant="ghost" size="icon" onClick={toggleFullScreen}>
              {isFullScreen ? 'Réduire' : 'Plein écran'}
            </Button>
          </div>
          <CardContent style={{ padding: '0' }}>
            <div style={chatStyle} ref={chatContainerRef}>
              {chatHistory.map((msg, index) => (
                <div key={index} className={`mb-2 ${msg.isUser ? 'text-right' : 'text-left'}`}>
                  <div
                    className={`inline-block px-3 py-2 rounded-xl max-w-[80%] ${msg.isUser ? 'bg-blue-500 text-white float-right' : 'bg-gray-200 text-gray-800 float-left'}`}
                  >
                    {msg.isUser ? (
                      <>
                        {msg.text}
                        <div className="text-xs mt-1 opacity-75">{msg.timestamp}</div>
                      </>
                    ) : (
                      <>
                        <div className="prose prose-sm max-w-none">
                          <ReactMarkdown
                            components={{
                              p: ({ children }) => <p className="mb-2 last:mb-0">{children}</p>,
                              strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
                              em: ({ children }) => <em className="italic">{children}</em>,
                              ul: ({ children }) => <ul className="list-disc list-inside mb-2">{children}</ul>,
                              ol: ({ children }) => <ol className="list-decimal list-inside mb-2">{children}</ol>,
                              li: ({ children }) => <li className="mb-1">{children}</li>,
                              code: ({ children }) => <code className="bg-gray-300 px-1 rounded text-sm">{children}</code>,
                              pre: ({ children }) => <pre className="bg-gray-300 p-2 rounded text-sm overflow-x-auto">{children}</pre>,
                            }}
                          >
                            {msg.text}
                          </ReactMarkdown>
                        </div>
                        <div className="text-xs mt-2 opacity-75">{msg.timestamp}</div>
                      </>
                    )}
                  </div>
                  <div className="clearfix"></div>
                </div>
              ))}
            </div>
            <div style={inputStyle}>
              <Input
                type="text"
                placeholder="Votre message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' ? sendMessage() : null}
                className="rounded-l-md"
              />
              <Button onClick={sendMessage} className="rounded-r-md">
                <Send className="h-4 w-4 mr-2" />
                Envoyer
              </Button>
            </div>
          </CardContent>
        </Card>
      ) : (
        <Button onClick={() => setIsOpen(true)} style={{ backgroundColor: clientConfig?.color_primary || '#3B82F6', color: '#fff' }}>
          <MessageSquare className="h-4 w-4 mr-2" />
          Besoin d'aide ?
        </Button>
      )}
    </div>
  );
};
