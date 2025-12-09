import { createContext, useContext } from 'react';
import type { CartItem } from '../types/cart';

interface CartContextType {
  cart: CartItem[];
  setCart: (items: CartItem[] | ((prev: CartItem[]) => CartItem[])) => void;
  addToCart: (item: import('../types/menu').MenuItem) => void;
  updateQuantity: (id: string, newQuantity: number) => void;
  removeFromCart: (id: string) => void;
  totalItems: number;
  isCartOpen: boolean;
  setIsCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
  favorites: string[];
  setFavorites: (items: string[] | ((prev: string[]) => string[])) => void;
  toggleFavorite: (id: string) => void;
}

export const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};