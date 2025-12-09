import { useFavorites } from "../hooks/useFavorites";
import type { MenuItem } from "../types/menu";
import '../styles/menuCard.css'

interface MenuCardProps {
    item: MenuItem;
}
export function MenuCard({ item }: MenuCardProps) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const isItemFavorite = isFavorite(item.id);
  
  return (
    
      <div className="menu-card">
        <div className="menu-card-header">
          <img src={item.imageUrl} alt={item.name} className="menu-card-image" />
        </div>
        <div className="menu-card-badge">
          {item.isNew && <span className="new-badge">✨new</span>}
          {item.isVegetarian && <span className="vegetarian-badge">🌱</span>}
        </div>
        <span className="favorite-icon" onClick={() => toggleFavorite(item.id)}>
          {isItemFavorite ? "❤️" : "🤍"}
        </span>
        <div className="menu-card-body">
            <h3 className="menu-card-name">{item.name}</h3>
            <p className="menu-card-description">{item.description}</p>
            <div className="menu-card-footer">
                <p className="menu-card-price">{item.price.toFixed(2)}</p>
                <button className="add-to-cart-button">🛒</button>
            </div>
      </div>
    </div>
      
      
    
    
  );
}