import { useState } from 'react';
import { menuItems } from '../data/menuData';
import { FaLeaf, FaStar } from 'react-icons/fa';
import { MdNewReleases } from 'react-icons/md';
// Créer une route /menu/category/:categoryName
// Créer CategoryPage.tsx qui affiche les plats de cette catégorie
// Ajouter des liens dans HomePage vers chaque catégorie
function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('tous');

  const categories = [
    { id: 'tous', label: 'Tous' },
    { id: 'plats', label: 'Plats' },
    { id: 'entrees', label: 'Entrées' },
    { id: 'desserts', label: 'Desserts' },
    { id: 'boissons', label: 'Boissons' }
  ];

  // Filtrage des items selon la catégorie
  let filteredItems = menuItems;
  if (selectedCategory !== 'tous') {
    filteredItems = menuItems.filter(item => item.category === selectedCategory);
  }

  return (
    <div className="menu-page">
      <section className="page-header">
        <h1>Notre Menu</h1>
        <p>Découvrez tous nos plats préparés avec des ingrédients frais</p>
      </section>

      <div className="container">
        <div className="category-filters">
          {categories.map(cat => (
            <button
              key={cat.id}
              className={`filter-btn ${selectedCategory === cat.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="menu-grid">
          {filteredItems.map(item => (
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
      </div>
    </div>
  );
}

export default MenuPage;
