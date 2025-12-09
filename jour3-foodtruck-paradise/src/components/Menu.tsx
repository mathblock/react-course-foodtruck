import { useState } from 'react';
import MenuCard from './MenuCard';
import { menuItems } from '../data/menuData';
import type { MenuItem } from '../types/menu';

interface MenuProps {
  addToCart: (item: MenuItem) => void;
}

const Menu = ({ addToCart }: MenuProps) => {
  const [activeCategory, setActiveCategory] = useState<string>('tous');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const categories = [
    { key: 'tous', label: 'Tous' },
    { key: 'entrees', label: '🥗 Entrées' },
    { key: 'plats', label: '🍔 Plats' },
    { key: 'desserts', label: '🍰 Desserts' },
    { key: 'boissons', label: '🥤 Boissons' },
  ];

  const filteredItems = menuItems
    .filter((item) => activeCategory === 'tous' || item.category === activeCategory)
    .filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div className="menu">
      <div className="search-bar">
        <input
          type="text"
          className="search-input"
          placeholder="🔍 Rechercher un plat..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {searchTerm && (
          <button 
            className="search-clear"
            onClick={() => setSearchTerm('')}
            aria-label="Effacer la recherche"
          >
            X
          </button>
        )}
      </div>

      <div className="category-filters">
        {categories.map((category) => (
          <>
          <button
            key={category.key}
            className="btn-category"
            onClick={() => setActiveCategory(category.key)}
          >
            {category.label}
          </button>
          </>
        ))}
      </div>

      <div className="results-count">
        <span className="title-category">
          {categories.find(cat => cat.key === activeCategory)?.label || 'Tous'}
        </span>
        {' - '}
        {filteredItems.length} {filteredItems.length === 1 ? 'produit trouvé' : 'produits trouvés'}
      </div>

      {filteredItems.length > 0 ? (
        <div className="menu-grid">
          {filteredItems.map((item) => (
            <MenuCard key={item.id} item={item} onAddToCart={addToCart} />
          ))}
        </div>
      ) : (
        <div className="no-results">
          <p>Aucun produit trouvé...</p>
          <p>Essayez de modifier vos critères de recherche</p>
        </div>
      )}
    </div>
  );
};

export default Menu;