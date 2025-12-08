

interface HeaderProps {
  onNavClick: (page: string) => void;
  cartItemsCount: number;
  favoritesCount: number;
}

const Header = ({ onNavClick, cartItemsCount, favoritesCount }: HeaderProps) => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">🌮 Food Truck Paradise</div>
        <p className="tagline">Les meilleurs plats de rue en ville !</p>
        <nav className="nav">
          <button onClick={() => onNavClick('menu')} className="nav-link">Menu</button>
          <button onClick={() => onNavClick('about')} className="nav-link">À propos</button>
          <button onClick={() => onNavClick('contact')} className="nav-link">Contact</button>
          <button onClick={() => onNavClick('favorites')} className="nav-link">
            ❤️ Favoris {favoritesCount > 0 && `(${favoritesCount})`}
          </button>
          <button onClick={() => onNavClick('cart')} className="nav-link" style={{ position: 'relative' }}>
            🛒 Panier
            {cartItemsCount > 0 && (
              <span className="cart-badge">{cartItemsCount}</span>
            )}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;