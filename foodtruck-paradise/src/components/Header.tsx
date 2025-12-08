
interface HeaderProps {
  cartItemsCount?: number;
}

function Header({ cartItemsCount = 0 }: HeaderProps) {
  return (
    <header className="app-header">
      <div className="container">
        <div className="logo">
          Food Truck Paradise
        </div>
        <div className="tagline">
          Le meilleur de la street food à votre portée !
        </div>
        <nav className="nav">
          <a href="#menu" className="nav-link">Menu</a>
          <a href="#about" className="nav-link">À propos</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>
        {cartItemsCount > 0 && (
          <div className="cart-icon">
            <span className="cart-badge"> Panier {cartItemsCount}</span>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;