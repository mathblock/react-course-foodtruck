import "./App.css";
import Header from "./composants/Header";
import Menu from "./composants/Menu";
import Footer from "./composants/Footer";
import { useState, useMemo } from "react";
import type { MenuItem } from "./types/menu";
import type { CartItem } from "./types/carts";
import CartSummary from "./composants/CartSummary";


function App() {

  const [cart, setCart] = useState<CartItem[]>([]);

  // ➤ Ajouter un item au panier
  const addToCart = (menuItem: MenuItem) => {
    const exist = cart.find(c => c.item.id === menuItem.id);

    if (exist) {
      setCart(
        cart.map(c =>
          c.item.id === menuItem.id
            ? { ...c, quantity: c.quantity + 1 }
            : c
        )
      );
    } else {
      setCart([...cart, { item: menuItem, quantity: 1 }]);
    }
  };

  // ➤ Supprimer un item du panier
  const removeFromCart = (itemId: string) => {
    setCart(cart.filter(c => c.item.id !== itemId));
  };

  // ➤ Modifier la quantité d'un item
  const updateQuantity = (itemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(itemId);
      return;
    }

    setCart(
      cart.map(c =>
        c.item.id === itemId
          ? { ...c, quantity }
          : c
      )
    );
  };

  // 👉 Calcul du nombre total d’articles du panier (mémoïsé)
  const cartItemsCount = useMemo(
    () => cart.reduce((sum, item) => sum + item.quantity, 0),
    [cart]
  );

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


