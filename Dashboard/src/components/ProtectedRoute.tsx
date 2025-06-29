import React from 'react';
import { Navigate } from 'react-router-dom';

// Simule une auth (à remplacer par ta vraie logique)
const isAuthenticated = () => {
  return localStorage.getItem('isLoggedIn') === 'true';
};

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }
  return <>{children}</>;
};

export default ProtectedRoute;
