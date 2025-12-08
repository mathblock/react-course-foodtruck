import { useState } from 'react';
import type { MenuItem } from '../types/menu';

interface MenuCardProps {
  item: MenuItem;
  onAddToCart?: (item: MenuItem) => void;
  isFavorite?: boolean;
  onToggleFavorite?: (itemId: string) => void;
  isInCart?: boolean;
}

const MenuCard = ({ item, onAddToCart, isFavorite, onToggleFavorite, isInCart }: MenuCardProps) => {
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    if (onAddToCart) {
      onAddToCart(item);
      setIsAdded(true);
      setTimeout(() => setIsAdded(false), 500);
    }
  };

  const getButtonText = () => {
    if (isAdded) return "Ajouté !";
    if (isInCart) return "Déjà ajouté";
    return "Ajouter au panier";
  };

  return (
    <div className="menu-card">
      <div className="card-image">
        <img src={item.imageUrl} alt={item.name} />
        {item.isNew && <span className="badge-new">Nouveau</span>}
        {onToggleFavorite && (
          <button
            className="btn-favorite"
            onClick={() => onToggleFavorite(item.id)}
            aria-label={isFavorite ? "Retirer des favoris" : "Ajouter aux favoris"}
          >
            {isFavorite ? "❤️" : "🤍"}
          </button>
        )}
      </div>
      <div className="card-content">
        <div className="card-header">
          <h3>{item.name}</h3>
          {item.isVegetarian && <span className="badge-vege" title="Végétarien">🌿</span>}
        </div>
        <p className="description">{item.description}</p>
        <div className="card-footer">
          <span className="price">{item.price.toFixed(2)} €</span>
          <button
            className={`cart-button ${isInCart ? 'in-cart' : ''}`}
            onClick={handleAddToCart}
          >
            {getButtonText()}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;