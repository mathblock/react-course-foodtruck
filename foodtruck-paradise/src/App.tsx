import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import MenuList from './components/Menu1';
import CartSidebar from './components/CartSideBart';
import type { CartItem } from './types/cart';
import type { MenuProps } from './types/menus';

const App: React.FC = () => {
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
      setCart(prev => prev.map(i => (i.item.id === itemId ? { ...i, quantity } : i)));
    }
  };

  const removeFromCart = (itemId: number) => {
    setCart(prev => prev.filter(i => i.item.id !== itemId));
  };

  const cartItemsCount = cart.reduce((sum, i) => sum + i.quantity, 0);
  const total = cart.reduce((sum, i) => sum + i.item.price * i.quantity, 0);

  return (
    <div className="app">
      <Header cartItemsCount={cartItemsCount} onOpenCart={() => setIsCartOpen(true)} />
      <MenuList onAddToCart={addToCart} />

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
};

export default App;