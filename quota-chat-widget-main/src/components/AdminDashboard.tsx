
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ClientConfigDialog } from "@/components/ClientConfigDialog";
import { ClientQuotaManager } from "@/components/ClientQuotaManager";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/components/AuthContext";
import { Eye, Settings, Plus, BarChart3 } from "lucide-react";
import type { ClientConfig } from "@/types/client";

interface AdminDashboardProps {
  onPreviewClient: (clientId: string) => void;
}

export const AdminDashboard = ({ onPreviewClient }: AdminDashboardProps) => {
  const [clients, setClients] = useState<ClientConfig[]>([]);
  const [selectedClient, setSelectedClient] = useState<ClientConfig | null>(null);
  const [showConfigDialog, setShowConfigDialog] = useState(false);
  const [showQuotaManager, setShowQuotaManager] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const { toast } = useToast();
  const { user } = useAuth();

  // Vérifier les droits admin au chargement
  useEffect(() => {
    const checkAdminRights = async () => {
      console.log('🔍 Vérification des droits admin pour:', user);
      
      if (!user?.email) {
        console.log('❌ Pas d\'email utilisateur');
        setIsAdmin(false);
        return;
      }

      // Si l'utilisateur a un rôle admin dans ses données, on le considère comme admin
      if (user.role === 'admin') {
        console.log('✅ Utilisateur détecté comme admin via le rôle');
        setIsAdmin(true);
        return;
      }

      // Sinon, vérification via RPC (si on a les questions)
      if (user.question_1 && user.question_2) {
        try {
          console.log('🔐 Vérification RPC avec questions...');
          const { data, error } = await supabase
            .rpc('verify_admin_auth', { 
              p_email: user.email,
              p_question_1: user.question_1,
              p_question_2: user.question_2
            });

          if (error) {
            console.error('❌ Erreur vérification admin RPC:', error);
            setIsAdmin(false);
          } else {
            console.log('✅ Résultat vérification RPC:', data);
            setIsAdmin(Boolean(data));
          }
        } catch (error) {
          console.error('❌ Erreur lors de la vérification admin:', error);
          setIsAdmin(false);
        }
      } else {
        console.log('❌ Questions manquantes pour la vérification RPC');
        setIsAdmin(false);
      }
    };

    checkAdminRights();
  }, [user]);

  const loadClients = async () => {
    if (!isAdmin) {
      console.log('⚠️ Pas admin, pas de chargement des clients');
      return;
    }

    try {
      console.log('📊 Chargement des clients...');
      const { data, error } = await supabase
        .from('client_config')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('❌ Erreur chargement clients:', error);
        throw error;
      }
      
      console.log('✅ Clients chargés:', data);
      setClients(data || []);
    } catch (error) {
      console.error('❌ Erreur chargement clients:', error);
      toast({
        title: "Erreur",
        description: "Impossible de charger les clients",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log('🔄 Effect loadClients, isAdmin:', isAdmin);
    if (isAdmin) {
      loadClients();
    } else {
      setLoading(false);
    }
  }, [isAdmin]);

  const handleEditClient = (client: ClientConfig) => {
    console.log('✏️ Édition client:', client.client_id);
    setSelectedClient(client);
    setShowConfigDialog(true);
  };

  const handleCreateClient = () => {
    console.log('➕ Création nouveau client');
    setSelectedClient(null);
    setShowConfigDialog(true);
  };

  const handleManageQuota = (client: ClientConfig) => {
    console.log('📊 Gestion quota pour:', client.client_id);
    setSelectedClient(client);
    setShowQuotaManager(true);
  };

  const handlePreviewClient = (clientId: string) => {
    console.log(`🎯 Aperçu demandé pour client: ${clientId}`);
    onPreviewClient(clientId);
  };

  const handleDialogClose = () => {
    console.log('🚪 Fermeture dialog');
    setShowConfigDialog(false);
    setSelectedClient(null);
  };

  const handleQuotaClose = () => {
    console.log('🚪 Fermeture quota manager');
    setShowQuotaManager(false);
    setSelectedClient(null);
  };

  if (!user) {
    console.log('⚠️ Pas d\'utilisateur connecté');
    return (
      <Card>
        <CardContent className="p-6">
          <div className="text-center text-red-600">
            <h2 className="text-xl font-semibold mb-2">Non connecté</h2>
            <p>Vous devez être connecté pour accéder à cette page.</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (!isAdmin) {
    console.log('⚠️ Utilisateur connecté mais pas admin');
    return (
      <Card>
        <CardContent className="p-6">
          <div className="text-center text-red-600">
            <h2 className="text-xl font-semibold mb-2">Accès refusé</h2>
            <p>Vous n'avez pas les droits administrateur pour accéder à cette page.</p>
            <div className="mt-4 text-sm text-gray-600">
              <p>Utilisateur connecté: {user.email}</p>
              <p>Rôle: {user.role}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (loading) {
    console.log('⏳ Chargement en cours...');
    return (
      <Card>
        <CardContent className="p-6">
          <div className="text-center">Chargement des données...</div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Gestion des Clients ChatBot</CardTitle>
            <Button onClick={handleCreateClient} className="flex items-center space-x-2">
              <Plus className="h-4 w-4" />
              <span>Nouveau Client</span>
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            {clients.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                Aucun client configuré. Créez votre premier client pour commencer.
              </div>
            ) : (
              clients.map((client) => (
                <div key={client.client_id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3">
                        <h3 className="font-semibold text-lg">{client.client_id}</h3>
                        <Badge variant="secondary">Actif</Badge>
                      </div>
                      <p className="text-gray-600 mt-1">{client.bot_description}</p>
                      <div className="mt-2 text-sm text-gray-500">
                        <span>Webhook: </span>
                        <code className="bg-gray-100 px-2 py-1 rounded text-xs">
                          {client.webhook_url}
                        </code>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        onClick={() => handlePreviewClient(client.client_id)}
                        className="flex items-center space-x-1"
                      >
                        <Eye className="h-4 w-4" />
                        <span>Aperçu</span>
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        onClick={() => handleManageQuota(client)}
                        className="flex items-center space-x-1"
                      >
                        <BarChart3 className="h-4 w-4" />
                        <span>Quota</span>
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        onClick={() => handleEditClient(client)}
                        className="flex items-center space-x-1"
                      >
                        <Settings className="h-4 w-4" />
                        <span>Modifier</span>
                      </Button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </CardContent>
      </Card>

      {/* Dialogs */}
      {showConfigDialog && (
        <ClientConfigDialog
          client={selectedClient}
          onClientSaved={loadClients}
          onClose={handleDialogClose}
        />
      )}

      {showQuotaManager && selectedClient && (
        <ClientQuotaManager
          client={selectedClient}
          onClose={handleQuotaClose}
        />
      )}
    </div>
  );
};
