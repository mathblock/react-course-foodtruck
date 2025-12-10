import React from 'react';
import { useCart } from '../contexts/CartContext';
import CartSummary from '../components/CartSummary';

const CartPage: React.FC = () => {
  const { cart, updateQuantity, removeFromCart } = useCart();

  return (
    <div className="cart-page">
      <CartSummary
        cart={cart}
        onUpdateQuantity={updateQuantity}
        onRemove={removeFromCart}
      />
    </div>
  );
};

export default CartPage;
