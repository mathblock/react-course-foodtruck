import React, { useState } from 'react';
import { MenuItem } from '../types/menu';

interface MenuCardProps {
  item: MenuItem;
  onAddToCart: (item: MenuItem) => void;
}

const MenuCard: React.FC<MenuCardProps> = ({ item, onAddToCart }) => {
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    onAddToCart(item);
    setIsAdded(true);
    
    // Réinitialiser l'animation après 500ms
    setTimeout(() => {
      setIsAdded(false);
    }, 500);
  };

  return (
    <div className="menu-card">
      <div className="card-image">
        <img src={item.imageUrl} alt={item.name} />
        {item.isNew && <span className="badge-new">Nouveau</span>}
      </div>
      <div className="card-content">
        <div className="card-header">
          <h3>{item.name}</h3>
          {item.isVegetarian && <span className="badge-vege">🌱</span>}
        </div>
        <p className="description">{item.description}</p>
        <div className="card-footer">
          <span className="price">{item.price.toFixed(2)} €</span>
          <button 
            className={`btn-add ${isAdded ? 'added' : ''}`}
            onClick={handleAddToCart}
          >
            {isAdded ? '✓ Ajouté !' : 'Ajouter'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
