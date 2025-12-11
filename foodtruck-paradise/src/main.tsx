import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import { ClerkProvider } from '@clerk/clerk-react';
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
const AppWrapper = ({ children }: { children: React.ReactNode }) => {
  if (PUBLISHABLE_KEY) {
    return (
      <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignInUrl="/account">
        {children}
      </ClerkProvider>
    );
  }
  console.log('🔧 Dev mode: Running without Clerk authentication');
  return <>{children}</>;
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppWrapper>
        <App />
      </AppWrapper>
    </BrowserRouter>
  </React.StrictMode>
);
