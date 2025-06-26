
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { ClientConfig } from "@/types/client";

interface ColorCustomizationProps {
  formData: Partial<ClientConfig>;
  onInputChange: (field: keyof ClientConfig, value: string) => void;
}

export const ColorCustomization = ({ formData, onInputChange }: ColorCustomizationProps) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">🎨 Personnalisation des couleurs</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="banner_color">Couleur de la bannière</Label>
          <div className="flex items-center space-x-2">
            <Input
              id="banner_color"
              type="color"
              value={formData.banner_color}
              onChange={(e) => onInputChange("banner_color", e.target.value)}
              className="w-20 h-10 p-1 border rounded"
            />
            <Input
              value={formData.banner_color}
              onChange={(e) => onInputChange("banner_color", e.target.value)}
              placeholder="#3B82F6"
              className="flex-1"
            />
          </div>
        </div>

        <div>
          <Label htmlFor="color_primary">Couleur primaire (boutons)</Label>
          <div className="flex items-center space-x-2">
            <Input
              id="color_primary"
              type="color"
              value={formData.color_primary}
              onChange={(e) => onInputChange("color_primary", e.target.value)}
              className="w-20 h-10 p-1 border rounded"
            />
            <Input
              value={formData.color_primary}
              onChange={(e) => onInputChange("color_primary", e.target.value)}
              placeholder="#3B82F6"
              className="flex-1"
            />
          </div>
        </div>

        <div>
          <Label htmlFor="chat_background_color">Fond de conversation</Label>
          <div className="flex items-center space-x-2">
            <Input
              id="chat_background_color"
              type="color"
              value={formData.chat_background_color}
              onChange={(e) => onInputChange("chat_background_color", e.target.value)}
              className="w-20 h-10 p-1 border rounded"
            />
            <Input
              value={formData.chat_background_color}
              onChange={(e) => onInputChange("chat_background_color", e.target.value)}
              placeholder="#ffffff"
              className="flex-1"
            />
          </div>
        </div>

        <div>
          <Label htmlFor="text_color">Couleur du texte</Label>
          <div className="flex items-center space-x-2">
            <Input
              id="text_color"
              type="color"
              value={formData.text_color}
              onChange={(e) => onInputChange("text_color", e.target.value)}
              className="w-20 h-10 p-1 border rounded"
            />
            <Input
              value={formData.text_color}
              onChange={(e) => onInputChange("text_color", e.target.value)}
              placeholder="#000000"
              className="flex-1"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
