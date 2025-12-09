import { createContext, useContext, type ReactNode } from 'react';
import { useUser, useAuth as useClerkAuth } from '@clerk/clerk-react';
import type { AuthContextType } from "@/types/auth-context";
import type { User } from "@/types/user";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const { user: clerkUser, isLoaded: userLoaded } = useUser();
  const { isSignedIn, isLoaded: authLoaded } = useClerkAuth();

  // Map Clerk user to our User type
  const user: User | null = clerkUser ? {
    id: clerkUser.id,
    email: clerkUser.primaryEmailAddress?.emailAddress || '',
    firstName: clerkUser.firstName || '',
    lastName: clerkUser.lastName || '',
    phone: clerkUser.phoneNumbers[0]?.phoneNumber || '',
    role: 'customer', // Default role, adjust as needed
    createdAt: new Date(clerkUser.createdAt),
    avatar: clerkUser.imageUrl,
  } : null;

  const isAuthenticated = isSignedIn;
  const loading = !userLoaded || !authLoaded;

  function login(user: User) {
    // Since we're using Clerk, login is handled by Clerk's UI
    // This can be a no-op or throw an error
    throw new Error('Login is handled by Clerk');
  }

  function logout() {
    // Since we're using Clerk, logout is handled by Clerk's UI
    throw new Error('Logout is handled by Clerk');
  }

  function updateProfile(data: Partial<User>) {
    // Implement if needed using Clerk's update
    // For now, no-op
  }

  const value: AuthContextType = {
    user,
    isAuthenticated,
    loading,
    login,
    logout,
    updateProfile,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}