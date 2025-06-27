
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { ClientConfig } from "@/types/client";
import { ClientConfigForm } from "./client-config/ClientConfigForm";
import { ColorCustomization } from "./client-config/ColorCustomization";
import { ChatbotPreview } from "./client-config/ChatbotPreview";
import { ClientIdWarning } from "./client-config/ClientIdWarning";

interface ClientConfigDialogProps {
  client: ClientConfig | null;
  onClientSaved: () => Promise<void>;
  onClose: () => void;
}

export const ClientConfigDialog = ({ client, onClientSaved, onClose }: ClientConfigDialogProps) => {
  const [formData, setFormData] = useState<Partial<ClientConfig>>({
    client_id: "",
    logo_url: "",
    color_primary: "#3B82F6",
    webhook_url: "",
    bot_description: "Bonjour, comment puis-je vous aider ?",
    banner_color: "#3B82F6",
    chat_background_color: "#ffffff",
    text_color: "#000000",
    description: "Bonjour, comment puis-je vous aider ?"
  });
  const [originalClientId, setOriginalClientId] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [showClientIdWarning, setShowClientIdWarning] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    if (client) {
      setFormData({
        client_id: client.client_id,
        logo_url: client.logo_url || "",
        color_primary: client.color_primary || "#3B82F6",
        webhook_url: client.webhook_url || "",
        bot_description: client.bot_description || client.description || "Bonjour, comment puis-je vous aider ?",
        banner_color: client.banner_color || "#3B82F6",
        chat_background_color: client.chat_background_color || "#ffffff",
        text_color: client.text_color || "#000000",
        description: client.description || client.bot_description || "Bonjour, comment puis-je vous aider ?"
      });
      setOriginalClientId(client.client_id);
      setShowClientIdWarning(false);
    } else {
      // Reset form for new client
      setFormData({
        client_id: "",
        logo_url: "",
        color_primary: "#3B82F6",
        webhook_url: "",
        bot_description: "Bonjour, comment puis-je vous aider ?",
        banner_color: "#3B82F6",
        chat_background_color: "#ffffff",
        text_color: "#000000",
        description: "Bonjour, comment puis-je vous aider ?"
      });
      setOriginalClientId("");
      setShowClientIdWarning(false);
    }
  }, [client]);

  const handleInputChange = (field: keyof ClientConfig, value: string) => {
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
      // Validate required fields
      if (!formData.client_id || !formData.webhook_url) {
        toast({
          title: "Champs requis manquants",
          description: "Le client_id et l'URL webhook sont obligatoires",
          variant: "destructive",
        });
        return;
      }

      // Prepare complete data object for database operations
      const completeData: Omit<ClientConfig, 'created_at' | 'user_id'> = {
        client_id: formData.client_id,
        logo_url: formData.logo_url || "",
        color_primary: formData.color_primary || "#3B82F6",
        webhook_url: formData.webhook_url,
        bot_description: formData.bot_description || "Bonjour, comment puis-je vous aider ?",
        banner_color: formData.banner_color || "#3B82F6",
        chat_background_color: formData.chat_background_color || "#ffffff",
        text_color: formData.text_color || "#000000",
        description: formData.description || "Bonjour, comment puis-je vous aider ?"
      };

      // Cas spécial : modification du client_id (utiliser EXCLUSIVEMENT la fonction RPC)
      if (client && originalClientId !== formData.client_id) {
        console.log(`🔄 Modification sécurisée du client_id: ${originalClientId} -> ${formData.client_id}`);
        
        const { data, error } = await supabase.rpc('update_client_id', {
          old_client_id: originalClientId,
          new_client_id: formData.client_id
        });

        if (error) {
          console.error('❌ Erreur RPC update_client_id:', error);
          toast({
            title: "Erreur de modification du client_id",
            description: `Impossible de modifier le client_id: ${error.message}`,
            variant: "destructive",
          });
          return;
        }

        console.log('✅ Client_id modifié avec succès via RPC');
        toast({
          title: "Client ID modifié",
          description: `Le client_id a été modifié avec succès de ${originalClientId} vers ${formData.client_id}`,
        });

        // Mettre à jour les autres champs après la modification du client_id
        const updateData = {
          logo_url: completeData.logo_url,
          color_primary: completeData.color_primary,
          webhook_url: completeData.webhook_url,
          bot_description: completeData.bot_description,
          banner_color: completeData.banner_color,
          chat_background_color: completeData.chat_background_color,
          text_color: completeData.text_color,
          description: completeData.description
        };

        const { error: updateError } = await supabase
          .from('client_config')
          .update(updateData)
          .eq('client_id', formData.client_id);

        if (updateError) {
          console.error('❌ Erreur mise à jour config:', updateError);
          toast({
            title: "Erreur",
            description: "Client_id modifié mais erreur lors de la mise à jour des autres champs",
            variant: "destructive",
          });
          return;
        }
      } else {
        // Cas normal : création ou modification sans changement de client_id
        if (client) {
          // Mise à jour d'un client existant
          const { error } = await supabase
            .from('client_config')
            .update(completeData)
            .eq('client_id', client.client_id);

          if (error) throw error;
        } else {
          // Création d'un nouveau client
          const { error } = await supabase
            .from('client_config')
            .insert(completeData);

          if (error) throw error;
        }
        
        toast({
          title: "Succès",
          description: client ? "Client modifié avec succès" : "Nouveau client créé avec succès",
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
