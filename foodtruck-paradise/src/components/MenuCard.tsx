import { useState } from 'react';
import type { MenuItem } from '../types/menu';

interface MenuCardProps {
  item: MenuItem;
  onAddToCart: (item: MenuItem) => void;
  favorites: string[];
  toggleFavorite: (id: string) => void;
}

const MenuCard = ({ item, onAddToCart, favorites, toggleFavorite }: MenuCardProps) => {
  const [buttonText, setButtonText] = useState('Ajouter');

  const handleAddToCart = () => {
    onAddToCart(item);
    setButtonText('Ajouté!');
    setTimeout(() => setButtonText('Ajouter'), 500);
  };

  return (
    <div className="menu-card">
      <div className="card-image">
        <img src={item.imageUrl} alt={item.name} />
        {item.isNew && <div className="badge-new">Nouveau</div>}
        <button className="favorite-heart" onClick={() => toggleFavorite(item.id)} aria-label={favorites.includes(item.id) ? 'Retirer des favoris' : 'Ajouter aux favoris'}>
          {favorites.includes(item.id) ? '❤️' : '🤍'}
        </button>
      </div>
      <div className="card-content">
        <div className="card-header">
          <h3>{item.name}</h3>
          {item.isVegetarian && <span className="badge-vege">🌱</span>}
        </div>
        <p className="description">{item.description}</p>
        <div className="card-footer">
          <span className="price">{item.price.toFixed(2)} €</span>
          <button className="btn-add" onClick={handleAddToCart} disabled={buttonText === 'Ajouté!'} aria-label="Ajouter au panier">
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;