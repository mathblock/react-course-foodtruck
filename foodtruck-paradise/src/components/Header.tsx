function Header() {
  return (
    <header className="header">
      <div className="container">
        <a href="/" className="logo">
          <h1>🌮 Foodtruck Paradise</h1>
        </a>
        <nav>
          <a href="/">Accueil</a>
          <a href="/menu">Menu</a>
          <a href="/cart">Panier</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
