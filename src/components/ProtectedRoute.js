import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) return <p>Loading...</p>;  // Wait for loading to complete
  if (!user) return <Navigate to="/login" />;  // Redirect if not authenticated

  return children;
};

export default ProtectedRoute;
