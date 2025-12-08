import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Menu from "./components/Menu";
import CartSummary from "./components/CartSummary";
import Footer from "./components/Footer";
import type { MenuItem } from "./types/menu";
import type { CartItem } from "./types/cart";

function App() {
  const [cart, setCart] = useState<CartItem[]>([]);

  // AJOUTER au panier (ou augmenter quantité)
  const addToCart = (item: MenuItem) => {
    const existingItem = cart.find((cartItem) => cartItem.item.id === item.id);

    if (existingItem) {
      // Item existe déjà → Augmente la quantité
      setCart(
        cart.map((cartItem) =>
          cartItem.item.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      // Nouvel item → Ajoute avec quantité 1
      setCart([...cart, { item, quantity: 1 }]);
    }
  };

  // SUPPRIMER complètement du panier
  const removeFromCart = (itemId: string) => {
    setCart(cart.filter((cartItem) => cartItem.item.id !== itemId));
  };

  // MODIFIER la quantité (supprime si ≤ 0)
  const updateQuantity = (itemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(itemId);
    } else {
      setCart(
        cart.map((cartItem) =>
          cartItem.item.id === itemId ? { ...cartItem, quantity } : cartItem
        )
      );
    }
  };

  // COMPTEUR total d'items
  const cartItemsCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="app">
      <Header cartItemsCount={cartItemsCount} />
      <main>
        <Menu onAddToCart={addToCart} />
        {cart.length > 0 && (
          <CartSummary
            cart={cart}
            onUpdateQuantity={updateQuantity}
            onRemove={removeFromCart}
          />
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
