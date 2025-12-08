import { useState } from 'react';
import MenuCard from './MenuCard';
import { menuItems } from '../data/menuData';
import type { MenuItem } from '../types/menu';

interface MenuProps {
    onAddToCart: (item: MenuItem) => void;
    favorites: string[];
    onToggleFavorite: (itemId: string) => void;
}

const Menu = ({ onAddToCart, favorites, onToggleFavorite }: MenuProps) => {
    const [activeCategory, setActiveCategory] = useState<string>('tous');
    const [searchTerm, setSearchTerm] = useState<string>('');

    const categories = [
        { key: 'tous', label: 'Tous' },
        { key: 'entrees', label: '🥗 Entrées' },
        { key: 'plats', label: '🍴 Plats Principaux' },
        { key: 'desserts', label: '🍰 Desserts' },
        { key: 'boissons', label: '🥤 Boissons' },
    ];

    const filteredItems = menuItems
        .filter(item => activeCategory === 'tous' || item.category === activeCategory)
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
                    <button
                        key={cat.key}
                        className={`filter-btn ${activeCategory === cat.key ? 'active' : ''}`}
                        onClick={() => setActiveCategory(cat.key)}
                    >
                        {cat.label}
                    </button>
                ))}
            </div>

            <div className="menu-results">
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

export default Menu;