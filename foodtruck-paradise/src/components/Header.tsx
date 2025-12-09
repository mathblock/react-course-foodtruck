import { Link } from 'react-router-dom';

function Header() {
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
        </nav>
      </div>
    </header>
  );
}

export default Header;
