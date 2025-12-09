import MenuCard from './MenuCard';
import { menuItems } from '../data/menuData';
import { useState } from 'react';
import { useCart } from '../contexts/CartContext.ts';

const Menu = () => {
  const { addToCart, favorites, toggleFavorite } = useCart();
  const categories = [
    { key: 'entrees', label: '🥗 Entrées' },
    { key: 'plats', label: '🍴 Plats Principaux' },
    { key: 'desserts', label: '🍰 Desserts' },
    { key: 'boissons', label: '🥤 Boissons' },
  ];

  const [activeCategory, setActiveCategory] = useState<string>('tous');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const resetFilters = () => {
    setActiveCategory('tous');
    setSearchTerm('');
  };

  const filteredItems = menuItems.filter(
    (item) => activeCategory === "tous" || item.category === activeCategory
  ).filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="menu">
      <div className="menu-filters">
        <div className="category-buttons">
          <button
            className={`nav-link ${activeCategory === 'tous' ? 'active' : ''}`}
            onClick={() => setActiveCategory('tous')}
          >
            Tous les Catégories
          </button>
          {categories.map((category) => (
            <button
              key={category.key}
              className={`category-button nav-link ${activeCategory === category.key ? 'active' : ''}`}
              onClick={() => {return category.key === activeCategory ? setActiveCategory('tous') : setActiveCategory(category.key)}}
            >
              {category.label}
            </button>
          ))}
        </div>
        <input
          type="text"
          placeholder="Rechercher des plats..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {activeCategory !== 'tous' || searchTerm ?
          <button className="reset-btn" onClick={resetFilters}>❌</button>
          : null
        }
      </div>

      {activeCategory !== 'tous' || searchTerm ? <div className="results-count">
          {filteredItems.length > 0 ? `${filteredItems.length} résultats` : 'Aucun produit'}
        </div>
        : null
      }

      {categories.map(category => {
        const items = filteredItems.filter(item => item.category === category.key).sort((a, b) => {
          const aFav = favorites.includes(a.id) ? 1 : 0;
          const bFav = favorites.includes(b.id) ? 1 : 0;
          return bFav - aFav;
        });
        if (items.length === 0) return null;
        return (
          <section key={category.key} className="menu-section">
            <h2>{category.label}</h2>
            <div className="menu-grid">
              {items.map(item => (
                <MenuCard key={item.id} item={item} onAddToCart={addToCart} favorites={favorites} toggleFavorite={toggleFavorite} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default Menu;