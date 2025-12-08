import { menuItems } from '../data/menuData';
import MenuCard from './MenuCard';
import type { MenuItem } from '../types/menu';
import type { CartItem } from '../types/cart';

interface FavoritesProps {
    favorites: string[];
    onAddToCart: (item: MenuItem) => void;
    onToggleFavorite: (itemId: string) => void;
    cart: CartItem[];
    onBackToMenu: () => void;
}

const Favorites = ({ favorites, onAddToCart, onToggleFavorite, cart, onBackToMenu }: FavoritesProps) => {
    const favoriteItems = menuItems.filter((item) => favorites.includes(item.id));

    return (
        <div className="section">
            <div className="container">
                <h2>Mes Favoris ❤️</h2>
                {favoriteItems.length > 0 ? (
                    <>
                        <p className="results-count">Vous avez {favoriteItems.length} plats favoris</p>
                        <div className="menu-grid">
                            {favoriteItems.map((item) => (
                                <MenuCard
                                    key={item.id}
                                    item={item}
                                    onAddToCart={onAddToCart}
                                    isFavorite={true}
                                    onToggleFavorite={onToggleFavorite}
                                    isInCart={cart.some(c => c.item.id === item.id)}
                                />
                            ))}
                        </div>
                    </>
                ) : (
                    <div className="no-results">
                        <p>Vous n'avez pas encore de favoris.</p>
                        <button
                            onClick={onBackToMenu}
                            style={{
                                marginTop: '1rem',
                                padding: '0.8rem 1.5rem',
                                background: '#ff6b35',
                                color: 'white',
                                border: 'none',
                                borderRadius: '4px',
                                cursor: 'pointer',
                                fontSize: '1rem'
                            }}
                        >
                            Retourner au Menu
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Favorites;
