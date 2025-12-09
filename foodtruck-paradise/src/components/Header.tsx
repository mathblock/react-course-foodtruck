import { Link } from 'react-router-dom';

interface HeaderProps {
  cartItemsCount: number;
  isCartOpen: boolean;
  setIsCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header = ({ cartItemsCount, isCartOpen, setIsCartOpen }: HeaderProps) => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">🌮 Food Truck Paradise</div>
        <p className="tagline">Les meilleurs plats de rue en ville !</p>
        <nav className="nav">
          <Link to="/" className="nav-link">Menu</Link>
          <Link to="/about" className="nav-link">À propos</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
          <div className="cart-icon" onClick={() => setIsCartOpen(!isCartOpen)} role="button" aria-label="Ouvrir le panier">
            🛒
            {cartItemsCount > 0 && (
              <span className="cart-count">{cartItemsCount}</span>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;