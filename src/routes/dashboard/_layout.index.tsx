import React, { useEffect, useState } from 'react';
import { useNavigate, createFileRoute } from '@tanstack/react-router';
import Dashboard from '../../components/Dashboard';
// import { getAuthToken } from '../../components/Auth/authUtils';
// import { ProtectedRoute } from '../../components/ProtectedRoute';

const DashboardPage: React.FC = () => {
  const navigate = useNavigate();
  const [authenticated, setAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const checkAuthentication = () => {
    //   const token = getAuthToken();
    //   if (!token) {
        navigate({ to: '/auth/login' });
        setAuthenticated(false);
    //   } else {
    //     setAuthenticated(true);
    //   }
    };

    checkAuthentication();
  }, [navigate]);

  // Show loading UI while checking auth status
  if (authenticated === null) return <div>Loading...</div>;

  // If not authenticated, do not render anything (redirect has already happened)
  if (!authenticated) return null;

  // If authenticated, show dashboard
  return (
    
      <Dashboard />
  );
};

export default DashboardPage;

export const Route = createFileRoute('/dashboard/_layout/')({
  component: DashboardPage,
});
