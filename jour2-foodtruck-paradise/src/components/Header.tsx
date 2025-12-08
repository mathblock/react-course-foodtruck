interface HeaderProps {
  onNavClick: (page: string) => void;
  cartItemsCount: number;
}

const Header = ({ onNavClick, cartItemsCount }: HeaderProps) => {
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
          <button onClick={() => onNavClick('menu')} className="nav-link">Menu</button>
          <button onClick={() => onNavClick('about')} className="nav-link">À propos</button>
          <button onClick={() => onNavClick('contact')} className="nav-link">Contact</button>
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