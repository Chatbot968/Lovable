import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [question1, setQuestion1] = useState('');
  const [question2, setQuestion2] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.match(/^[^@]+@[^@]+\.[^@]+$/)) {
      setError('Veuillez entrer un email valide.');
      return;
    }
    if (!['silvacorreiaruben@gmail.com', 'lamperim.diego47@gmail.com'].includes(email.toLowerCase())) {
      setError('Email non autorisé.');
      return;
    }
    if (!['unico', 'bons'].includes(question1.trim().toLowerCase())) {
      setError("Nom d'un chien incorrect.");
      return;
    }
    if (question2.trim().toLowerCase() !== 'mathys') {
      setError('Meilleur pote en commun incorrect.');
      return;
    }
    localStorage.setItem('isLoggedIn', 'true');
    navigate('/dashboard');
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #e0e7ff 0%, #f8fafc 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{
        background: 'white',
        borderRadius: 12,
        boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
        padding: '2.5rem 2rem',
        minWidth: 340,
        maxWidth: 380,
        width: '100%',
        textAlign: 'center'
      }}>
        <div style={{
          background: '#2563eb',
          color: 'white',
          width: 56,
          height: 56,
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 1.5rem auto',
          fontSize: 28
        }}>
          🔒
        </div>
        <h1 style={{ fontSize: 26, fontWeight: 700, marginBottom: 8 }}>Connexion Admin</h1>
        <p style={{ color: '#64748b', marginBottom: 24 }}>Accès réservé à l'administration du dashboard ChatBot Pro.</p>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email admin"
            value={email}
            onChange={e => { setEmail(e.target.value); setError(''); }}
            required
            style={{
              width: '100%',
              padding: '12px 14px',
              fontSize: 16,
              borderRadius: 6,
              border: '1px solid #d1d5db',
              marginBottom: 16
            }}
          />
          <input
            type="text"
            placeholder="Nom d'un chien"
            value={question1}
            onChange={e => { setQuestion1(e.target.value); setError(''); }}
            required
            style={{
              width: '100%',
              padding: '12px 14px',
              fontSize: 16,
              borderRadius: 6,
              border: '1px solid #d1d5db',
              marginBottom: 16
            }}
          />
          <input
            type="text"
            placeholder="Meilleur pote en commun"
            value={question2}
            onChange={e => { setQuestion2(e.target.value); setError(''); }}
            required
            style={{
              width: '100%',
              padding: '12px 14px',
              fontSize: 16,
              borderRadius: 6,
              border: '1px solid #d1d5db',
              marginBottom: 16
            }}
          />
          {error && <div style={{ color: '#dc2626', marginBottom: 12, fontSize: 14 }}>{error}</div>}
          <button
            type="submit"
            style={{
              width: '100%',
              padding: '12px 0',
              fontSize: 18,
              background: '#2563eb',
              color: 'white',
              border: 'none',
              borderRadius: 6,
              fontWeight: 600,
              cursor: 'pointer',
              marginBottom: 8
            }}
          >
            Se connecter
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login; 