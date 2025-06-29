import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div style={{
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #e0e7ff 0%, #f8fafc 100%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  }}>
    <div style={{
      background: 'white',
      borderRadius: 16,
      boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
      padding: '2.5rem 2rem 2rem 2rem',
      minWidth: 340,
      maxWidth: 480,
      width: '100%',
      textAlign: 'center'
    }}>
      <div style={{
        background: '#2563eb',
        color: 'white',
        width: 64,
        height: 64,
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto 1.5rem auto',
        fontSize: 32
      }}>
        🤖
      </div>
      <h1 style={{ fontSize: 32, fontWeight: 800, marginBottom: 8 }}>Bienvenue sur le Dashboard ChatBot Pro</h1>
      <p style={{ color: '#64748b', marginBottom: 24, fontSize: 18 }}>
        Administrez vos chatbots et quotas ici.
      </p>
      <Link to="/login">
        <button style={{
          marginTop: 10,
          padding: '12px 32px',
          fontSize: 20,
          background: '#2563eb',
          color: 'white',
          border: 'none',
          borderRadius: 8,
          fontWeight: 700,
          cursor: 'pointer',
          boxShadow: '0 2px 8px rgba(37,99,235,0.08)'
        }}>
          Connexion Admin
        </button>
      </Link>
      <div style={{
        marginTop: 40,
        background: '#f3f4f6',
        borderRadius: 8,
        padding: 18,
        textAlign: 'left'
      }}>
        <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8, textAlign: 'center' }}>
          Exemple d'intégration du widget chatbot :
        </h2>
        <pre style={{
          background: '#f9fafb',
          padding: 12,
          borderRadius: 6,
          fontSize: 15,
          overflowX: 'auto'
        }}>
{`<script src="https://cdn.monchatbot.com/chatbot.js" data-client-id="VOTRE_CLIENT_ID"></script>`}
        </pre>
      </div>
    </div>
  </div>
);

export default Home; 