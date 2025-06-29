
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ClientConfig } from "@/types/client";

interface ClientConfigFormProps {
  formData: Partial<ClientConfig>;
  onInputChange: (field: keyof ClientConfig, value: string) => void;
  showClientIdWarning: boolean;
}

export const ClientConfigForm = ({ formData, onInputChange, showClientIdWarning }: ClientConfigFormProps) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Informations générales</h3>
      
      <div>
        <Label htmlFor="client_id">Client ID</Label>
        <Input
          id="client_id"
          value={formData.client_id}
          onChange={(e) => onInputChange("client_id", e.target.value)}
          placeholder="ex: mon-restaurant"
          required
          className={showClientIdWarning ? "border-yellow-300 bg-yellow-50" : ""}
        />
      </div>

      <div>
        <Label htmlFor="webhook_url">URL Webhook</Label>
        <Input
          id="webhook_url"
          type="url"
          value={formData.webhook_url}
          onChange={(e) => onInputChange("webhook_url", e.target.value)}
          placeholder="https://votre-api.com/webhook"
          required
        />
      </div>

      <div>
        <Label htmlFor="logo_url">URL Logo (optionnel)</Label>
        <Input
          id="logo_url"
          type="url"
          value={formData.logo_url}
          onChange={(e) => onInputChange("logo_url", e.target.value)}
          placeholder="https://example.com/logo.png"
        />
      </div>

      <div>
        <Label htmlFor="description">Description du bot</Label>
        <Textarea
          id="description"
          value={formData.description}
          onChange={(e) => onInputChange("description", e.target.value)}
          placeholder="Message d'accueil du bot"
          rows={3}
        />
      </div>
    </div>
  );
};
