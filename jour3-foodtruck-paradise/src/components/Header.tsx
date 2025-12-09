import { Link } from 'react-router-dom';

interface HeaderProps {
  cartItemsCount: number;
}

const Header = ({ cartItemsCount }: HeaderProps) => {
  const scrollToCart = () => {
    const cartElement = document.getElementById('cart-summary');
    if (cartElement) {
      cartElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo">🦄 Food Truck Pony Club 🌈</div>
        <p className="tagline">✨ Des saveurs magiques et gourmandes ✨</p>
        <nav className="nav">
          <Link to="/" className="nav-link">Accueil</Link>
          <Link to="/menu" className="nav-link">Menu</Link>
          <Link to="/about" className="nav-link">À propos</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
          {cartItemsCount > 0 && (
            <div className="cart-display" onClick={scrollToCart}>
              <div className="cart-icon-wrapper">
                <span className="cart-icon">🛒</span>
                <span className="cart-badge">{cartItemsCount}</span>
              </div>
              <div className="cart-info-text">
                <span className="cart-label">Mon Panier</span>
                <span className="cart-items-count">
                  {cartItemsCount} {cartItemsCount === 1 ? 'article' : 'articles'}
                </span>
              </div>
            </div>
          )}        
        </nav>
      </div>
    </header>
  );
};

export default Header;