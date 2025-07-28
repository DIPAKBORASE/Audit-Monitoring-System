import { createRootRoute, Outlet, Navigate } from '@tanstack/react-router';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import '../index.css';

const interClass = 'font-inter'; // You'll need to set up your fonts in your CSS

export const Route = createRootRoute({
  component: () => (
    <>
    <HelmetProvider>
      <Helmet>
        <title>CredTrack [Spiro] - BFSI Dashboard</title>
        <meta name="description" content="Banking, Financial Services, and Insurance Dashboard for Spiro" />
        {/* You can set the lang attribute via Helmet */}
        <html lang="en" />
      </Helmet>
      
      {/* Main layout without <html> or <body> tags */}
      <div className={`min-h-screen bg-sea-900 ${interClass}`}>
        <Outlet />
      </div>
      </HelmetProvider>
    </>
  ),
});

// export const redirectRoute = {
//   path: '/',
//   component: () => <Navigate to="/auth/login" />,
// };
