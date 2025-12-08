import { useState } from 'react';
import Header from './components/Header';
import Menu from './components/Menu';
import Footer from './components/Footer';
import CartSummary from './components/CartSummary';
import './App.css';
import type { CartItem, MenuItem } from './types/menu';



function App() {
  const [currentPage, setCurrentPage] = useState('menu'); 
  const [cart, setCartState] = useState<CartItem[]>(() => {
    const savedCart = localStorage.getItem('cart');
    try {
      // les données initiales du panier sont chargées depuis le localStorage
      return savedCart ? JSON.parse(savedCart) : [];
    } catch (error) {
      console.warn('Failed to parse cart from localStorage:', error);
      localStorage.removeItem('cart');
      return [];
    }
  });
  const [favorites, setFavoritesState] = useState<string[]>(() => {
    const savedFavorites = localStorage.getItem('favorites');
    try {
      return savedFavorites ? JSON.parse(savedFavorites) : [];
    } catch (error) {
      console.warn('Failed to parse favorites from localStorage:', error);
      localStorage.removeItem('favorites');
      return [];
    }
  });
  const [isCartOpen, setIsCartOpen] = useState(false);

  const setCart = (items: CartItem[] | ((prev: CartItem[]) => CartItem[])) => {
    setCartState(prevCart => {
      // si on passe une fonction, on l'appelle avec le panier précédent (prevCart)
      const newItems = typeof items === 'function' ? items(prevCart) : items;
      // met à jour le localStorage
      localStorage.setItem('cart', JSON.stringify(newItems));
      return newItems;
    });
  };

  const setFavorites = (items: string[] | ((prev: string[]) => string[])) => {
    setFavoritesState(prev => {
      const newItems = typeof items === 'function' ? items(prev) : items;
      localStorage.setItem('favorites', JSON.stringify(newItems));
      return newItems;
    });
  };

  const toggleFavorite = (id: string) => {
    setFavorites(prev => prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]);
  };
  
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
  
  const updateQuantity = (id: string, newQuantity: number) => {
    setCart(items =>
      items.map(item =>
        item.menuItem.id === id ? { ...item, quantity: newQuantity } : item
      ).filter(item => item.quantity > 0)
    );
  };

  const removeFromCart = (id: string) => {
    setCart(items => items.filter(item => item.menuItem.id !== id));
  };
  
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  // pseudo router puisque je ne sais pas si on peut utiliser react-router et que l'on doit faire
  // plusieurs pages
  const renderPage = () => {
    switch (currentPage) {
      case 'menu':
        return (
          <main>
            <Menu addToCart={addToCart} favorites={favorites} toggleFavorite={toggleFavorite} />
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
            <Menu addToCart={addToCart} favorites={favorites} toggleFavorite={toggleFavorite} />
          </main>
        );
    }
  };

  return (
    <div className="app">
      <Header onNavClick={setCurrentPage} totalItems={totalItems} isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
      {renderPage()}
      <CartSummary cart={cart} isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} updateQuantity={updateQuantity} removeFromCart={removeFromCart} />
      <Footer />
    </div>
  );
}

export default App;
