/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, type ReactNode, useEffect, useCallback } from 'react';
import { useUser, useAuth as useClerkAuth, useSignIn, useSignUp } from '@clerk/clerk-react';
import type { AuthContextType } from '@/types/auth-context';
import type { User } from '@/types/user';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const { user: clerkUser, isLoaded: userLoaded } = useUser();
  const { isSignedIn, isLoaded: authLoaded, signOut } = useClerkAuth();
  const { signIn } = useSignIn();
  const { signUp } = useSignUp();

  type ClerkUserMinimal = {
    id: string;
    primaryEmailAddress?: { emailAddress?: string } | null;
    firstName?: string | null;
    lastName?: string | null;
    imageUrl?: string | null;
  };

  const syncUserToDatabase = useCallback(async (user: ClerkUserMinimal) => {
    try {
      const userData = {
        id: user.id,
        email: user.primaryEmailAddress?.emailAddress || '',
        firstName: user.firstName || '',
        lastName: user.lastName || '',
        avatar: user.imageUrl || null,
        role: 'customer',
      };

      const res = await fetch('http://localhost:3000/api/users/sync', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      });
      if (!res.ok) console.error('Failed to sync user');
    } catch (err) {
      console.error('Sync user error: ', err);
    }
  }, []);

  useEffect(() => {
    if (clerkUser && isSignedIn) {
      void syncUserToDatabase(clerkUser);
    }
  }, [clerkUser, isSignedIn, syncUserToDatabase]);

  const user: User | null = clerkUser
    ? {
        id: clerkUser.id,
        email: clerkUser.primaryEmailAddress?.emailAddress || '',
        firstName: clerkUser.firstName || '',
        lastName: clerkUser.lastName || '',
        role: 'customer',
        createdAt: clerkUser.createdAt ? new Date(clerkUser.createdAt) : new Date(),
        avatar: clerkUser.imageUrl || undefined,
        bio: (clerkUser.unsafeMetadata?.bio as string) || undefined,
      }
    : null;

  const isAuthenticated = Boolean(isSignedIn);
  const loading = !userLoaded || !authLoaded;

  async function login(email: string, password: string) {
    if (!signIn) throw new Error('SignIn hook not available');
    return signIn.create({ identifier: email, password });
  }

  async function signup(firstName: string, lastName: string, email: string, password: string) {
    if (!signUp) throw new Error('SignUp hook not available');
    const signUpAttempt = await signUp.create({ emailAddress: email, password, firstName, lastName });
    await signUpAttempt.prepareEmailAddressVerification({ strategy: 'email_code' });
    return signUpAttempt;
  }

  function logout() {
    try {
      signOut();
    } catch (err) {
      console.error('Logout error', err);
    }
  }

  async function updateProfile(data: Partial<User>) {
    if (!clerkUser) return;
    try {
      await clerkUser.update({
        firstName: data.firstName,
        lastName: data.lastName,
        unsafeMetadata: { ...clerkUser.unsafeMetadata, bio: data?.bio },
      });
    } catch (err) {
      console.error('Update profile error', err);
      throw err;
    }
  }

  async function updateAvatar(file: File) {
    if (!clerkUser) throw new Error('Not authenticated');
    try {
      await clerkUser.setProfileImage({ file });
      await clerkUser.reload();
    } catch (err) {
      console.error('Update avatar error', err);
      throw err;
    }
  }

  const value: AuthContextType = {
    user,
    isAuthenticated,
    loading,
    login,
    signup,
    logout,
    updateProfile,
    updateAvatar,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within an AuthProvider');
  return ctx;
}
