

import React from 'react';
import { menuItems } from '../data/menuData';
import type { Category, MenuItem } from '../types/menu';
import MenuCard from './MenuCard';


const categoriesOrder: { key: Category, title: string }[] = [
  { key: 'plats', title: ' Plats Principaux' },
  { key: 'entrees', title: ' Entrées' },
  { key: 'desserts', title: ' Desserts' },
  { key: 'boissons', title: ' Boissons' },
];

const Menu: React.FC = () => {
  return (
    <div className="menu-grid">
      {categoriesOrder.map((category) => {
        
        const items: MenuItem[] = menuItems.filter(item => item.category === category.key);

        if (items.length === 0) {
          
          return null;
        }

        return (
          <section key={category.key} className="menu-category">
            <h2>{category.title}</h2>
            <div className="category-items">
              {}
              {items.map(item => (
                <MenuCard key={item.id} item={item} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default Menu;