import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';

const queryClient = new QueryClient();

export const AppContent = ({ children }: { children?: ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <Outlet />
    </QueryClientProvider>
  );
};
