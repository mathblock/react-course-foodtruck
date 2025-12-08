import { useState } from 'react';
import Header from './components/Header';
import Menu from './components/Menu';
import Footer from './components/Footer';
import CartSummary from './components/CartSummary';
import Favorites from './components/Favorites';
import type { CartItem } from './types/cart';
import type { MenuItem } from './types/menu';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('menu');
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

  // pseudo router
  const renderPage = () => {
    switch (currentPage) {
      case 'menu':
        return (
          <main>
            <Menu
              onAddToCart={addToCart}
              favorites={favorites}
              onToggleFavorite={toggleFavorite}
            />
          </main>
        );
      case 'cart':
        return (
          <div className="container">
            <CartSummary
              cart={cart}
              onUpdateQuantity={updateQuantity}
              onRemove={removeFromCart}
            />
          </div>
        );
      case 'favorites':
        return (
          <main>
            <Favorites
              favorites={favorites}
              onToggleFavorite={toggleFavorite}
              onAddToCart={addToCart}
            />
          </main>
        );
      case 'about':
        return (
          <section className="section">
            <div className="container">
              <h2>À propos</h2>
              <p>Food Truck Paradise est votre destination ultime pour des plats de rue délicieux et variés. Nous proposons une cuisine internationale avec des options végétariennes et des plats signature.</p>
            </div>
          </section>
        );
      case 'contact':
        return (
          <section className="section">
            <div className="container">
              <h2>Contact</h2>
              <p>Pour nous contacter, envoyez un email à contact@foodtruckparadise.com ou suivez-nous sur les réseaux sociaux.</p>
            </div>
          </section>
        );
      default:
        return (
          <main>
            <Menu
              onAddToCart={addToCart}
              favorites={favorites}
              onToggleFavorite={toggleFavorite}
            />
          </main>
        );
    }
  };

  return (
    <div className="app">
      <Header
        onNavClick={setCurrentPage}
        cartItemsCount={cartItemsCount}
        favoritesCount={favorites.length}
      />
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;