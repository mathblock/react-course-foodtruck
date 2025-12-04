import "../module/MenuCard.Module.css";
import type {MenuProps }from '../types/menus';

interface MenuCardProps {
    item: MenuProps;
}

const MenuCard: React.FC<MenuCardProps> = ({ item }) => {
    const { name, description, price, imageUrl, isVegetarian, isNew } = item;

    return (
        <div className="menu-card">
            <div className= "card-image" >
                <img src={imageUrl} alt={name} />
                {isNew && <span className="new-badge">Nouveau</span>}
            </div>
            <div className= "card-content">
                <div className="card-header">
                    <h3>{name}</h3>
                    {isVegetarian && <span className="vegetarian-badge">Végétarien</span>}
                </div>
                <p className="description"> {description}</p>
                <div className="card-footer">
                    <span className="price">{price.toFixed(2)} €</span>
                    <button className="btn-add">Ajouter</button>
                </div>
            </div>
        </div>
    );
};

export default MenuCard;