import { Link } from 'react-router-dom';
import { GiTacos } from 'react-icons/gi';
import { FaShippingFast, FaLeaf, FaHeart, FaUtensils, FaCookie, FaGlassWhiskey } from 'react-icons/fa';

function HomePage() {
  return (
    <div className="home-page">
      <section className="hero">
        <h1><GiTacos /> Bienvenue chez Foodtruck Paradise</h1>
        <p className="subtitle">Street food authentique • Saveurs du monde • Livraison rapide</p>
        <Link to="/menu" className="btn btn-primary">
          Découvrir le menu
        </Link>
      </section>
      
      <section className="features">
        <div className="feature">
          <span className="icon"><FaShippingFast /></span>
          <h3>Livraison rapide</h3>
          <p>Vos plats livrés en moins de 30 minutes</p>
        </div>
        <div className="feature">
          <span className="icon"><FaLeaf /></span>
          <h3>Produits frais</h3>
          <p>Ingrédients de qualité</p>
        </div>
        <div className="feature">
          <span className="icon"><FaHeart /></span>
          <h3>Fait avec amour</h3>
          <p>Des recettes maison préparées par nos chefs</p>
        </div>
      </section>

      <section className="categories-section">
        <h2>Explorez nos catégories</h2>
        <div className="categories-grid">
          <Link to="/menu/category/plats" className="category-card">
            <span className="category-icon"><FaUtensils /></span>
            <h3>Plats</h3>
            <p>Nos délicieux plats principaux</p>
          </Link>
          <Link to="/menu/category/entrees" className="category-card">
            <span className="category-icon"><FaLeaf /></span>
            <h3>Entrées</h3>
            <p>Pour bien commencer</p>
          </Link>
          <Link to="/menu/category/desserts" className="category-card">
            <span className="category-icon"><FaCookie /></span>
            <h3>Desserts</h3>
            <p>La touche sucrée finale</p>
          </Link>
          <Link to="/menu/category/boissons" className="category-card">
            <span className="category-icon"><FaGlassWhiskey /></span>
            <h3>Boissons</h3>
            <p>Pour accompagner votre repas</p>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
