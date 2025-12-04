function Header() {
  return (
    <header className="header">
      <div className="nav-container">
        <h1 className="nav-logo">🌮 Food Truck Paradise</h1>

        <nav className="navbar">
          <a href="#menu" className="nav-item">Menu</a>
          <a href="#about" className="nav-item">À propos</a>
          <a href="#contact" className="nav-item">Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;

