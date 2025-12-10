import React from 'react';
import Menu from '../components/Menu';
import { useCart } from '../contexts/CartContext';

const MenuPage: React.FC = () => {
  const { addToCart } = useCart();

  return (
    <div className="menu-page">
      <h1>🍽️ Notre Menu</h1>
      <Menu onAddToCart={addToCart} />
    </div>
  );
};

export default MenuPage;
