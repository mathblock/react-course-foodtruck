import type { User } from '../types/user';

export type UserRegister = {
  firstName:string; 
  lastName:string;
  email: string;
  password: string;
  confirmPassword:string; 
  phone:string
}

export interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (userRegister: UserRegister) => Promise<void>;
  logout: () => void;
  updateProfile: (data: Partial<User>) => Promise<void>;
  updateAvatar: (file: File) => Promise<void>;
}