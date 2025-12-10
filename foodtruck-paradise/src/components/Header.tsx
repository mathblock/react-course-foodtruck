import { Link } from "react-router-dom";
import { useFavorites } from "../hooks/useFavorites";

function Header() {

  const {count}= useFavorites();
  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">
          <h1>🌮 Foodtruck Paradise</h1>
        </Link>
        <nav>
          <Link to="/">Accueil</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/cart">Panier</Link>
          <Link to="/favorites">Favoris ({count})</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
