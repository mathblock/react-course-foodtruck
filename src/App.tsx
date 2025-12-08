import { useState } from "react";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import type { MenuItem } from "./types/menu";

import CartSummary from "./components/CartSummary";

type CartItem = {
  item: MenuItem;
  quantity: number;
};

function App() {
  const [cart, setCart] = useState<CartItem[]>([]);

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

  const cartItemsCount = cart.reduce((sum, i) => sum + i.quantity, 0);

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

  return (
    <div className="app">
      <Header cartItemsCount={cartItemsCount} />
      <main>
        <Menu onAddToCart={addToCart} />

        {/* Affichage conditionnel du résumé du panier */}
          {cart.length > 0 && (
            <div className="cart-wrapper">
              <CartSummary 
                cart={cart} 
                onUpdateQuantity={updateQuantity} 
                onRemove={removeFromCart} 
              />
            </div>
          )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
