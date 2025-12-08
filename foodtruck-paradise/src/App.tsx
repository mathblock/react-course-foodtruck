import { useState } from 'react';
import Header from './components/Header';
import Menu from './components/Menu';
import Footer from './components/Footer';
import CartSummary from './components/CartSummary';
import Favorites from './components/Favorites';
import type { MenuItem } from './types/menu';
import type { CartItem } from './types/cart';
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
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.item.id === item.id);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.item.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prevCart, { item, quantity: 1 }];
    });
  };

  const removeFromCart = (itemId: string) => {
    setCart((prevCart) => prevCart.filter((cartItem) => cartItem.item.id !== itemId));
  };

  const updateQuantity = (itemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(itemId);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((cartItem) =>
        cartItem.item.id === itemId ? { ...cartItem, quantity } : cartItem
      )
    );
  };

  const cartItemsCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  // pseudo router puisque je ne sais pas si on peut utiliser react-router et que l'on doit faire
  // plusieurs pages
  const renderPage = () => {
    switch (currentPage) {
      case 'menu':
        return (
          <main>
            <Menu
              onAddToCart={addToCart}
              favorites={favorites}
              onToggleFavorite={toggleFavorite}
              cart={cart}
            />
          </main>
        );
      case 'favorites':
        return (
          <main>
            <Favorites
              favorites={favorites}
              onAddToCart={addToCart}
              onToggleFavorite={toggleFavorite}
              cart={cart}
              onBackToMenu={() => setCurrentPage('menu')}
            />
          </main>
        );
      case 'cart':
        return (
          <main>
            <div className="container">
              <CartSummary
                cart={cart}
                onUpdateQuantity={updateQuantity}
                onRemove={removeFromCart}
              />
              {cart.length === 0 && (
                <button
                  onClick={() => setCurrentPage('menu')}
                  style={{
                    marginTop: '1rem',
                    padding: '0.8rem 1.5rem',
                    background: '#ff6b35',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontSize: '1rem'
                  }}
                >
                  Retourner au Menu
                </button>
              )}
            </div>
          </main>
        );
      case 'about':
        return (
          <section className="section">
            <div className="container">
              <h2>À propos</h2>
              <p>Food Truck Paradise vous emmène au cœur des saveurs tropicales mauriciennes, où chaque plat raconte l’histoire d’une île multiculturelle. Entre cuisine de rue épicée, influences indiennes, créoles, chinoises et européennes, nous proposons un menu vibrant et coloré, à l’image de Maurice.</p>
              <br />
              <p>Découvrez des recettes authentiques revisitées, des options végétariennes inspirées du marché local, ainsi que nos plats signature préparés avec des ingrédients frais, exotiques et pleins de soleil.</p>
              <br />
              <p><strong>Food Truck Paradise : là où la street-food mauricienne rencontre le monde, pour une expérience gourmande inoubliable !</strong></p>
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
              cart={cart}
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
