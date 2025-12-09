import { useParams, Link } from 'react-router-dom';
import { menuItems } from '../data/menuData';
import { FaLeaf, FaStar, FaArrowLeft } from 'react-icons/fa';
import { MdNewReleases } from 'react-icons/md';

function CategoryPage() {
  const { categoryName } = useParams<{ categoryName: string }>();
  
  // Filtrer les items par catégorie
  const items = menuItems.filter(item => item.category === categoryName);
  
  // Trouver le label de la catégorie
  const getCategoryLabel = () => {
    const labels: { [key: string]: string } = {
      'plats': 'Plats',
      'entrees': 'Entrées',
      'desserts': 'Desserts',
      'boissons': 'Boissons'
    };
    return labels[categoryName || ''] || 'Menu';
  };

  return (
    <div className="category-page">
      <section className="page-header">
        <h1>{getCategoryLabel()}</h1>
        <p>{items.length} produit{items.length > 1 ? 's' : ''} disponible{items.length > 1 ? 's' : ''}</p>
      </section>

      <div className="container">
        <Link to="/menu" className="back-link">
          <FaArrowLeft /> Retour au menu complet
        </Link>

        {items.length === 0 ? (
          <div className="empty-category">
            <h2>Aucun produit dans cette catégorie</h2>
            <Link to="/menu" className="btn btn-primary">Voir tout le menu</Link>
          </div>
        ) : (
          <div className="menu-grid">
            {items.map(item => (
              <div key={item.id} className="menu-card">
                <div className="menu-card-image">
                  <img src={item.imageUrl} alt={item.name} />
                  {item.isNew && <span className="badge badge-new"><MdNewReleases /> Nouveau</span>}
                  {item.isVegetarian && <span className="badge badge-veg"><FaLeaf /></span>}
                </div>
                <div className="menu-card-content">
                  <h3>{item.name}</h3>
                  <p className="description">{item.description}</p>
                  <div className="rating">
                    <span className="stars"><FaStar /> {item.rating}</span>
                    <span className="reviews">({item.reviewCount} avis)</span>
                  </div>
                  {item.allergens && item.allergens.length > 0 && (
                    <p className="allergens">
                      Allergènes: {item.allergens.join(', ')}
                    </p>
                  )}
                  <div className="menu-card-footer">
                    <span className="price">{item.price.toFixed(2)} €</span>
                    <button className="btn btn-primary">Ajouter</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default CategoryPage;
