// src/routes/auth/login.tsx
import Dashboard from '../../components/Dashboard';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/auth/login')({
  component: () => <div>
    <Dashboard/>
  </div>,
});
