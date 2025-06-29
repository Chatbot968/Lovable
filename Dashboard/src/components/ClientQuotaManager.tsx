
import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import type { ClientConfig } from "@/types/client";

interface ClientQuotaManagerProps {
  client: ClientConfig;
  onClose: () => void;
}

interface QuotaData {
  used: number;
  limit: number;
  reset_day: number;
}

export const ClientQuotaManager = ({ client, onClose }: ClientQuotaManagerProps) => {
  const [quotaData, setQuotaData] = useState<QuotaData>({
    used: 0,
    limit: 100,
    reset_day: 1
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    loadQuotaData();
  }, [client.client_id]);

  const loadQuotaData = async () => {
    try {
      console.log('📊 Chargement quota pour:', client.client_id);
      
      const { data, error } = await supabase
        .from('client_quota')
        .select('used, limit, reset_day, tokens_used, tokens_max')
        .eq('client_id', client.client_id)
        .single();

      if (error && error.code !== 'PGRST116') { // PGRST116 = pas de résultat
        console.error('❌ Erreur chargement quota:', error);
        throw error;
      }

      if (data) {
        console.log('✅ Quota chargé:', data);
        setQuotaData({
          used: data.used || data.tokens_used || 0,
          limit: data.limit || data.tokens_max || 100,
          reset_day: data.reset_day || 1
        });
      } else {
        console.log('⚠️ Pas de quota existant, création...');
        // Créer un quota par défaut
        await createDefaultQuota();
      }
    } catch (error) {
      console.error('❌ Erreur lors du chargement du quota:', error);
      toast({
        title: "Erreur",
        description: "Impossible de charger les données de quota",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const createDefaultQuota = async () => {
    try {
      const { error } = await supabase
        .from('client_quota')
        .insert({
          client_id: client.client_id,
          used: 0,
          limit: 100,
          tokens_used: 0,
          tokens_max: 100,
          reset_day: 1
        });

      if (error) throw error;
      
      console.log('✅ Quota par défaut créé');
    } catch (error) {
      console.error('❌ Erreur création quota par défaut:', error);
    }
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      console.log('💾 Sauvegarde quota:', quotaData);
      
      const { error } = await supabase
        .from('client_quota')
        .upsert({
          client_id: client.client_id,
          used: quotaData.used,
          limit: quotaData.limit,
          tokens_used: quotaData.used, // Maintenir la compatibilité avec l'ancienne colonne
          tokens_max: quotaData.limit, // Maintenir la compatibilité avec l'ancienne colonne
          reset_day: quotaData.reset_day,
          updated_at: new Date().toISOString()
        });

      if (error) throw error;

      console.log('✅ Quota sauvegardé');
      toast({
        title: "Succès",
        description: "Quota mis à jour avec succès",
      });
      
      onClose();
    } catch (error) {
      console.error('❌ Erreur sauvegarde quota:', error);
      toast({
        title: "Erreur",
        description: "Impossible de sauvegarder le quota",
        variant: "destructive",
      });
    } finally {
      setSaving(false);
    }
  };

  const handleReset = async () => {
    setSaving(true);
    try {
      console.log('🔄 Reset quota pour:', client.client_id);
      
      const { error } = await supabase
        .from('client_quota')
        .update({
          used: 0,
          tokens_used: 0, // Maintenir la compatibilité avec l'ancienne colonne
          updated_at: new Date().toISOString()
        })
        .eq('client_id', client.client_id);

      if (error) throw error;

      setQuotaData(prev => ({ ...prev, used: 0 }));
      
      console.log('✅ Quota reset');
      toast({
        title: "Succès",
        description: "Quota remis à zéro",
      });
    } catch (error) {
      console.error('❌ Erreur reset quota:', error);
      toast({
        title: "Erreur",
        description: "Impossible de remettre le quota à zéro",
        variant: "destructive",
      });
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <Dialog open={true} onOpenChange={onClose}>
        <DialogContent>
          <div className="text-center">Chargement...</div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Gestion du quota - {client.client_id}</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <div>
            <Label htmlFor="used">Utilisation actuelle</Label>
            <Input
              id="used"
              type="number"
              value={quotaData.used}
              onChange={(e) => setQuotaData(prev => ({ 
                ...prev, 
                used: parseInt(e.target.value) || 0 
              }))}
              min="0"
            />
          </div>

          <div>
            <Label htmlFor="limit">Limite</Label>
            <Input
              id="limit"
              type="number"
              value={quotaData.limit}
              onChange={(e) => setQuotaData(prev => ({ 
                ...prev, 
                limit: parseInt(e.target.value) || 100 
              }))}
              min="1"
            />
          </div>

          <div>
            <Label htmlFor="reset_day">Jour de reset (1-28)</Label>
            <Input
              id="reset_day"
              type="number"
              value={quotaData.reset_day}
              onChange={(e) => setQuotaData(prev => ({ 
                ...prev, 
                reset_day: parseInt(e.target.value) || 1 
              }))}
              min="1"
              max="28"
            />
          </div>

          <div className="bg-gray-50 p-3 rounded">
            <div className="text-sm text-gray-600">
              <div>Utilisation: {quotaData.used} / {quotaData.limit}</div>
              <div>Pourcentage: {Math.round((quotaData.used / quotaData.limit) * 100)}%</div>
            </div>
          </div>

          <div className="flex justify-between space-x-2 pt-4">
            <Button 
              variant="outline" 
              onClick={handleReset}
              disabled={saving}
            >
              Reset à 0
            </Button>
            <div className="space-x-2">
              <Button variant="outline" onClick={onClose}>
                Annuler
              </Button>
              <Button onClick={handleSave} disabled={saving}>
                {saving ? "Sauvegarde..." : "Sauvegarder"}
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
