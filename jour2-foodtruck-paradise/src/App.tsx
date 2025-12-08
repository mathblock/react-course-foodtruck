import { useState } from 'react';
import Header from './components/Header';
import Menu from './components/Menu';
import Footer from './components/Footer';
import CartSummary from './components/CartSummary';
import type { CartItem } from './types/cart';
import type { MenuItem } from './types/menu';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('menu'); 
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

  // pseudo router puisque je ne sais pas si on peut utiliser react-router et que l'on doit faire
  // plusieurs pages
  const renderPage = () => {
    switch (currentPage) {
      case 'menu':
        return (
          <main>
            <Menu addToCart={addToCart} />
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
            <Menu addToCart={addToCart} />
          </main>
        );
    }
  };

  return (
    <div className="app">
      <Header onNavClick={setCurrentPage} cartItemsCount={cartItemsCount} />
      {renderPage()}
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
