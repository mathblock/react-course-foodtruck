import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="home-page">
      <section className="hero">
        <div className="container">
          <h1>🌮 Bienvenue chez Food Truck Paradise</h1>
          <p className="hero-subtitle">Découvrez nos saveurs authentiques directement depuis notre food truck !</p>
          <div className="hero-buttons">
            <Link to="/menu" className="btn-primary">Voir le Menu</Link>
            <Link to="/about" className="btn-secondary">En savoir plus</Link>
          </div>
        </div>
      </section>

      <section className="categories">
        <div className="container">
          <h2>Nos Catégories</h2>
          <div className="categories-grid">
            <Link to="/menu/category/entrees" className="category-card">
              <div className="category-icon">🥗</div>
              <h3>Entrées</h3>
              <p>Découvrez nos délicieuses entrées</p>
            </Link>

            <Link to="/menu/category/plats" className="category-card">
              <div className="category-icon">🍔</div>
              <h3>Plats Principaux</h3>
              <p>Nos plats principaux savoureux</p>
            </Link>

            <Link to="/menu/category/desserts" className="category-card">
              <div className="category-icon">🍰</div>
              <h3>Desserts</h3>
              <p>Terminez sur une note sucrée</p>
            </Link>

            <Link to="/menu/category/boissons" className="category-card">
              <div className="category-icon">🥤</div>
              <h3>Boissons</h3>
              <p>Rafraîchissez-vous avec nos boissons</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2>Pourquoi nous choisir ?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🍽️</div>
              <h3>Ingrédients frais</h3>
              <p>Nous utilisons uniquement des ingrédients frais et locaux pour garantir la qualité de nos plats.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🚚</div>
              <h3>Service mobile</h3>
              <p>Notre food truck se déplace pour vous apporter nos délicieux plats où que vous soyez.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">⏰</div>
              <h3>Rapide et efficace</h3>
              <p>Commandez en ligne et récupérez votre repas en quelques minutes seulement.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Prêt à commander ?</h2>
          <p>Découvrez notre menu varié et savoureux</p>
          <Link to="/menu" className="btn-primary">Commander maintenant</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
