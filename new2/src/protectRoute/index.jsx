import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAppContext } from '../../context';

const ProtectedRoute = ({ children }) => {
    const { user, loading } = useAppContext();

    if (loading) return null; // Avoid rendering anything until loading is complete

    return user ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
