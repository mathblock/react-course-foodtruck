import { useParams, Link } from 'react-router-dom';
import MenuCard from './MenuCard';
import { menuItems } from '../data/menuData';
import type { MenuItem } from '../types/menu';

interface CategoryPageProps {
  addToCart: (item: MenuItem) => void;
}

const categories: Record<string, { label: string; emoji: string; gradient: string; description: string }> = {
  entrees: {
    label: 'Entrées',
    emoji: '🥗',
    gradient: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
    description: 'Commencez votre repas avec nos délicieuses entrées fraîches 💕'
  },
  plats: {
    label: 'Plats',
    emoji: '🍔',
    gradient: 'linear-gradient(135deg, #ff6b9d 0%, #ff8fab 100%)',
    description: 'Nos plats signatures préparés avec amour 💖'
  },
  desserts: {
    label: 'Desserts',
    emoji: '🧁',
    gradient: 'linear-gradient(135deg, #f8b5c4 0%, #ffc3d7 100%)',
    description: 'Terminez sur une note sucrée et gourmande 🍰'
  },
  boissons: {
    label: 'Boissons',
    emoji: '🧋',
    gradient: 'linear-gradient(135deg, #ffb6c1 0%, #ffd1dc 100%)',
    description: 'Rafraîchissez-vous avec nos boissons artisanales 🌸'
  },
};

const CategoryPage = ({ addToCart }: CategoryPageProps) => {
  const { categoryName } = useParams<{ categoryName: string }>();

  const filteredItems = menuItems.filter(
    (item) => item.category === categoryName
  );

  const category = categoryName ? categories[categoryName] : null;

  if (!category) {
    return (
      <div className="category-page">
        <div className="category-not-found">
          <span className="not-found-emoji">😢</span>
          <h2>Oups ! Catégorie introuvable</h2>
          <p>La catégorie "<strong>{categoryName}</strong>" n'existe pas dans notre menu.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="category-page">
      <div className="category-hero" style={{ background: category.gradient }}>
        <div className="category-hero-content">
          <span className="category-hero-emoji">{category.emoji}</span>
          <h1 className="category-hero-title">{category.label}</h1>
          <p className="category-hero-description">{category.description}</p>
          <div className="category-hero-count">
            <span className="count-number">{filteredItems.length}</span>
            <span className="count-label">{filteredItems.length === 1 ? 'produit' : 'produits'}</span>
          </div>
        </div>
        <div className="category-hero-decoration">
          <span>{category.emoji}</span>
          <span>{category.emoji}</span>
          <span>{category.emoji}</span>
        </div>
      </div>

      {/* Products Grid */}
      <div className="category-products">
        {filteredItems.length > 0 ? (
          <>
            <div className="products-header">
              <h2>✨ Nos {category.label.toLowerCase()} ✨</h2>
            </div>
            <div className="menu-grid">
              {filteredItems.map((item, index) => (
                <div 
                  key={item.id} 
                  className="menu-card-wrapper"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <MenuCard item={item} onAddToCart={addToCart} />
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="no-results-fancy">
            <span className="no-results-emoji">🍽️</span>
            <p>Aucun produit dans cette catégorie pour le moment</p>
            <p className="no-results-sub">Revenez bientôt ! 💕</p>
          </div>
        )}
      </div>

      {/* Navigation vers autres catégories */}
      <div className="other-categories">
        <h3>🎀 Découvrez aussi 🎀</h3>
        <div className="other-categories-links">
          {Object.entries(categories)
            .filter(([key]) => key !== categoryName)
            .map(([key, cat]) => (
              <Link 
                key={key} 
                to={`/menu/category/${key}`} 
                className="other-category-link"
                style={{ background: cat.gradient }}
              >
                <span className="other-cat-emoji">{cat.emoji}</span>
                <span className="other-cat-label">{cat.label}</span>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
