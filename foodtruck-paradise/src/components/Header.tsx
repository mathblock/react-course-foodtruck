interface HeaderProps {
  onNavClick: (page: string) => void;
  cartItemsCount: number;
  isCartOpen: boolean;
  setIsCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header = ({ onNavClick, cartItemsCount, isCartOpen, setIsCartOpen }: HeaderProps) => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">🌮 Food Truck Paradise</div>
        <p className="tagline">Les meilleurs plats de rue en ville !</p>
        <nav className="nav">
          <button onClick={() => onNavClick('menu')} className="nav-link">Menu</button>
          <button onClick={() => onNavClick('about')} className="nav-link">À propos</button>
          <button onClick={() => onNavClick('contact')} className="nav-link">Contact</button>
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