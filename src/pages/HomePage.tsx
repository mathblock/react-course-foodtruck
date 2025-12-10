function HomePage() {
  return (
    <div className="home-page">
      <section className="hero">
        <h1>🌮 Bienvenue chez Foodtruck Paradise</h1>
        <p className="subtitle">Les meilleurs plats de rue, directement dans votre assiette</p>
        <a href="/menu" className="btn btn-primary">
          Découvrir le menu
        </a>
      </section>
      
      <section className="features">
        <div className="feature">
          <span className="icon">🚀</span>
          <h3>Livraison rapide</h3>
          <p>Vos plats livrés en moins de 30 minutes</p>
        </div>
        <div className="feature">
          <span className="icon">🌱</span>
          <h3>Produits frais</h3>
          <p>Ingrédients de qualité, sélectionnés avec soin</p>
        </div>
        <div className="feature">
          <span className="icon">❤️</span>
          <h3>Fait avec amour</h3>
          <p>Des recettes maison préparées par nos chefs</p>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
