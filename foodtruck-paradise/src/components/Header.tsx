import { useFavorites } from "../hooks/useFavorites";

interface HeaderProps {
  onNavigate?: (page: "home" | "menu" | "favorites") => void;
}

function Header({ onNavigate }: HeaderProps) {

  const {count}= useFavorites();

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    page: "home" | "menu" | "favorites"
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
          <a href="/menu">
            Menu
          </a>
          <a href="/cart">Panier</a>
          <a href="/favorites" >Favoris ({count})</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
