import { useState } from 'react';
import type { MenuItem } from '../types/menu';

interface MenuCardProps {
    item: MenuItem;
    onAddToCart: (item: MenuItem) => void;
    isFavorite: boolean;
    onToggleFavorite: (itemId: string) => void;
}

const MenuCard = ({ item, onAddToCart, isFavorite, onToggleFavorite }: MenuCardProps) => {
    const [isAdded, setIsAdded] = useState(false);

    const handleAddToCart = () => {
        onAddToCart(item);
        setIsAdded(true);
        setTimeout(() => setIsAdded(false), 2000);
    };

    return (
        <div className="menu-card">
            <div className="card-image">
                <img src={item.imageUrl} alt={item.name} />
                {item.isNew && <span className="badge-new">Nouveau</span>}
            </div>
            <div className="card-content">
                <div className="card-header">
                    <h3>{item.name}</h3>
                    {item.isVegetarian && <span className="badge-vege" title="Végétarien">🌿</span>}
                </div>
                <p className="description">{item.description}</p>
                <div className="card-footer">
                    <span className="price">{item.price.toFixed(2)} €</span>
                    <div style={{ display: 'flex', gap: '10px' }}>
                        <button
                            onClick={() => onToggleFavorite(item.id)}
                            style={{
                                background: 'none',
                                border: 'none',
                                fontSize: '1.5rem',
                                cursor: 'pointer',
                                padding: '0 5px'
                            }}
                        >
                            {isFavorite ? '❤️' : '🤍'}
                        </button>
                        <button
                            onClick={handleAddToCart}
                            className={`btn-add ${isAdded ? 'added' : ''}`}
                        >
                            {isAdded ? 'Ajouté !' : 'Ajouter'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuCard;