import MenuCard from './MenuCard';
import { menuItems } from '../data/menuData';
import type { MenuItem } from '../types/menu';

interface FavoritesProps {
    favorites: string[];
    onToggleFavorite: (itemId: string) => void;
    onAddToCart: (item: MenuItem) => void;
}

const Favorites = ({ favorites, onToggleFavorite, onAddToCart }: FavoritesProps) => {
    const favoriteItems = menuItems.filter(item => favorites.includes(item.id));

    return (
        <div className="section">
            <div className="container">
                <h2>❤️ Vos Favoris</h2>
                {favoriteItems.length === 0 ? (
                    <div className="no-results">
                        <p>Vous n'avez pas encore de favoris.</p>
                        <p>Cliquez sur le cœur ❤️ des articles pour les ajouter ici !</p>
                    </div>
                ) : (
                    <div className="menu-grid">
                        {favoriteItems.map(item => (
                            <MenuCard
                                key={item.id}
                                item={item}
                                onAddToCart={onAddToCart}
                                isFavorite={true}
                                onToggleFavorite={onToggleFavorite}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Favorites;
