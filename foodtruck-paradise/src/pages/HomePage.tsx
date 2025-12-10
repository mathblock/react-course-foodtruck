import { useEffect, useState } from "react";
import { type MenuItem } from "../types/menu";

function HomePage() {
  const [menu, setMenu] = useState<MenuItem[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      // Example fetch to verify API is reachable
      try {
        const response = await fetch('/api/menu');
        if (!response.ok) {
          console.error('API health check failed');
        } else {
          const data = await response.json();
          setMenu(data);
        }

      } catch (error) {
        console.error('Error connecting to API:', error);
      }
    }

    fetchData();
  }, []);

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
          <span className="icon icon-heart"></span>
          <h3>Fait avec amour</h3>
          <p>Des recettes maison préparées par nos chefs</p>
        </div>
      </section>
      <section className="menu-preview">
        <h2>Aperçu du menu</h2>
        {menu ? (
          <ul className="menu-items">
            {menu.slice(0, 3).map((item: MenuItem) => (
              <li key={item.id} className="menu-item">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <span className="price">{item.price} €</span>
              </li>
            ))}
          </ul>
        ) : (
          <p>Chargement du menu...</p>
        )}
      </section>
      <section className="cta">
        <h2>Prêt à commander ?</h2>
        <a href="/order" className="btn btn-secondary">
          Passer une commande
        </a>
      </section>
    </div>
  );
}

export default HomePage;
