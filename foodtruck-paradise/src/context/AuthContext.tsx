import { createContext, useContext, type ReactNode } from 'react';
import { useUser, useAuth as useClerkAuth, useSignIn, useSignUp, useClerk } from '@clerk/clerk-react';
import type { AuthContextType, UserRegister } from "@/types/auth-context";
import type { User } from "@/types/user";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const { user: clerkUser, isLoaded: userLoaded } = useUser();
  const { isSignedIn, isLoaded: authLoaded, signOut, getToken } = useClerkAuth();
  const { signIn } = useSignIn();
  const { signUp } = useSignUp();
  const clerk = useClerk();

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

  async function login(email: string, password: string) {
    try {
      await signIn.create({
        identifier: email,
        password,
      });
    } catch (error) {
      throw error;
    }
  }

 async function signup(firstName:string, lastName:string, email: string, password: string, confirmPassword:string) {
    try {
      const signUpAttempt = await signUp.create({
        emailAddress: email,
        password,
        firstName,
        lastName,
      });

      // Prepare email verification
      await signUpAttempt.prepareEmailAddressVerification({ strategy: 'email_code' });
      
      return signUpAttempt;
    } catch (error) {
      throw error;
    }
  }

  function logout() {
    signOut();
  }

  async function updateProfile(data: Partial<User>) {
    if (clerkUser) {
      await clerkUser.update({
        firstName: data.firstName,
        lastName: data.lastName,
        // Note: Email updates might require additional handling
      });
    }
  }

  async function updateAvatar(file: File) {
    if (!clerkUser) {
      throw new Error('User not authenticated');
    }
    
    try {
      // Use Clerk's built-in method to set profile image
      await clerkUser.setProfileImage({ file });
      // Reload user data to reflect changes
      await clerkUser.reload();
    } catch (error) {
      console.error('Avatar upload error:', error);
      throw new Error('Failed to upload avatar');
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