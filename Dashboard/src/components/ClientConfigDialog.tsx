import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { ClientConfig } from "@/types/client";
import { ClientConfigForm } from "./client-config/ClientConfigForm";
import { ColorCustomization } from "./client-config/ColorCustomization";
import { ChatbotPreview } from "./client-config/ChatbotPreview";
import { ClientIdWarning } from "./client-config/ClientIdWarning";
import { API_CONFIG, buildApiUrl } from "../config/api";

interface ClientConfigDialogProps {
  client: ClientConfig | null;
  onClientSaved: () => Promise<void>;
  onClose: () => void;
}

export const ClientConfigDialog = ({ client, onClientSaved, onClose }: ClientConfigDialogProps) => {
  const [formData, setFormData] = useState<ClientConfig>({
    client_id: "",
    logo_url: "",
    color_primary: "#3B82F6",
    webhook_url: "",
    bot_description: "Bonjour, comment puis-je vous aider ?",
    banner_color: "#3B82F6",
    chat_background_color: "#ffffff",
    text_color: "#000000",
    description: "Bonjour, comment puis-je vous aider ?",
    is_active: true
  });
  const [originalClientId, setOriginalClientId] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [showClientIdWarning, setShowClientIdWarning] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    if (client) {
      setFormData({
        ...client,
        color_primary: client.color_primary || "#3B82F6",
        banner_color: client.banner_color || "#3B82F6",
        chat_background_color: client.chat_background_color || "#ffffff",
        text_color: client.text_color || "#000000",
        description: client.description || client.bot_description || "Bonjour, comment puis-je vous aider ?",
        is_active: client.is_active !== undefined ? client.is_active : true
      });
      setOriginalClientId(client.client_id);
      setShowClientIdWarning(false);
    } else {
      setFormData({
        client_id: "",
        logo_url: "",
        color_primary: "#3B82F6",
        webhook_url: "",
        bot_description: "Bonjour, comment puis-je vous aider ?",
        banner_color: "#3B82F6",
        chat_background_color: "#ffffff",
        text_color: "#000000",
        description: "Bonjour, comment puis-je vous aider ?",
        is_active: true
      });
      setOriginalClientId("");
      setShowClientIdWarning(false);
    }
  }, [client]);

  const handleInputChange = (field: keyof ClientConfig, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Afficher le warning si on modifie le client_id
    if (field === "client_id" && client && value !== originalClientId) {
      setShowClientIdWarning(true);
    } else if (field === "client_id" && value === originalClientId) {
      setShowClientIdWarning(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (!formData.client_id || !formData.webhook_url) {
        toast({
          title: "Champs requis manquants",
          description: "Le client_id et l'URL webhook sont obligatoires",
          variant: "destructive",
        });
        return;
      }

      if (client) {
        // Update
        await fetch(buildApiUrl(`${API_CONFIG.ENDPOINTS.CONFIGS}/${formData.client_id}`), {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData)
        });
      } else {
        // Create
        await fetch(buildApiUrl(API_CONFIG.ENDPOINTS.CONFIGS), {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData)
        });
      }

      await onClientSaved();
      onClose();
    } catch (error) {
      console.error('❌ Erreur de sauvegarde:', error);
      toast({
        title: "Erreur",
        description: "Erreur lors de la sauvegarde. Vérifiez la console pour plus de détails.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>
            {client ? "Modifier le client" : "Nouveau client"}
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          <ClientIdWarning showWarning={showClientIdWarning} />
          
          <ClientConfigForm 
            formData={formData}
            onInputChange={handleInputChange}
            showClientIdWarning={showClientIdWarning}
          />
          
          <ColorCustomization 
            formData={formData}
            onInputChange={handleInputChange}
          />
          
          <ChatbotPreview formData={formData} />

          <div className="flex justify-end space-x-2 pt-4">
            <Button type="button" variant="outline" onClick={onClose}>
              Annuler
            </Button>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Sauvegarde..." : "Sauvegarder"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ClientConfigDialog;
