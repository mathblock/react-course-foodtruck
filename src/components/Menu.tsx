import { useState } from 'react';
import menuData, { type MenuItem } from '../data/menuData';
import MenuCard from './MenuCard';

interface MenuProps {
    onAddToCart: (item: MenuItem) => void;
}

const Menu = ({ onAddToCart }: MenuProps) => {
    const [activeCategory, setActiveCategory] = useState<string>('tous');
    const [searchTerm, setSearchTerm] = useState<string>('');

    const filteredItems = menuData
        .filter((item) => activeCategory === 'tous' || item.category === activeCategory)
        .filter((item) =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.description.toLowerCase().includes(searchTerm.toLowerCase())
        );

    const categories = [
        { id: 'tous', label: 'Tous' },
        { id: 'entrees', label: '🥗 Entrées' },
        { id: 'plats', label: '🍔 Plats' },
        { id: 'desserts', label: '🍰 Desserts' },
        { id: 'boissons', label: '🥤 Boissons' },
    ];

    return (
        <div className="menu-container">
            
            <div className="search-bar">
                <input 
                    type="text" 
                    placeholder="Rechercher un plat..." 
                    className="search-input"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                {searchTerm && (
                    <button 
                        onClick={() => setSearchTerm('')}
                        style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.2rem' }}
                    >
                        x
                    </button>
                )}
            </div>

            <div className="category-filters">
                {categories.map((cat) => (
                    <button
                        key={cat.id}
                        className={`filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
                        onClick={() => setActiveCategory(cat.id)}
                    >
                        {cat.label}
                    </button>
                ))}
            </div>

            <p style={{ textAlign: 'center', marginBottom: '2rem', color: '#666' }}>
                {filteredItems.length} résultat{filteredItems.length > 1 ? 's' : ''} trouvé{filteredItems.length > 1 ? 's' : ''}
            </p>

            {filteredItems.length === 0 ? 
            (
                <div style={{ textAlign: 'center', padding: '2rem', fontSize: '1.2rem', color: '#666' }}>
                    Aucun produit ne correspond à votre recherche.
                </div>
            ) : (
                <div className="menu-grid">
                    {filteredItems.map((item) => (
                        <MenuCard key={item.id} item={item} onAddToCart={onAddToCart} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default Menu;
