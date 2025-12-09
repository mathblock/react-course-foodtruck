import { createContext, useContext, useState, ReactNode } from 'react';
import { type CartItem } from '../types/cart';
import { type MenuItem } from '../types/menu';
import { type PromoCode, promoCodes } from '../data/promoCodes';

interface CartContextType {
  items: CartItem[];
  subtotal: number;
  discount: number;
  total: number;
  promoCode: PromoCode | null;
  addToCart: (item: MenuItem, quantity: number) => void;
  removeFromCart: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
  applyPromoCode: (code: string) => boolean;
  removePromoCode: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [appliedPromo, setAppliedPromo] = useState<PromoCode | null>(null);

  const subtotal = cart.reduce((total, cartItem) => total + cartItem.item.price * cartItem.quantity, 0);
  
  let discount = 0;
  if (appliedPromo) {
    if (appliedPromo.minAmount && subtotal >= appliedPromo.minAmount) {
      discount = subtotal * appliedPromo.discount;
    } else if (!appliedPromo.minAmount) {
      discount = subtotal * appliedPromo.discount;
    }
    discount = Math.round(discount * 100) / 100;
  }

  const total = subtotal - discount;

  const addToCart = (item: MenuItem, quantity: number) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.item.id === item.id);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.item.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + quantity }
            : cartItem
        );
      }
      return [...prevCart, { item, quantity }];
    });
  };

  const removeFromCart = (itemId: string) => {
    setCart((prevCart) => prevCart.filter((cartItem) => cartItem.item.id !== itemId));
  };

  const updateQuantity = (itemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(itemId);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((cartItem) =>
        cartItem.item.id === itemId
          ? { ...cartItem, quantity }
          : cartItem
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const applyPromoCode = (code: string): boolean => {
    const upperCode = code.toUpperCase();
    const promo = promoCodes[upperCode];
    
    if (!promo) {
      return false;
    }
    
    if (promo.minAmount && subtotal < promo.minAmount) {
      return false;
    }
    
    setAppliedPromo(promo);
    return true;
  };

  const removePromoCode = () => {
    setAppliedPromo(null);
  };

  return (
    <CartContext.Provider value={{ 
      items: cart,
      subtotal,
      discount,
      total,
      promoCode: appliedPromo,
      addToCart, 
      removeFromCart, 
      updateQuantity, 
      clearCart,
      applyPromoCode,
      removePromoCode
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  return context;
}
