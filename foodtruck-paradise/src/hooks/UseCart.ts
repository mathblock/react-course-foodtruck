// src/hooks/useCart.ts

import { useContext } from 'react';
import { CartContext } from '../context/CartContext'; // Importez le contexte

/**
 * Hook personnalisé pour accéder facilement aux données et fonctions du panier.
 */
export const useCart = () => {
  const context = useContext(CartContext);
  
  if (context === undefined) {
    throw new Error('useCart doit être utilisé à l\'intérieur d\'un CartProvider');
  }
  
  return context;
};