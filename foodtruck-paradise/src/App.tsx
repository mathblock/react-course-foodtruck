import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Header is now used inside Layout, but Layout needs to be imported instead
import Layout from './components/Layout';
import Menu from './components/Menu';
import CartSummary from './components/CartSummary';
import Favorites from './components/Favorites';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import type { CartItem } from './types/cart';
import type { MenuItem } from './types/menu';
import './App.css';

function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [favorites, setFavorites] = useState<string[]>([]);

  const toggleFavorite = (itemId: string) => {
    setFavorites(prev =>
      prev.includes(itemId)
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  const addToCart = (item: MenuItem) => {
    setCart(currentCart => {
      const existingItem = currentCart.find(cartItem => cartItem.item.id === item.id);
      if (existingItem) {
        return currentCart.map(cartItem =>
          cartItem.item.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...currentCart, { item, quantity: 1 }];
    });
  };

  const removeFromCart = (itemId: string) => {
    setCart(currentCart => currentCart.filter(item => item.item.id !== itemId));
  };

  const updateQuantity = (itemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(itemId);
      return;
    }
    setCart(currentCart =>
      currentCart.map(item =>
        item.item.id === itemId
          ? { ...item, quantity }
          : item
      )
    );
  };

  const cartItemsCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout cartItemsCount={cartItemsCount} favoritesCount={favorites.length} />}>
          <Route index element={
            <main>
              <Menu
                onAddToCart={addToCart}
                favorites={favorites}
                onToggleFavorite={toggleFavorite}
              />
            </main>
          } />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="favorites" element={
            <main>
              <Favorites
                favorites={favorites}
                onToggleFavorite={toggleFavorite}
                onAddToCart={addToCart}
              />
            </main>
          } />
          <Route path="cart" element={
            <div className="container">
              <CartSummary
                cart={cart}
                onUpdateQuantity={updateQuantity}
                onRemove={removeFromCart}
              />
            </div>
          } />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
