interface HeaderProps {
  onNavClick: (page: string) => void;
  totalItems: number;
  isCartOpen: boolean;
  setIsCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header = ({ onNavClick, totalItems, isCartOpen, setIsCartOpen }: HeaderProps) => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">🌮 Food Truck Paradise</div>
        <p className="tagline">Les meilleurs plats de rue en ville !</p>
        <nav className="nav">
          <button onClick={() => onNavClick('menu')} className="nav-link">Menu</button>
          <button onClick={() => onNavClick('about')} className="nav-link">À propos</button>
          <button onClick={() => onNavClick('contact')} className="nav-link">Contact</button>
          <div className="cart-icon" onClick={() => setIsCartOpen(!isCartOpen)}>
            🛒
            {totalItems > 0 && (
              <span className="cart-count">{totalItems}</span>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;