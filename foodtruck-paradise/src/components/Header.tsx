import { Link } from 'react-router-dom';
import { GiTacos } from 'react-icons/gi';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">
          <h1><GiTacos /> Foodtruck Paradise</h1>
        </Link>
        <nav>
          <Link to="/">Accueil</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/cart" className="cart-link">Panier</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
