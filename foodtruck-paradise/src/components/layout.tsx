// src/components/Layout.tsx
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import MenuList from "./Menu1";
import CartSidebar from "./CartSideBart";
import { useState } from "react";
import type { CartItem } from "../types/cart";
import type { MenuProps } from "../types/menus";

export default function Layout() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (item: MenuProps) => {
    setCart(prev => {
      const existing = prev.find(i => i.item.id === item.id);
      if (existing) {
        return prev.map(i =>
          i.item.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { item, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (itemId: number, quantity: number) => {
    if (quantity <= 0) {
      setCart(prev => prev.filter(i => i.item.id !== itemId));
    } else {
      setCart(prev => prev.map(i => i.item.id === itemId ? { ...i, quantity } : i));
    }
  };

  const removeFromCart = (itemId: number) => {
    setCart(prev => prev.filter(i => i.item.id !== itemId));
  };

  const cartItemsCount = cart.reduce((sum, i) => sum + i.quantity, 0);
  const total = cart.reduce((sum, i) => sum + i.item.price * i.quantity, 0);

  return (
    <div style={{
      minHeight: '100vh',
      maxWidth: '1400px',
      margin: '0 auto',
      background: 'white',
      boxShadow: '0 0 40px rgba(0,0,0,0.15)',
      display: 'flex',
      flexDirection: 'column',
      overflowX: 'hidden'
    }}>
      <Header cartItemsCount={cartItemsCount} onOpenCart={() => setIsCartOpen(true)} />
      
      {/* Ici on affiche soit MenuList, soit une autre page */}
      <Outlet context={{ addToCart, cart, updateQuantity, removeFromCart, total }} />

      <CartSidebar
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={updateQuantity}
        onRemove={removeFromCart}
        total={total}
      />

      <Footer />
    </div>
  );
}