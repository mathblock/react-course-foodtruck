// src/context/CartContext.tsx

import  React, { createContext, useState, useMemo, } from 'react';
import type  { ReactNode} from 'react';
import type  { MenuItem } from '../types/menu'; // Assurez-vous que le chemin est correct
import type  { CartItem } from '../types/cart'; // Assurez-vous que le chemin est correct

// 1. Définition du type de l'objet de contexte exposé
interface CartContextProps {
  cart: CartItem[];
  cartItemsCount: number;
  addToCart: (item: MenuItem) => void;
  updateQuantity: (id: string, delta: number) => void;
  removeFromCart: (id: string) => void;
}

// 2. Création du contexte
const CartContext = createContext<CartContextProps | undefined>(undefined);

// 3. Création du fournisseur de contexte (Provider)
export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  // Logique de gestion du panier (copiée de votre ancien App.tsx)
  const addToCart = (item: MenuItem) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.item.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.item.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { item, quantity: 1 }];
    });
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart((prev) =>
      prev.map((i) =>
        i.item.id === id
          ? { ...i, quantity: Math.max(1, i.quantity + delta) }
          : i
      )
    );
  };

  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((i) => i.item.id !== id));
  };

  // Calcul du nombre d'articles
  const cartItemsCount = useMemo(() => 
    cart.reduce((sum, i) => sum + i.quantity, 0), [cart]
  );
  
  // 4. Objet de valeur exposé
  const contextValue = useMemo(() => ({
    cart,
    cartItemsCount,
    addToCart,
    updateQuantity,
    removeFromCart,
  }), [cart, cartItemsCount]);


  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext };