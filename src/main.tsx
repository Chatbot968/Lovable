import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Test simple pour vérifier que le build fonctionne
const TestApp = () => (
  <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
    <h1 style={{ color: '#2563eb' }}>🚀 ChatBot Pro - Build Vite Réussi !</h1>
    <p>Le projet se build correctement et s'affiche en local.</p>
    <p>Status: ✅ Fonctionnel</p>
  </div>
);

createRoot(document.getElementById("root")!).render(<App />);
