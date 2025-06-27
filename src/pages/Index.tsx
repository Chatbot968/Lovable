
import { useState } from "react";
import { AdminDashboard } from "@/components/AdminDashboard";
import { VoiceChatWidget } from "@/components/VoiceChatWidget";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MessageSquare, Settings, Eye, LogIn, LogOut, Mic } from "lucide-react";
import { useAuth } from "@/components/AuthContext";
import { Link } from "react-router-dom";

const Index = () => {
  const [previewClientId, setPreviewClientId] = useState<string>("demo-client");
  const [showWidget, setShowWidget] = useState(false);
  const [isDemoMode, setIsDemoMode] = useState(true);
  const { user, signOut } = useAuth();

  const handlePreviewClient = (clientId: string) => {
    console.log(`🎯 Aperçu demandé pour client: ${clientId}`);
    setPreviewClientId(clientId);
    setIsDemoMode(false);
    setShowWidget(true);
  };

  const toggleDemoWidget = () => {
    setPreviewClientId("demo-client");
    setIsDemoMode(true);
    setShowWidget(!showWidget);
  };

  const handleSignOut = () => {
    signOut();
  };

  // Si l'utilisateur n'est pas connecté, afficher la page d'accueil avec le lien de connexion
  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        {/* Header */}
        <header className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-600 rounded-lg">
                  <MessageSquare className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">ChatBot Pro</h1>
                  <p className="text-sm text-gray-500">Système de chatbot vocal + texte intégrable</p>
                </div>
              </div>
              <Link to="/auth">
                <Button className="flex items-center space-x-2">
                  <LogIn className="h-4 w-4" />
                  <span>Connexion Admin</span>
                </Button>
              </Link>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <div className="mb-8">
              <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <Mic className="h-4 w-4" />
                <span>Nouveau : Support vocal intégré</span>
              </div>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Plateforme ChatBot Pro - Vocal + Texte
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Connectez-vous pour accéder au tableau de bord administrateur et gérer vos chatbots vocaux
            </p>
            <Link to="/auth">
              <Button size="lg" className="flex items-center space-x-2 mx-auto">
                <LogIn className="h-5 w-5" />
                <span>Accéder au Dashboard</span>
              </Button>
            </Link>
          </div>
        </main>

        {/* Demo Widget */}
        <VoiceChatWidget 
          clientId="demo-public"
          isDemo={true}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-blue-600 rounded-lg">
                <MessageSquare className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">ChatBot Pro</h1>
                <p className="text-sm text-gray-500">Système de chatbot vocal + texte intégrable</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">
                Connecté en tant que <span className="font-medium">{user.prenom} {user.nom}</span>
              </span>
              <Button
                onClick={toggleDemoWidget}
                variant={showWidget && isDemoMode ? "secondary" : "default"}
                className="flex items-center space-x-2"
              >
                <Eye className="h-4 w-4" />
                <span>{showWidget && isDemoMode ? "Masquer" : "Aperçu"} Widget Vocal</span>
              </Button>
              <Button
                onClick={handleSignOut}
                variant="outline"
                className="flex items-center space-x-2"
              >
                <LogOut className="h-4 w-4" />
                <span>Déconnexion</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="admin" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 lg:w-96">
            <TabsTrigger value="admin" className="flex items-center space-x-2">
              <Settings className="h-4 w-4" />
              <span>Administration</span>
            </TabsTrigger>
            <TabsTrigger value="integration" className="flex items-center space-x-2">
              <MessageSquare className="h-4 w-4" />
              <span>Intégration</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="admin">
            <AdminDashboard onPreviewClient={handlePreviewClient} />
          </TabsContent>

          <TabsContent value="integration">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-4">Guide d'intégration - Widget Vocal</h2>
              <div className="space-y-4">
                <div className="bg-blue-50 rounded-lg p-4 mb-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Mic className="h-5 w-5 text-blue-600" />
                    <h3 className="font-medium text-blue-900">Nouvelle fonctionnalité vocale</h3>
                  </div>
                  <p className="text-blue-800 text-sm">
                    Le widget supporte maintenant les interactions vocales en plus du texte. 
                    Vos utilisateurs peuvent parler directement au chatbot !
                  </p>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-medium mb-2">1. Script d'intégration</h3>
                  <code className="block bg-gray-800 text-green-400 p-3 rounded text-sm">
                    {`<script src="https://votre-domaine.com/voice-chatbot.js"></script>
<script>
  VoiceChatBotPro.init({
    clientId: "votre-client-id"
  });
</script>`}
                  </code>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-medium mb-2">2. Configuration avancée</h3>
                  <code className="block bg-gray-800 text-green-400 p-3 rounded text-sm">
                    {`VoiceChatBotPro.init({
  clientId: "votre-client-id",
  position: "bottom-right", // bottom-left, top-right, top-left
  theme: "auto", // light, dark, auto
  voiceEnabled: true, // activer/désactiver le vocal
  autoStart: false // démarrage automatique du micro
});`}
                  </code>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-medium mb-2">3. Permissions requises</h3>
                  <ul className="text-sm text-gray-700 space-y-1 ml-4">
                    <li>• Accès au microphone pour les fonctionnalités vocales</li>
                    <li>• HTTPS requis pour l'utilisation du microphone</li>
                    <li>• Compatible avec Chrome, Firefox, Safari, Edge</li>
                  </ul>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>

      {/* Widget Demo */}
      {showWidget && (
        <VoiceChatWidget 
          clientId={previewClientId}
          isDemo={isDemoMode}
        />
      )}

      {/* Indicateur de mode */}
      {showWidget && (
        <div className="fixed bottom-24 right-6 z-40">
          <div className={`px-3 py-1 rounded-full text-xs text-white flex items-center space-x-1 ${
            isDemoMode ? 'bg-blue-500' : 'bg-green-500'
          }`}>
            <Mic className="h-3 w-3" />
            <span>{isDemoMode ? '🎭 Mode Démo Vocal' : `🎯 Client: ${previewClientId}`}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
