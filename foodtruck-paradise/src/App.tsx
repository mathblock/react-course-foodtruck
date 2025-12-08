import { useState } from 'react';
import './App.css'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Menu } from './components/Menu'
import type { CartItem } from "@/types/cart";
import type { MenuItem } from './types/menu';
import { CartSummary } from './components/CartSummary';

function App() {
  const [cart, setCart] = useState<CartItem[]>([])
  const cartItemsCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const addToCart = (item: MenuItem) => {
    setCart(cart => {
      const exists = cart.find(c => c.item.id === item.id);
      if (exists) {
        return cart.map(c =>
          c.item.id === item.id
            ? { ...c, quantity: c.quantity + 1 }
            : c
        );
      }
      return [...cart, { item, quantity: 1 }];
    });
  };

  const removeFromCart = (itemId: string) => {
    setCart(cart => cart.filter(item => item.item.id !== itemId));
  };

  const updateQuantity = (itemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(itemId);
      return;
    }
    setCart(cart =>
      cart.map(item =>
        item.item.id === itemId
          ? { ...item, quantity }
          : item
      )
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header cartItemsCount={cartItemsCount} />

      <main className="flex-1">
        <Menu onAddToCart={addToCart} />
        <div style={{ maxWidth: "600px", margin: "2rem auto" }}>
          <CartSummary
            cart={cart}
            onUpdateQuantity={updateQuantity}
            onRemove={removeFromCart}
          />
        </div>
      </main>

      <Footer />
    </div>

  )
}

export default App
