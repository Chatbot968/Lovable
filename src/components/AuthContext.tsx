
import React, { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface AuthUser {
  id: string;
  email: string;
  nom: string;
  prenom: string;
  role: string;
  question_1: string;
  question_2: string;
}

interface AuthContextType {
  user: AuthUser | null;
  loading: boolean;
  signIn: (email: string, question1: string, question2: string) => Promise<{ error?: any }>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    // Vérifier si l'utilisateur est déjà connecté (localStorage)
    const storedUser = localStorage.getItem('admin_user');
    if (storedUser) {
      try {
        const userData = JSON.parse(storedUser);
        setUser(userData);
        console.log('✅ Utilisateur restauré depuis localStorage:', userData);
      } catch (error) {
        console.error('❌ Erreur parsing localStorage:', error);
        localStorage.removeItem('admin_user');
      }
    }
    setLoading(false);
  }, []);

  const signIn = async (email: string, question1: string, question2: string) => {
    try {
      setLoading(true);
      console.log('🔐 Tentative de connexion pour:', email);
      
      // Appeler la fonction de vérification
      const { data, error } = await supabase.rpc('verify_admin_auth', {
        p_email: email,
        p_question_1: question1,
        p_question_2: question2
      });

      console.log('🔍 Résultat vérification:', { data, error });

      if (error) {
        console.error('❌ Erreur RPC:', error);
        toast({
          title: "Erreur de connexion",
          description: "Erreur technique lors de la vérification",
          variant: "destructive",
        });
        return { error };
      }

      if (!data) {
        console.log('❌ Authentification échouée - données incorrectes');
        toast({
          title: "Accès refusé",
          description: "Email ou réponses aux questions incorrects",
          variant: "destructive",
        });
        return { error: { message: "Informations incorrectes" } };
      }

      // Récupérer les informations de l'admin
      const { data: adminData, error: adminError } = await supabase
        .from('admin_authenticated')
        .select('*')
        .eq('email', email)
        .single();

      console.log('👤 Données admin récupérées:', adminData);

      if (adminError || !adminData) {
        console.error('❌ Erreur récupération admin:', adminError);
        toast({
          title: "Erreur",
          description: "Impossible de récupérer les informations admin",
          variant: "destructive",
        });
        return { error: adminError };
      }

      // Sauvegarder la session avec TOUTES les données nécessaires
      const userData: AuthUser = {
        id: adminData.id,
        email: adminData.email,
        nom: adminData.nom,
        prenom: adminData.prenom,
        role: 'admin',
        question_1: question1, // 🔥 CRUCIAL : stocker les réponses pour les vérifications ultérieures
        question_2: question2
      };

      console.log('✅ Données utilisateur complètes:', userData);
      setUser(userData);
      localStorage.setItem('admin_user', JSON.stringify(userData));

      toast({
        title: "Connexion réussie",
        description: `Bienvenue ${adminData.prenom} ${adminData.nom}`,
      });

      return { error: null };
    } catch (error) {
      console.error('❌ Erreur sign in:', error);
      toast({
        title: "Erreur de connexion",
        description: "Une erreur inattendue s'est produite",
        variant: "destructive",
      });
      return { error };
    } finally {
      setLoading(false);
    }
  };

  const signOut = async () => {
    try {
      console.log('🚪 Déconnexion en cours...');
      setUser(null);
      localStorage.removeItem('admin_user');
      
      toast({
        title: "Déconnexion réussie",
        description: "Vous avez été déconnecté.",
      });
    } catch (error) {
      console.error('❌ Erreur sign out:', error);
    }
  };

  const value = {
    user,
    loading,
    signIn,
    signOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
