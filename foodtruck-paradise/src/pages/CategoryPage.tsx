import { useParams, Link } from 'react-router-dom';
import { menuItems } from '../data/menuData';
import MenuCard from '../components/MenuCard';
import type { MenuItem } from '../types/menu';
import type { CartItem } from '../types/cart';
import { useState } from 'react';

interface CategoryPageProps {
    onAddToCart: (item: MenuItem) => void;
    favorites: string[];
    onToggleFavorite: (itemId: string) => void;
    cart: CartItem[];
}

const CategoryPage = ({ onAddToCart, favorites, onToggleFavorite, cart }: CategoryPageProps) => {
    const { categoryName } = useParams<{ categoryName: string }>();
    const [searchTerm, setSearchTerm] = useState("");

    const categoryLabels: Record<string, string> = {
        entrees: '🥗 Entrées',
        plats: '🍔 Plats de resistance',
        desserts: '🍰 Desserts',
        boissons: '🥤 Boissons',
    };

    const currentLabel = categoryName ? categoryLabels[categoryName] : 'Catégorie inconnue';

    const filteredItems = menuItems
        .filter((item) => item.category === categoryName)
        .filter((item) =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.description.toLowerCase().includes(searchTerm.toLowerCase())
        );

    if (!currentLabel || currentLabel === 'Catégorie inconnue') {
        return (
            <div className="section">
                <div className="container">
                    <h2>Catégorie introuvable</h2>
                    <Link to="/menu" className="btn-back">Retour au menu</Link>
                </div>
            </div>
        )
    }

    return (
        <div className="section">
            <div className="container">
                <h2>{currentLabel}</h2>

                <div className="actions-bar" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                    <Link to="/menu" style={{ textDecoration: 'none', color: '#ff6b35', fontWeight: 'bold' }}>&larr; Retour à tout le menu</Link>
                    <div className="search-bar" style={{ margin: 0 }}>
                        <input
                            type="text"
                            className="search-input"
                            placeholder="Rechercher dans cette catégorie..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>

                {filteredItems.length > 0 ? (
                    <>
                        <p className="results-count">{filteredItems.length} résultat(s) trouvé(s)</p>
                        <div className="menu-grid">
                            {filteredItems.map((item) => (
                                <MenuCard
                                    key={item.id}
                                    item={item}
                                    onAddToCart={onAddToCart}
                                    isFavorite={favorites.includes(item.id)}
                                    onToggleFavorite={onToggleFavorite}
                                    isInCart={cart.some(c => c.item.id === item.id)}
                                />
                            ))}
                        </div>
                    </>
                ) : (
                    <div className="no-results">
                        <p>Aucun plat trouvé dans cette catégorie.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CategoryPage;
