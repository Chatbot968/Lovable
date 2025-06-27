
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertTriangle } from "lucide-react";

interface ClientIdWarningProps {
  showWarning: boolean;
}

export const ClientIdWarning = ({ showWarning }: ClientIdWarningProps) => {
  if (!showWarning) return null;

  return (
    <Alert className="border-yellow-200 bg-yellow-50">
      <AlertTriangle className="h-4 w-4 text-yellow-600" />
      <AlertDescription className="text-yellow-800">
        ⚠️ <strong>Attention :</strong> La modification du client_id affectera toutes les données associées 
        (quotas, historiques). Cette opération utilise une fonction sécurisée pour éviter les erreurs de contraintes.
      </AlertDescription>
    </Alert>
  );
};
