import { Link } from "react-router-dom";
import { menuItems } from "../data/menuData";
import { MenuCard } from "../components/menuCard";
import { useFavorites } from "../hooks/useFavorites";


function FavoritesPage() {
  const { favorites,count } = useFavorites();

  const favoriteItems = menuItems.filter(item =>
    favorites.includes(item.id)
  );

  if (favoriteItems.length === 0) {
    return (
      <div className="favorites-page empty">
        <h2>❤️ Mes Favoris</h2>
        <p>Vous n'avez aucun plat en favori.</p>

        <Link to="/menu" className="btn-back">
          Découvrir le menu 🍽️
        </Link>
      </div>
    );
  }

  return (
    <div className="favorites-page">
      <h2>❤️ Mes Favoris ({count()})</h2>

      <div className="menu-grid">
        {favoriteItems.map(item => (
          <MenuCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default FavoritesPage;
