import './Header.css'


type HeaderProps = {
    cartItemsCount: number;
  };
  
  function Header({ cartItemsCount }: HeaderProps) {
    return (
      <header className="header">
        <div className="container">
          <div className="logo">🌮 Food Truck Paradise</div>
          <p className="tagline">Le meilleur street food de la ville</p>
  
          <nav className="nav">
            <a className="nav-link" href="#">Menu</a>
            <a className="nav-link" href="#">À propos</a>
            <a className="nav-link" href="#">Contact</a>
  
            <button className="cart-button">
              🛒
              {cartItemsCount > 0 && (
                <span className="cart-badge">{cartItemsCount}</span>
              )}
            </button>
          </nav>
        </div>
      </header>
    );
  }
  
  export default Header;
  