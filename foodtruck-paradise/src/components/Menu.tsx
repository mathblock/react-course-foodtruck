import { useState } from 'react';
import { Link } from 'react-router-dom';
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
  const [searchTerm, setSearchTerm] = useState("");
  const categories = [
    { key: 'tous', label: 'Tous', path: '/menu' },
    { key: 'entrees', label: '🥗 Entrées', path: '/menu/category/entrees' },
    { key: 'plats', label: '🍔 Plats de resistance', path: '/menu/category/plats' },
    { key: 'desserts', label: '🍰 Desserts', path: '/menu/category/desserts' },
    { key: 'boissons', label: '🥤 Boissons', path: '/menu/category/boissons' },
  ];

  /* 
     Since we are now using routing for categories, we only filter by text search here.
     The "activeCategory" state is removed as it's no longer needed for local filtering of categories.
     (Unless we want to highlight "Tous" when on this page, but simpler to just link for now)
  */

  const filteredItems = menuItems
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
          /* We use standard HTML anchor logic via react-router Link, 
             but styled as buttons/tabs. 
             We check if 'tous' is active since we are on the main menu page.
           */
          <Link
            key={category.key}
            to={category.path}
            className={`filter-btn ${category.key === 'tous' ? 'active' : ''}`}
            style={{ textDecoration: 'none', display: 'inline-block', textAlign: 'center' }}
          >
            {category.label}
          </Link>
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