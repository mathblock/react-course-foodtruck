import { Link } from "react-router-dom";
import { menuItems } from "../data/menuData";


function FavoritesPage() {
  const { favorites } = useFavorites();

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
      <h2>❤️ Mes Favoris ({favoriteItems.length})</h2>

      <div className="menu-grid">
        {favoriteItems.map(item => (
          <MenuCard key={item.id} item={item} onAddToCart={() => {}} />
        ))}
      </div>
    </div>
  );
}

export default FavoritesPage;
