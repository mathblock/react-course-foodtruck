

import React from 'react';
import type { MenuItem } from '../types/menu';

interface MenuCardProps {
  item: MenuItem;
}

const MenuCard: React.FC<MenuCardProps> = ({ item }) => {
  
  const formattedPrice = item.price.toFixed(2) + ' €';

  return (
    <div className="menu-card">
      <div className="card-image">
        <img src={item.imageUrl} alt={item.name} />
        {}
        {item.isNew && (
          <span className="badge badge-new">Nouveau</span>
        )}
      </div>

      <div className="card-content">
        <div className="card-header">
          <h3>{item.name}</h3>
          {}
          {item.isVegetarian && (
            <span className="badge badge-vege" title="Végétarien"></span>
          )}
        </div>
        
        <p className="description">{item.description}</p>
        
        <div className="card-footer">
          <span className="price">{formattedPrice}</span>
          <button className="btn-add">Ajouter</button>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;