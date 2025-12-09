import type { User } from '../types/user';

export interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
  login: (user: User) => void;
  logout: () => void;
  updateProfile: (data: Partial) => void;
}