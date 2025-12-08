
import Header from './components/Header';
import Cart from './components/CartSummary';
import Menu from './components/Menu';
import Footer from './components/Footer';
import './App.css'
import { useState, useCallback } from 'react';
import type { CartItem } from './types/cart';
import type { MenuItem } from './types/menu';

function App() {
        const [cartItems, setCartItems] = useState<CartItem[]>([]);

        const addToCart = useCallback((item: MenuItem) => {
          setCartItems(prev => {
            const existing = prev.find(cartItem => cartItem.item.id === item.id);
            if (existing) {
              return prev.map(cartItem => cartItem.item.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem);
            }
            return [...prev, { item, quantity: 1 }];
          });
        }, []);

        const removeFromCart = useCallback((itemId: string) => {
          setCartItems(prev => prev.filter(cartItem => cartItem.item.id !== itemId));
        }, []);

        const updateQuantity = useCallback((itemId: string, quantity: number) => {
          setCartItems(prev => {
            if (quantity <= 0) return prev.filter(cartItem => cartItem.item.id !== itemId);
            return prev.map(cartItem => cartItem.item.id === itemId ? { ...cartItem, quantity } : cartItem);
          });
        }, []);

        const totalCount = cartItems.reduce((sum, cartItem) => sum + cartItem.quantity, 0);

        return (
          <div className="App">
            <Header cartItemsCount={totalCount} />
            <main>
              <Menu onAddToCart={addToCart} />
            </main>
            <Cart cartItems={cartItems} updateQuantity={updateQuantity} removeFromCart={removeFromCart} />
            <Footer />
          </div>
      );  
}

export default App
