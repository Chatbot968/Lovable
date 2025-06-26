import React, { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useToast } from "@/hooks/use-toast";
import { Send, MessageSquare, Mic, MicOff, X, Maximize2, Minimize2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import ReactMarkdown from 'react-markdown';
import { useIsMobile } from "@/hooks/use-mobile";

interface VoiceChatWidgetProps {
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
  isAudio?: boolean;
}

export const VoiceChatWidget = ({ clientId, isDemo = false }: VoiceChatWidgetProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
  const [clientConfig, setClientConfig] = useState<ClientConfig | null>(null);
  const [configError, setConfigError] = useState<string | null>(null);
  const [isConfigLoading, setIsConfigLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const recognitionRef = useRef<any>(null);
  const { toast } = useToast();
  const isMobile = useIsMobile();

  // Charger la configuration client
  useEffect(() => {
    const loadClientConfig = async () => {
      if (!clientId) {
        console.error('❌ Client ID manquant');
        return;
      }

      console.log(`🔄 Chargement config pour client: ${clientId}`);
      setIsConfigLoading(true);

      try {
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

  // Auto-scroll vers le bas à chaque nouveau message
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chatHistory]);

  // Initialiser la reconnaissance vocale
  const initializeSpeechRecognition = () => {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
      console.error('❌ Speech Recognition non supporté');
      toast({
        title: "Reconnaissance vocale non supportée",
        description: "Votre navigateur ne supporte pas la reconnaissance vocale.",
        variant: "destructive",
      });
      return false;
    }

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'fr-FR';
    recognition.maxAlternatives = 1;

    recognition.onstart = () => {
      console.log('🎤 Reconnaissance vocale démarrée');
      setIsListening(true);
    };

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      console.log('🎯 Transcription reçue:', transcript);
      
      if (transcript.trim()) {
        setMessage(transcript);
        // Auto-envoyer le message transcrit
        sendMessage(transcript);
      }
    };

    recognition.onerror = (event) => {
      console.error('❌ Erreur reconnaissance vocale:', event.error);
      setIsListening(false);
      
      let errorMessage = 'Erreur de reconnaissance vocale';
      switch (event.error) {
        case 'no-speech':
          errorMessage = 'Aucun son détecté. Veuillez réessayer.';
          break;
        case 'audio-capture':
          errorMessage = 'Microphone inaccessible. Vérifiez les permissions.';
          break;
        case 'not-allowed':
          errorMessage = 'Permission microphone refusée. Autorisez l\'accès au microphone.';
          break;
      }
      
      toast({
        title: "Erreur microphone",
        description: errorMessage,
        variant: "destructive",
      });
    };

    recognition.onend = () => {
      console.log('🎤 Reconnaissance vocale terminée');
      setIsListening(false);
    };

    recognitionRef.current = recognition;
    return true;
  };

  // Démarrer l'enregistrement vocal
  const startVoiceRecording = () => {
    if (isListening) return;
    
    if (!recognitionRef.current) {
      const initialized = initializeSpeechRecognition();
      if (!initialized) return;
    }

    try {
      recognitionRef.current.start();
    } catch (error) {
      console.error('❌ Erreur démarrage reconnaissance:', error);
      toast({
        title: "Erreur",
        description: "Impossible de démarrer la reconnaissance vocale.",
        variant: "destructive",
      });
    }
  };

  // Arrêter l'enregistrement vocal
  const stopVoiceRecording = () => {
    if (!isListening || !recognitionRef.current) return;
    
    try {
      recognitionRef.current.stop();
    } catch (error) {
      console.error('❌ Erreur arrêt reconnaissance:', error);
    }
  };

  // Envoyer un message avec gestion améliorée des réponses webhook
  const sendMessage = async (messageText?: string) => {
    const textToSend = messageText || message.trim();
    if (!textToSend) return;

    const userMessage: ChatMessage = {
      text: textToSend,
      isUser: true,
      timestamp: new Date().toLocaleTimeString(),
      isAudio: !!messageText // true si vient de la transcription
    };
    
    setChatHistory((prev) => [...prev, userMessage]);
    setMessage('');
    setIsProcessing(true);

    try {
      if (!clientConfig) {
        console.error('❌ Configuration client non chargée');
        return;
      }

      // Simuler une réponse si en mode démo
      if (isDemo) {
        setTimeout(() => {
          const demoResponse: ChatMessage = {
            text: `**[DEMO]** Merci pour votre message: "${textToSend}". 

Ceci est une réponse simulée avec du **markdown** :
- Réponse vocale simulée
- Support du *formatage*
- **Gras** et \`code\``,
            isUser: false,
            timestamp: new Date().toLocaleTimeString(),
          };
          setChatHistory((prev) => [...prev, demoResponse]);
          setIsProcessing(false);
        }, 1000);
        return;
      }

      console.log('🚀 Envoi message webhook:', {
        url: clientConfig.webhook_url,
        message: textToSend
      });

      // Envoyer le message au webhook
      const response = await fetch(clientConfig.webhook_url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: textToSend }),
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
    } finally {
      setIsProcessing(false);
    }
  };

  // Gestion des touches
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  // Styles dynamiques améliorés pour le responsive
  const getWidgetStyles = (): React.CSSProperties => {
    const baseStyles: React.CSSProperties = {
      position: 'fixed',
      zIndex: 1000,
    };

    if (isFullScreen) {
      return {
        ...baseStyles,
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        width: '100vw',
        height: '100vh',
      };
    }

    // Position standard en bas à droite
    if (isMobile) {
      return {
        ...baseStyles,
        bottom: '20px',
        right: '20px',
        left: '20px', // Full width sur mobile
      };
    }

    return {
      ...baseStyles,
      bottom: '20px',
      right: '20px',
    };
  };

  const getCardStyles = (): React.CSSProperties => {
    if (isFullScreen) {
      return {
        width: '100%',
        height: '100%',
        borderRadius: '0',
        display: 'flex',
        flexDirection: 'column',
      };
    }

    if (isMobile) {
      return {
        width: '100%',
        height: '60vh', // 60% de la hauteur sur mobile
        maxHeight: '500px',
        borderRadius: '16px',
        boxShadow: '0 20px 60px -12px rgba(0, 0, 0, 0.25)',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
      };
    }

    // Desktop : environ 1/4 de largeur et 1/2 de hauteur
    return {
      width: 'min(400px, 25vw)',
      height: 'min(600px, 50vh)',
      minWidth: '320px',
      minHeight: '400px',
      borderRadius: '20px',
      boxShadow: '0 20px 60px -12px rgba(0, 0, 0, 0.25)',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
    };
  };

  const getHeaderStyles = (): React.CSSProperties => ({
    padding: isMobile ? '12px 16px' : '16px 20px',
    backgroundColor: clientConfig?.banner_color || clientConfig?.color_primary || '#3B82F6',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    minHeight: isMobile ? '50px' : '60px',
  });

  const getChatStyles = (): React.CSSProperties => ({
    flex: 1,
    padding: isMobile ? '12px' : '16px',
    overflowY: 'auto',
    backgroundColor: clientConfig?.chat_background_color || '#ffffff',
    color: clientConfig?.text_color || '#000000',
  });

  const getInputStyles = (): React.CSSProperties => ({
    padding: isMobile ? '12px 16px' : '16px 20px',
    borderTop: '1px solid #e2e8f0',
    backgroundColor: '#fff',
    display: 'flex',
    alignItems: 'center',
    gap: isMobile ? '8px' : '12px',
  });

  // Gestion des erreurs de configuration
  if (configError) {
    return (
      <div style={getWidgetStyles()}>
        <Button variant="destructive" className="animate-fade-in">
          {configError}
        </Button>
      </div>
    );
  }

  if (isConfigLoading) {
    return (
      <div style={getWidgetStyles()}>
        <Button variant="secondary" disabled className="animate-fade-in">
          <MessageSquare className="h-4 w-4 mr-2 animate-spin" />
          Chargement...
        </Button>
      </div>
    );
  }

  return (
    <div style={getWidgetStyles()}>
      {isOpen ? (
        <Card 
          style={getCardStyles()} 
          className="animate-scale-in"
        >
          {/* Header */}
          <div style={getHeaderStyles()}>
            <div className="flex items-center space-x-3">
              <Avatar className={`${isMobile ? 'h-6 w-6' : 'h-8 w-8'}`}>
                <AvatarImage src={clientConfig?.logo_url} />
                <AvatarFallback><MessageSquare className="h-4 w-4" /></AvatarFallback>
              </Avatar>
              <span className={`font-semibold ${isMobile ? 'text-sm' : ''}`}>
                {clientConfig?.client_id || 'Assistant'}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              {!isMobile && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsFullScreen(!isFullScreen)}
                  className="text-white hover:bg-white/20 h-8 w-8"
                >
                  {isFullScreen ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
                </Button>
              )}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20 h-8 w-8"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Zone de messages */}
          <div style={getChatStyles()} ref={chatContainerRef}>
            {chatHistory.length === 0 ? (
              <div className="text-center text-gray-500 mt-8">
                <MessageSquare className={`${isMobile ? 'h-8 w-8' : 'h-12 w-12'} mx-auto mb-4 opacity-50`} />
                <p className={isMobile ? 'text-sm' : ''}>Bonjour ! Comment puis-je vous aider ?</p>
                <p className={`${isMobile ? 'text-xs' : 'text-sm'} mt-2`}>Vous pouvez écrire ou utiliser le microphone 🎤</p>
              </div>
            ) : (
              chatHistory.map((msg, index) => (
                <div key={index} className={`mb-4 ${msg.isUser ? 'text-right' : 'text-left'}`}>
                  <div
                    className={`inline-block px-4 py-3 rounded-2xl max-w-[80%] break-words animate-slide-up ${
                      msg.isUser 
                        ? 'bg-blue-500 text-white ml-auto' 
                        : 'bg-gray-100 text-gray-800'
                    } ${isMobile ? 'text-sm' : ''}`}
                  >
                    {msg.isAudio && (
                      <div className="flex items-center mb-1 text-xs opacity-70">
                        <Mic className="h-3 w-3 mr-1" />
                        <span>Message vocal</span>
                      </div>
                    )}
                    {msg.isUser ? (
                      <>
                        <div>{msg.text}</div>
                        <div className="text-xs mt-2 opacity-70">{msg.timestamp}</div>
                      </>
                    ) : (
                      <>
                        <div className={`prose prose-sm max-w-none text-gray-800 ${isMobile ? 'text-xs' : ''}`}>
                          <ReactMarkdown
                            components={{
                              p: ({ children }) => <p className="mb-2 last:mb-0 text-gray-800">{children}</p>,
                              strong: ({ children }) => <strong className="font-semibold text-gray-900">{children}</strong>,
                              em: ({ children }) => <em className="italic text-gray-700">{children}</em>,
                              ul: ({ children }) => <ul className="list-disc list-inside mb-2 text-gray-800">{children}</ul>,
                              ol: ({ children }) => <ol className="list-decimal list-inside mb-2 text-gray-800">{children}</ol>,
                              li: ({ children }) => <li className="mb-1 text-gray-800">{children}</li>,
                              code: ({ children }) => <code className="bg-gray-600 text-white px-1 rounded text-sm">{children}</code>,
                              pre: ({ children }) => <pre className="bg-gray-600 text-white p-2 rounded text-sm overflow-x-auto">{children}</pre>,
                            }}
                          >
                            {msg.text}
                          </ReactMarkdown>
                        </div>
                        <div className="text-xs mt-2 opacity-70">{msg.timestamp}</div>
                      </>
                    )}
                  </div>
                </div>
              ))
            )}
            
            {isProcessing && (
              <div className="text-left mb-4">
                <div className={`inline-block px-4 py-3 rounded-2xl bg-gray-100 text-gray-800 animate-pulse ${isMobile ? 'text-sm' : ''}`}>
                  <div className="flex items-center space-x-2">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    </div>
                    <span className="text-sm">En cours de traitement...</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Zone d'input */}
          <div style={getInputStyles()}>
            <Input
              type="text"
              placeholder="Votre message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              disabled={isProcessing}
              className={`flex-1 rounded-full border-gray-300 focus:border-blue-500 ${isMobile ? 'text-sm' : ''}`}
            />
            <Button
              onClick={isListening ? stopVoiceRecording : startVoiceRecording}
              disabled={isProcessing}
              className={`rounded-full ${isMobile ? 'w-8 h-8' : 'w-10 h-10'} p-0 transition-all duration-200 ${
                isListening 
                  ? 'bg-green-500 hover:bg-green-600 animate-pulse' 
                  : 'bg-gray-500 hover:bg-gray-600'
              }`}
            >
              {isListening ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
            </Button>
            <Button
              onClick={() => sendMessage()}
              disabled={!message.trim() || isProcessing}
              style={{ backgroundColor: clientConfig?.color_primary || '#3B82F6' }}
              className={`rounded-full ${isMobile ? 'w-8 h-8' : 'w-10 h-10'} p-0 hover:opacity-90`}
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </Card>
      ) : (
        <Button
          onClick={() => setIsOpen(true)}
          className={`rounded-full ${isMobile ? 'w-12 h-12' : 'w-14 h-14'} p-0 shadow-3xl animate-fade-in hover:scale-110 transition-transform duration-200`}
          style={{ backgroundColor: clientConfig?.color_primary || '#3B82F6' }}
        >
          <MessageSquare className={`${isMobile ? 'h-5 w-5' : 'h-6 w-6'}`} />
        </Button>
      )}
    </div>
  );
};
