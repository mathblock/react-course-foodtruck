import React, { useState } from 'react';
import type { ReactNode } from 'react';
import type { CartItem } from '../types/cart';
import { CartContext } from './CartContext';

interface CartProviderProps {
  children: ReactNode;
}

const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, setCartState] = useState<CartItem[]>(() => {
    const savedCart = localStorage.getItem('cart');
    try {
      return savedCart ? JSON.parse(savedCart) : [];
    } catch (error) {
      console.warn('Failed to parse cart from localStorage:', error);
      localStorage.removeItem('cart');
      return [];
    }
  });

  const [favorites, setFavoritesState] = useState<string[]>(() => {
    const savedFavorites = localStorage.getItem('favorites');
    try {
      return savedFavorites ? JSON.parse(savedFavorites) : [];
    } catch (error) {
      console.warn('Failed to parse favorites from localStorage:', error);
      localStorage.removeItem('favorites');
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);

  const setCart = (items: CartItem[] | ((prev: CartItem[]) => CartItem[])) => {
    setCartState(prevCart => {
      const newItems = typeof items === 'function' ? items(prevCart) : items;
      localStorage.setItem('cart', JSON.stringify(newItems));
      return newItems;
    });
  };

  const setFavorites = (items: string[] | ((prev: string[]) => string[])) => {
    setFavoritesState(prev => {
      const newItems = typeof items === 'function' ? items(prev) : items;
      localStorage.setItem('favorites', JSON.stringify(newItems));
      return newItems;
    });
  };

  const toggleFavorite = (id: string) => {
    setFavorites(prev => prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]);
  };

  const addToCart = (item: import('../types/menu').MenuItem) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(cartItem => cartItem.menuItem.id === item.id);
      if (existingItem) {
        return prevCart.map(cartItem =>
          cartItem.menuItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevCart, { menuItem: item, quantity: 1 }];
      }
    });
  };

  const updateQuantity = (id: string, newQuantity: number) => {
    setCart(items =>
      items.map(item =>
        item.menuItem.id === id ? { ...item, quantity: newQuantity } : item
      ).filter(item => item.quantity > 0)
    );
  };

  const removeFromCart = (id: string) => {
    setCart(items => items.filter(item => item.menuItem.id !== id));
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const value = {
    cart,
    setCart,
    addToCart,
    updateQuantity,
    removeFromCart,
    totalItems,
    isCartOpen,
    setIsCartOpen,
    favorites,
    setFavorites,
    toggleFavorite,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartProvider;