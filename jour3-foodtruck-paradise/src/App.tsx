import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header, Menu, Footer, About, Contact, CartSummary, CategoryPage, Accueil } from './components';
import type { CartItem } from './types/cart';
import type { MenuItem } from './types/menu';
import './App.css';

function App() {
  const [cart, setCart] = useState<CartItem[]>([]);

  function addToCart(item: MenuItem) {
    const existingItem = cart.find((cartItem) => cartItem.item.id === item.id);
    
    if (existingItem) {
      setCart(cart.map((cartItem) =>
        cartItem.item.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      ));
    } else {
      setCart([...cart, { id: item.id, item, quantity: 1 }]);
    }
  }

  // Supprime complètement un item du panier
  function removeFromCart(itemId: string) {
    setCart(cart.filter((cartItem) => cartItem.item.id !== itemId));
  }

  // Met à jour la quantité d'un item (supprime si ≤ 0)
  function updateQuantity(itemId: string, quantity: number) {
    if (quantity <= 0) {
      removeFromCart(itemId);
    } else {
      setCart(cart.map((cartItem) =>
        cartItem.item.id === itemId
          ? { ...cartItem, quantity }
          : cartItem
      ));
    }
  }

  const cartItemsCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="app">
      <Header cartItemsCount={cartItemsCount} />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/menu" element={<Menu addToCart={addToCart} />} />
        <Route path="/menu/category/:categoryName" element={<CategoryPage addToCart={addToCart} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {cart.length > 0 && (
        <CartSummary 
          cart={cart}
          onUpdateQuantity={updateQuantity}
          onRemove={removeFromCart}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;
