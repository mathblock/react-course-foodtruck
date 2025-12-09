import { useState } from 'react';
import type { MenuItem } from '../types/menu';

interface MenuCardProps {
  item: MenuItem;
  onAddToCart: (item: MenuItem) => void;
}

const MenuCard = ({ item, onAddToCart }: MenuCardProps) => {
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = () => {
    setIsAdding(true);
    onAddToCart(item);
    
    // Retour à l'état normal après 500ms
    setTimeout(() => {
      setIsAdding(false);
    }, 500);
  };

  return (
    <div className="menu-card">
      <div className="card-image">
        <img src={item.imageUrl} alt={item.name} />
        {item.isNew && <div className="badge-new">Nouveau</div>}
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
            className={`btn-add ${isAdding ? 'adding' : ''}`}
            onClick={handleAddToCart}
            disabled={isAdding}
          >
            {isAdding ? '✓ Ajouté !' : 'Ajouter'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;