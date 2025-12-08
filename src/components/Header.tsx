type HeaderProps = {
  cartItemsCount: number;
};

export default function Header({ cartItemsCount }: HeaderProps) {
  return (
    <header className="header">
      <div className="container">
        <div className="header-top">
          <h1 className="logo">🌮 Food Truck Paradise</h1>
          <button className="cart-button">
            🛒 Panier
            {cartItemsCount > 0 && (
              <span className="cart-badge">{cartItemsCount}</span>
            )}
          </button>
        </div>
        <p className="tagline">Le meilleur du street-food, où que vous soyez !</p>

        <nav className="nav">
          <a href="#menu" className="nav-link">Menu</a>
          <a href="#" className="nav-link">À propos</a>
          <a href="#" className="nav-link">Contact</a>
        </nav>
      </div>
    </header>
  );
}
