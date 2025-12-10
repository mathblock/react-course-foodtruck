import { Link } from "react-router-dom";

interface HeaderProps {
  onNavigate?: (page: "home" | "menu") => void;
}

function Header({ onNavigate }: HeaderProps) {
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    page: "home" | "menu"
  ) => {
    e.preventDefault();
    onNavigate?.(page);
  };

  return (
    <header className="header">
      <div className="container">
        <a href="/" className="logo" onClick={(e) => handleNavClick(e, "home")}>
          <h1>🌮 Foodtruck Paradise</h1>
        </a  > 
        <nav>
          <a href="/" onClick={(e) => handleNavClick(e, "home")}>
            Accueil
          </a>
          <a href="/menu" onClick={(e) => handleNavClick(e, "menu")}>
            Menu
          </a>
          <a href="/cart">Panier</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
