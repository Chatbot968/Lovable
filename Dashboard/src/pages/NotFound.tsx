import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div style={{ padding: 40, textAlign: 'center' }}>
    <h1>404 - Page non trouvée</h1>
    <Link to="/">
      <button style={{ marginTop: 20, padding: '10px 20px', fontSize: 18 }}>Retour à l'accueil</button>
    </Link>
  </div>
);

export default NotFound;
