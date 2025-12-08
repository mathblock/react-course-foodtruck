import { useState } from "react";
import "../module/MenuCard.Module.css";
import type { MenuProps } from '../types/menus';

interface MenuCardProps {
    item: MenuProps;
    onAddToCart: (item: MenuProps) => void;
}

const MenuCard: React.FC<MenuCardProps> = ({ item, onAddToCart }) => {
    const { name, description, price, imageUrl, isVegetarian, isNew } = item;
    const [btnText, setBtnText] = useState("Ajouter");

    const handleAdd = () => {
        onAddToCart(item);
        setBtnText("Ajouté !");
        setTimeout(() => setBtnText("Ajouter"), 600);
    };

    return (
        <div className="menu-card">
            <div className="card-image">
                <img src={imageUrl} alt={name} />
                {isNew && <span className="new-badge">Nouveau</span>}
            </div>
            <div className="card-content">
                <div className="card-header">
                    <h3>{name}</h3>
                    {isVegetarian && <span className="vegetarian-badge">Végétarien</span>}
                </div>
                <p className="description">{description}</p>
                <div className="card-footer">
                    <span className="price">{price.toFixed(2)} €</span>
                    <button className="btn-add" onClick={handleAdd}>
                        {btnText}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MenuCard;