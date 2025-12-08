import { useState } from 'react';
import { type MenuItem } from '../types/menu';

interface MenuCardProps {
    item: MenuItem;
    onAddToCart: (item: MenuItem) => void;
}

const MenuCard = ({ item, onAddToCart }: MenuCardProps) => {
    const [isAdded, setIsAdded] = useState(false);

    const handleAddToCart = () => {
        onAddToCart(item);
        setIsAdded(true);
        setTimeout(() => setIsAdded(false), 500);
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
                    {item.isVegetarian && <span className="badge-vege" title="Végétarien">🌱</span>}
                </div>
                <p className="description">{item.description}</p>
                <div className="card-footer">
                    <span className="price">{item.price.toFixed(2)} €</span>
                    <button 
                        className="btn-add" 
                        onClick={handleAddToCart}
                        style={isAdded ? { backgroundColor: '#27ae60' } : {}}
                    >
                        {isAdded ? 'Produit ajouté' : 'Ajouter'}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default MenuCard;
