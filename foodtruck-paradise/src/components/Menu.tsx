
import { useState } from 'react';
import { menuItems } from '../data/menuData';
import MenuCard from './MenuCard';
import type { MenuItem, Category } from '../types/menu';

interface MenuProps {
    onAddToCart?: (item: MenuItem) => void;
}

const ALL_KEY = 'tous' as const;

function Menu({ onAddToCart }: MenuProps) {
    const [activeCategory, setActiveCategory] = useState<string>(ALL_KEY);
    const [searchTerm, setSearchTerm] = useState<string>('');

    const categories: { key: Category | typeof ALL_KEY; label: string }[] = [
        { key: 'tous', label: 'Tous' },
        { key: 'entrees', label: 'Entrées' },
        { key: 'plats', label: 'Plats' },
        { key: 'desserts', label: 'Desserts' },
        { key: 'boissons', label: 'Boissons' },
    ];

    const term = searchTerm.trim().toLowerCase();

    const filteredItems = menuItems.filter(item => {
        const matchesCategory = activeCategory === ALL_KEY || item.category === activeCategory;
        const matchesSearch =
            term === '' ||
            item.name.toLowerCase().includes(term) ||
            item.description.toLowerCase().includes(term);
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="menu">
            <div className="menu-controls">
                <div className="menu-categories">
                    {categories.map(cat => (
                        <button
                            key={String(cat.key)}
                            type="button"
                            className={`category-btn ${activeCategory === String(cat.key) ? 'active' : ''}`}
                            onClick={() => setActiveCategory(String(cat.key))}
                            aria-pressed={activeCategory === String(cat.key)}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>

                <div className="search-controls">
                    <div className="result-count">{filteredItems.length} produit{filteredItems.length > 1 ? 's' : ''}</div>
                    <div className="search-box">
                        <input
                            type="search"
                            className="search-input"
                            aria-label="Rechercher"
                            placeholder="Rechercher un plat..."
                            value={searchTerm}
                            onChange={e => setSearchTerm(e.target.value)}
                        />
                        <button
                            type="button"
                            className="search-clear-btn"
                            aria-label="Effacer la recherche"
                            onClick={() => setSearchTerm('')}
                            title="Effacer"
                        >
                        </button>
                    </div>
                </div>
            </div>

            <div className="menu-grid" aria-live="polite">
                {filteredItems.length === 0 ? (
                    <div className="no-products">Aucun produit</div>
                ) : (
                    filteredItems.map(item => (
                        <MenuCard key={item.id} item={item} onAddToCart={onAddToCart ?? (() => {})} />
                    ))
                )}
            </div>
        </div>
    );
}

export default Menu;
