import { Link } from "react-router-dom";

/* interface HeaderProps {
  cartItemsCount: number;
  children: React.ReactNode; // Si vous passez la navigation en tant qu'enfant
} */




function Header() {
  return (
    <header className="header">
      <div className="container">
        <a href="/" className="logo">
          <h1>🌮 Foodtruck Paradise</h1>
        </a>
        <nav>
          <a href="/">Accueil</a>
          <a href="/menu">Menu</a>
          <a href="/cart">Panier</a>
          <Link to="/orders">Historique des commandes</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
