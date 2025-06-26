
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/components/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { MessageSquare, Shield, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Auth = () => {
  const navigate = useNavigate();
  const { signIn, user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  // Redirect if already authenticated
  React.useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);

  const [loginForm, setLoginForm] = useState({
    email: '',
    question1: '',
    question2: '',
  });

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const { error } = await signIn(loginForm.email, loginForm.question1, loginForm.question2);
      if (!error) {
        navigate('/');
      }
    } catch (error) {
      console.error('Erreur de connexion:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <div className="p-2 bg-blue-600 rounded-lg">
              <Shield className="h-6 w-6 text-white" />
            </div>
          </div>
          <CardTitle className="text-2xl">Dashboard Admin</CardTitle>
          <CardDescription>
            Accès réservé aux administrateurs autorisés
          </CardDescription>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mt-4">
            <div className="flex items-center space-x-2">
              <MessageSquare className="h-4 w-4 text-amber-600" />
              <p className="text-sm text-amber-800">
                <strong>ChatBot Pro</strong> - Interface de gestion
              </p>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="login-email">Email administrateur</Label>
              <Input
                id="login-email"
                type="email"
                placeholder="admin@votredomaine.com"
                value={loginForm.email}
                onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
                required
                disabled={isLoading}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="question1">Quel est ton chien préféré ?</Label>
              <Input
                id="question1"
                type="text"
                placeholder="Votre réponse..."
                value={loginForm.question1}
                onChange={(e) => setLoginForm({ ...loginForm, question1: e.target.value })}
                required
                disabled={isLoading}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="question2">Quel est ton chat préféré ?</Label>
              <Input
                id="question2"
                type="text"
                placeholder="Votre réponse..."
                value={loginForm.question2}
                onChange={(e) => setLoginForm({ ...loginForm, question2: e.target.value })}
                required
                disabled={isLoading}
              />
            </div>
            
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? 'Connexion...' : 'Accéder au dashboard'}
            </Button>
          </form>
          
          <div className="text-center pt-4 border-t">
            <Link to="/">
              <Button variant="outline" className="flex items-center space-x-2 w-full">
                <ArrowLeft className="h-4 w-4" />
                <span>Retour à l'accueil</span>
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Auth;
