import { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Menu from './components/Menu';
import CartSummary from './components/CartSummary';
import Favorites from './components/Favorites';
import Layout from './components/Layout';
import CategoryPage from './pages/CategoryPage';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import type { MenuItem } from './types/menu';
import type { CartItem } from './types/cart';
import './App.css';

function App() {
  const [cart, setCart] = useState<CartItem[]>(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [favorites, setFavorites] = useState<string[]>(() => {
    const savedFavorites = localStorage.getItem('favorites');
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const handleApplyPromo = (code: string) => {
    if (code === 'voyagemaurice10') {
      setDiscount(0.1);
      return true;
    }
    setDiscount(0);
    return false;
  };

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

  return (
    <Routes>
      <Route path="/" element={<Layout
        cartItemsCount={cartItemsCount}
        favoritesCount={favorites.length}
        onApplyPromo={handleApplyPromo}
        isPromoApplied={discount > 0}
      />}>
        <Route index element={
          <main>
            <Menu
              onAddToCart={addToCart}
              favorites={favorites}
              onToggleFavorite={toggleFavorite}
              cart={cart}
            />
          </main>
        } />
        <Route path="menu" element={
          <main>
            <Menu
              onAddToCart={addToCart}
              favorites={favorites}
              onToggleFavorite={toggleFavorite}
              cart={cart}
            />
          </main>
        } />
        <Route path="menu/category/:categoryName" element={
          <CategoryPage
            onAddToCart={addToCart}
            favorites={favorites}
            onToggleFavorite={toggleFavorite}
            cart={cart}
          />
        } />
        <Route path="favorites" element={
          <main>
            <Favorites
              favorites={favorites}
              onAddToCart={addToCart}
              onToggleFavorite={toggleFavorite}
              cart={cart}
            />
          </main>
        } />
        <Route path="cart" element={
          <main>
            <div className="container">
              <CartSummary
                cart={cart}
                onUpdateQuantity={updateQuantity}
                onRemove={removeFromCart}
                discount={discount}
              />
              {cart.length === 0 && (
                <Link
                  to="/menu"
                  style={{
                    display: 'inline-block',
                    marginTop: '1rem',
                    padding: '0.8rem 1.5rem',
                    background: '#ff6b35',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    textDecoration: 'none',
                    fontSize: '1rem'
                  }}
                >
                  Retourner au Menu
                </Link>
              )}
            </div>
          </main>
        } />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
