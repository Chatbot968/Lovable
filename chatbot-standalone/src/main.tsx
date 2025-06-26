import React from 'react'
import ReactDOM from 'react-dom/client'
import ChatbotWidget from './chatbot.tsx'
import './index.css'

// Exemple d'utilisation pour le développement
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div style={{ padding: '20px' }}>
      <h1>Test du Chatbot Standalone</h1>
      <p>Voici un exemple d'intégration du chatbot :</p>
      <ChatbotWidget clientId="demo" isDemo={true} />
    </div>
  </React.StrictMode>,
) 