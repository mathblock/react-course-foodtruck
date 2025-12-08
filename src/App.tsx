
import { useState } from 'react';
import './App.css'
import Footers
 from './composants/footer'
import Header from './composants/header'
import CategorizedMenuList from './composants/menu'
import type { CartItem } from './types/cart';
import CartSummary from './composants/cartSummury';
import { storeService } from './services/store.service';

function App() {
  const [cart, setCart] =  useState<CartItem[]>(storeService.loadCart());

  const addToCart = (menuItem: CartItem) => {
    setCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex(
        (item) => item.item.id === menuItem.item.id
      );

      if (existingItemIndex !== -1) {
        const updatedCart = [...prevCart];
        updatedCart[existingItemIndex].quantity += menuItem.quantity;
        return updatedCart;
      } else {
        return [...prevCart, menuItem];
      }
    });
    storeService.saveCart(cart);
  };
  const removeFromCart = (menuItemId: number) => {
    setCart((prevCart) => {
      return prevCart.filter((item) => item.item.id !== menuItemId);
    });
    storeService.updateCart(cart);
  };

  const clearCart = () => {
    setCart([]);
    storeService.clearCart(); 
  };

  const updateQuantity = (menuItemId: number, quantity: number) => {
    setCart((prevCart) => {
      return prevCart.map((item) =>
        item.item.id === menuItemId ? { ...item, quantity } : item
      );
    });
    storeService.updateCart(cart);
  }

  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
      <div style={{
        width:"100%",
      }}>
        <Header cartItemCount={cartItemCount} />
        <CategorizedMenuList addToCart={addToCart} />
        {cart.length > 0 && (
          <CartSummary
            cartItems={cart}
            updateQuantity={updateQuantity}
            removeFromCart={removeFromCart}
            clearCart={clearCart}
          />
        )}
        <Footers/>
      </div>

  )
}

export default App
