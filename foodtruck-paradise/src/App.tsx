import { useState } from 'react';
import Header from './components/Header';
import Menu from './components/Menu';
import Footer from './components/Footer';
import CartOverlay from './components/CartOverlay';
import './App.css';
import type { CartItem, MenuItem } from './types/menu';



function App() {
  const [currentPage, setCurrentPage] = useState('menu'); 
  const [cart, setCart] = useState<CartItem[]>([]);
  
  const addToCart = (item: MenuItem) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(cartItem => cartItem.menuItem.id === item.id);
      if (existingItem) {
        return prevCart.map(cartItem =>
          cartItem.menuItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevCart, { menuItem: item, quantity: 1 }];
      }
    });
  };
  
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
      <Header onNavClick={setCurrentPage} />
      {renderPage()}
      <CartOverlay cart={cart} setCart={setCart} />
      <Footer />
    </div>
  );
}

export default App;
