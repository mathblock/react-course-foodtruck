import React from 'react';
import { useParams } from 'react-router-dom';
import Menu from '../components/Menu';
import { useCart } from '../contexts/CartContext';
import { menuItems } from '../data/menuData';

const CategoryPage: React.FC = () => {
  const { categoryName } = useParams<{ categoryName: string }>();
  const { addToCart } = useCart();

  const filteredItems = menuItems.filter(item => item.category === categoryName);

  const getCategoryTitle = (category: string) => {
    switch (category) {
      case 'entrees':
        return 'Entrées';
      case 'plats':
        return 'Plats Principaux';
      case 'desserts':
        return 'Desserts';
      case 'boissons':
        return 'Boissons';
      default:
        return category;
    }
  };

  return (
    <div className="menu-page">
      <h1>🍽️ {getCategoryTitle(categoryName || '')}</h1>
      <Menu onAddToCart={addToCart} items={filteredItems} />
    </div>
  );
};

export default CategoryPage;
