import React, { useState } from 'react';
import { menuItems } from '../data/menuData';
import MenuCard from './MenuCard';
import { MenuItem } from '../types/menu';

interface MenuProps {
  onAddToCart: (item: MenuItem) => void;
}

const Menu: React.FC<MenuProps> = ({ onAddToCart }) => {
  const [activeCategory, setActiveCategory] = useState<string>('tous');
  const [searchTerm, setSearchTerm] = useState<string>('');

  // Filtrage double : catégorie ET recherche
  const filteredItems = menuItems
    .filter((item) => activeCategory === 'tous' || item.category === activeCategory)
    .filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

  const categories = [
    { id: 'tous', label: 'Tous', icon: '🍽️' },
    { id: 'entrees', label: 'Entrées', icon: '🥗' },
    { id: 'plats', label: 'Plats', icon: '🍔' },
    { id: 'desserts', label: 'Desserts', icon: '🍰' },
    { id: 'boissons', label: 'Boissons', icon: '🥤' }
  ];

  const handleClearSearch = () => {
    setSearchTerm('');
  };

  return (
    <div className="menu">
      {/* Barre de recherche */}
      <div className="search-bar">
        <input
          type="text"
          className="search-input"
          placeholder="Rechercher un plat..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {searchTerm && (
          <button className="clear-search" onClick={handleClearSearch}>
            ❌
          </button>
        )}
      </div>

      {/* Filtres par catégorie */}
      <div className="category-filters">
        {categories.map((category) => (
          <button
            key={category.id}
            className={`filter-btn ${activeCategory === category.id ? 'active' : ''}`}
            onClick={() => setActiveCategory(category.id)}
          >
            {category.icon} {category.label}
          </button>
        ))}
      </div>

      {/* Nombre de résultats */}
      <div className="results-count">
        {filteredItems.length} produit{filteredItems.length > 1 ? 's' : ''} trouvé{filteredItems.length > 1 ? 's' : ''}
      </div>

      {/* Affichage des items */}
      {filteredItems.length > 0 ? (
        <div className="menu-grid">
          {filteredItems.map((item) => (
            <MenuCard key={item.id} item={item} onAddToCart={onAddToCart} />
          ))}
        </div>
      ) : (
        <div className="no-results">
          <p>😕 Aucun produit trouvé</p>
          <p>Essayez de modifier votre recherche ou de changer de catégorie</p>
        </div>
      )}
    </div>
  );
};

export default Menu;
