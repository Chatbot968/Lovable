
import { ClientConfig } from "@/types/client";

interface ChatbotPreviewProps {
  formData: Partial<ClientConfig>;
}

export const ChatbotPreview = ({ formData }: ChatbotPreviewProps) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">📱 Aperçu</h3>
      <div className="border rounded-lg p-4 bg-gray-50">
        <div 
          className="w-full h-12 rounded-t-lg flex items-center px-4 text-white font-medium"
          style={{ backgroundColor: formData.banner_color }}
        >
          {formData.logo_url && (
            <img 
              src={formData.logo_url} 
              alt="Logo" 
              className="w-6 h-6 mr-2 rounded object-contain" 
            />
          )}
          💬 {formData.client_id || "Aperçu du chatbot"}
        </div>
        <div 
          className="h-32 p-4 rounded-b-lg border"
          style={{ backgroundColor: formData.chat_background_color }}
        >
          <div 
            className="inline-block p-2 rounded-lg text-sm max-w-xs"
            style={{ 
              backgroundColor: '#f3f4f6',
              color: formData.text_color 
            }}
          >
            {formData.description}
          </div>
          <div 
            className="inline-block p-2 rounded-lg text-sm mt-2 ml-auto block text-right"
            style={{ 
              backgroundColor: formData.color_primary,
              color: '#ffffff'
            }}
          >
            Message utilisateur
          </div>
        </div>
      </div>
    </div>
  );
};
