import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  // Check if user is authenticated
  const token = localStorage.getItem('adminToken');
  const isAuthenticated = token && token !== 'undefined' && token !== 'null';

  // If not authenticated, redirect to login
  if (!isAuthenticated) {
    return <Navigate to="/admin/login" replace />;
  }

  // If authenticated and children exist, render children
  // Otherwise render Outlet for nested routes
  return children ? children : <Outlet />;
};

export default ProtectedRoute;