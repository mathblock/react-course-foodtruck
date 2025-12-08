import { useState } from 'react';
import MenuCard from './MenuCard';
import { menuItems } from '../data/menuData';
import type { MenuItem } from '../types/menu';
import type { CartItem } from '../types/cart';

interface MenuProps {
  onAddToCart: (item: MenuItem) => void;
  favorites: string[];
  onToggleFavorite: (itemId: string) => void;
  cart: CartItem[];
}

const Menu = ({ onAddToCart, favorites, onToggleFavorite, cart }: MenuProps) => {
  const [activeCategory, setActiveCategory] = useState("tous");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    { key: 'tous', label: 'Tous' },
    { key: 'entrees', label: '🥗 Entrées' },
    { key: 'plats', label: '🍔 Plats de resistance' },
    { key: 'desserts', label: '🍰 Desserts' },
    { key: 'boissons', label: '🥤 Boissons' },
  ];

  const filteredItems = menuItems
    .filter(
      (item) => activeCategory === "tous" || item.category === activeCategory
    )
    .filter(
      (item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div className="menu">
      <div className="search-bar">
        <input
          type="text"
          className="search-input"
          placeholder="Rechercher nos délicieux plats..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {searchTerm && (
          <button
            className="search-clear"
            onClick={() => setSearchTerm("")}
            aria-label="Effacer la recherche"
          >
            ❌
          </button>
        )}
      </div>

      <div className="category-filters">
        {categories.map((category) => (
          <button
            key={category.key}
            className={`filter-btn ${activeCategory === category.key ? 'active' : ''}`}
            onClick={() => setActiveCategory(category.key)}
          >
            {category.label}
          </button>
        ))}
      </div>

      {filteredItems.length > 0 ? (
        <>
          <p className="results-count">{filteredItems.length} résultat(s) trouvé(s)</p>
          <div className="menu-grid">
            {filteredItems.map(item => (
              <MenuCard
                key={item.id}
                item={item}
                onAddToCart={onAddToCart}
                isFavorite={favorites.includes(item.id)}
                onToggleFavorite={onToggleFavorite}
                isInCart={cart.some(c => c.item.id === item.id)}
              />
            ))}
          </div>
        </>
      ) : (
        <div className="no-results">
          <p>Aucun produit ne correspond à votre recherche.</p>
        </div>
      )}
    </div>
  );
};

export default Menu;