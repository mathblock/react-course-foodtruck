import { Link } from 'react-router-dom';

const categories = [
  { 
    key: 'entrees', 
    label: 'Entrées', 
    emoji: '🥗', 
    description: 'Commencez en douceur avec nos délicieuses entrées 💕',
    gradient: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)'
  },
  { 
    key: 'plats', 
    label: 'Plats', 
    emoji: '🍔', 
    description: 'Nos plats signatures qui font craquer tout le monde 💖',
    gradient: 'linear-gradient(135deg, #ff6b9d 0%, #ff8fab 100%)'
  },
  { 
    key: 'desserts', 
    label: 'Desserts', 
    emoji: '🧁', 
    description: 'Terminez sur une note sucrée et gourmande 🍰',
    gradient: 'linear-gradient(135deg, #f8b5c4 0%, #ffc3d7 100%)'
  },
  { 
    key: 'boissons', 
    label: 'Boissons', 
    emoji: '🧋', 
    description: 'Rafraîchissez-vous avec nos boissons artisanales 🌸',
    gradient: 'linear-gradient(135deg, #ffb6c1 0%, #ffd1dc 100%)'
  },
];

const Accueil = () => {
  return (
    <div className="accueil">
      <section className="hero-section">
        <div className="hero-sparkles">
          <span className="sparkle">✨</span>
          <span className="sparkle">💖</span>
          <span className="sparkle">🌸</span>
          <span className="sparkle">✨</span>
          <span className="sparkle">💫</span>
        </div>
        <div className="hero-content">
          <p className="hero-subtitle">
            ✨ La magie dans ton assiette ✨
          </p>
          <p className="hero-description">
            Bienvenue dans notre univers gourmand et enchanté ! 
            Découvrez des saveurs uniques préparées avec amour 💕
          </p>
          <Link to="/menu" className="hero-cta">
            <span>Découvrir le menu</span>
            <span className="cta-arrow">→</span>
          </Link>
        </div>
        <div className="hero-decoration">
          <Link to="/menu/category/entrees" className="floating-food">🥗</Link>
          <Link to="/menu/category/plats" className="floating-food">🍕</Link>
          <Link to="/menu/category/desserts" className="floating-food">🍩</Link>
          <Link to="/menu/category/boissons" className="floating-food">🥤</Link>
        </div>
      </section>

      <section className="features-section">
        <div className="feature-card">
          <span className="feature-icon">🌿</span>
          <h3>Frais & Local</h3>
          <p>Ingrédients sourcés localement chaque jour</p>
        </div>
        <div className="feature-card">
          <span className="feature-icon">💝</span>
          <h3>Fait avec amour</h3>
          <p>Chaque plat est préparé avec passion</p>
        </div>
        <div className="feature-card">
          <span className="feature-icon">🌱</span>
          <h3>Options Veggie</h3>
          <p>De délicieuses options végétariennes</p>
        </div>
      </section>

      <section className="categories-section">
        <h2 className="section-title">
          <span>🎀</span> Nos Catégories <span>🎀</span>
        </h2>
        <div className="categories-grid">
          {categories.map((category, index) => (
            <Link
              key={category.key}
              to={`/menu/category/${category.key}`}
              className="category-card"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                background: category.gradient
              }}
            >
              <span className="category-emoji">{category.emoji}</span>
              <h3>{category.label}</h3>
              <p>{category.description}</p>
              <span className="category-arrow">Découvrir →</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="testimonial-section">
        <div className="testimonial-card">
          <div className="quote-icon">💬</div>
          <p className="testimonial-text">
            "Le meilleur food truck de la ville ! Les tacos sont incroyables 
            et l'ambiance est tellement cute ! Je recommande à 100% 💕"
          </p>
          <div className="testimonial-author">
            <span className="author-avatar">👩‍🦰</span>
            <span className="author-name">Marie L.</span>
            <span className="author-rating">⭐⭐⭐⭐⭐</span>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-content">
          <h2>Prêt(e) à craquer ? 🤤</h2>
          <p>Commandez maintenant et régalez-vous !</p>
          <Link to="/menu" className="cta-button">
            Commander maintenant 🛒
          </Link>
        </div>
        <div className="cta-decoration">
          <span>🍔</span>
          <span>🌮</span>
          <span>🍟</span>
          <span>🥤</span>
        </div>
      </section>
    </div>
  );
};

export default Accueil;

