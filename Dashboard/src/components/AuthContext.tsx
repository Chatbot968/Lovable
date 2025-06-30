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
      } catch (error) {
        localStorage.removeItem('admin_user');
      }
    }
    setLoading(false);
  }, []);

  const signIn = async (email: string, question1: string, question2: string) => {
    // Vérification stricte côté front
    const allowedEmails = [
      'silvacorreiaruben@gmail.com',
      'lamperim.diego47@gmail.com',
    ];
    const allowedDogs = ['unico', 'bons'];
    const allowedPorte = ['mathys'];
    if (!allowedEmails.includes(email.toLowerCase())) {
      toast({
        title: "Accès refusé",
        description: "Email non autorisé.",
        variant: "destructive",
      });
      return { error: { message: "Email non autorisé" } };
    }
    if (!allowedDogs.includes(question1.trim().toLowerCase())) {
      toast({
        title: "Accès refusé",
        description: "Nom de chien incorrect.",
        variant: "destructive",
      });
      return { error: { message: "Nom de chien incorrect" } };
    }
    if (!allowedPorte.includes(question2.trim().toLowerCase())) {
      toast({
        title: "Accès refusé",
        description: "Réponse au meilleur pote en commun incorrecte.",
        variant: "destructive",
      });
      return { error: { message: "Réponse au meilleur pote en commun incorrecte" } };
    }
    try {
      setLoading(true);
      
      // Appeler la fonction de vérification
      const { data, error } = await supabase.rpc('verify_admin_auth', {
        p_email: email,
        p_question_1: question1,
        p_question_2: question2
      });

      if (error) {
        toast({
          title: "Erreur de connexion",
          description: "Erreur technique lors de la vérification",
          variant: "destructive",
        });
        return { error };
      }

      if (!data) {
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

      if (adminError || !adminData) {
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

      setUser(userData);
      localStorage.setItem('admin_user', JSON.stringify(userData));

      toast({
        title: "Connexion réussie",
        description: `Bienvenue ${adminData.prenom} ${adminData.nom}`,
      });

      return { error: null };
    } catch (error) {
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
      setUser(null);
      localStorage.removeItem('admin_user');
      
      toast({
        title: "Déconnexion réussie",
        description: "Vous avez été déconnecté.",
      });
    } catch (error) {
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
