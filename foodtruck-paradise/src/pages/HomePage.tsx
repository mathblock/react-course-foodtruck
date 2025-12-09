import { Link } from 'react-router-dom';
import './pages.css';

const categories = [
  { key: 'entrees', label: 'Entrées' },
  { key: 'plats', label: 'Plats' },
  { key: 'desserts', label: 'Desserts' },
  { key: 'boissons', label: 'Boissons' },
];

export default function HomePage() {
  return (
    <div className="page home-page">
      <h1>Bienvenue chez Food Truck Paradise</h1>
      <p>Découvrez nos catégories populaires :</p>

      <div className="category-links">
        {categories.map(cat => (
          <Link key={cat.key} to={`/menu/category/${cat.key}`} className="category-link">
            {cat.label}
          </Link>
        ))}
      </div>

      <p>Ou parcourez tout notre <Link to="/menu">menu</Link>.</p>
    </div>
  );
}
