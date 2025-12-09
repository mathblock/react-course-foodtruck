
import { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import MenuCard from '../components/MenuCard';
import { menuItems } from '../data/menuData';
import type { MenuItem } from '../types/menu';

interface CategoryPageProps {
    onAddToCart: (item: MenuItem) => void;
    favorites: string[];
    onToggleFavorite: (itemId: string) => void;
}

const CategoryPage = ({ onAddToCart, favorites, onToggleFavorite }: CategoryPageProps) => {
    const { categoryName } = useParams<{ categoryName: string }>();
    const [searchTerm, setSearchTerm] = useState<string>('');

    const categories = [
        { key: 'tous', label: 'Tous' },
        { key: 'entrees', label: '🥗 Entrées' },
        { key: 'plats', label: '🍴 Plats Principaux' },
        { key: 'desserts', label: '🍰 Desserts' },
        { key: 'boissons', label: '🥤 Boissons' },
    ];


    const isValidCategory = categories.some(c => c.key === categoryName) || categoryName === 'tous';

    if (!isValidCategory) {
        return <Navigate to="/404" />;
    }

    const filteredItems = menuItems
        .filter(item => categoryName === 'tous' || item.category === categoryName)
        .filter(item =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.description.toLowerCase().includes(searchTerm.toLowerCase())
        );

    return (
        <div className="menu">
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Rechercher un plat..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-input"
                />
                {searchTerm && (
                    <button className="clear-search" onClick={() => setSearchTerm('')}>
                        ❌
                    </button>
                )}
            </div>

            <div className="category-filters">
                {categories.map(cat => (
                    <Link
                        key={cat.key}
                        to={cat.key === 'tous' ? '/' : `/menu/category/${cat.key}`}
                        className={`filter-btn ${categoryName === cat.key ? 'active' : ''}`}
                        style={{ textDecoration: 'none', display: 'inline-block' }}
                    >
                        {cat.label}
                    </Link>
                ))}
            </div>

            <div className="menu-results">
                <h2>{categories.find(c => c.key === categoryName)?.label}</h2>
                {filteredItems.length === 0 ? (
                    <div className="no-results">Aucun produit ne correspond à votre recherche.</div>
                ) : (
                    <div className="menu-grid">
                        {filteredItems.map(item => (
                            <MenuCard
                                key={item.id}
                                item={item}
                                onAddToCart={onAddToCart}
                                isFavorite={favorites.includes(item.id)}
                                onToggleFavorite={onToggleFavorite}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default CategoryPage;
