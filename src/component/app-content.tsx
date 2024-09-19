import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import { TestAbstractThemeContextProvider } from './context/test-abstract-theme-context-provider';
import { testLightTheme } from '../resource/theme/test-theme/test-theme.css';

const queryClient = new QueryClient();

export const AppContent = ({ children }: { children?: ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <TestAbstractThemeContextProvider
        defaultTheme={testLightTheme}
        themes={[testLightTheme]}
        onThemeSelect={(selected, before) => {
          document.body.classList.add(selected.value);
          if (before !== undefined) {
            document.body.classList.remove(before.value);
          }
        }}
      >
        {children}
        <Outlet />
      </TestAbstractThemeContextProvider>
    </QueryClientProvider>
  );
};
