
import Layout from './components/Layout';
import Menu from './components/Menu';
import './App.css'
import { useState, useCallback } from 'react';
import type { CartItem } from './types/cart';
import type { MenuItem } from './types/menu';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import AboutPage from './pages/AboutPage';
import Contact from './pages/Contact';

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


        return (
          <Layout cartItems={cartItems} updateQuantity={updateQuantity} removeFromCart={removeFromCart}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/menu" element={<Menu onAddToCart={addToCart} />} />
              <Route path="/menu/category/:categoryName" element={<CategoryPage onAddToCart={addToCart} />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Layout>
        );

}
 
export default App 
