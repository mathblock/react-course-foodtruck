
import React from "react";
import type { MenuItem } from "../types/menu";
import './MenuCard.css'

interface MenuCardProps {
    item : MenuItem
}

const MenuCard:React.FC<MenuCardProps> = function({item}){

    return(
        <div className="menu-card">
            { /* header of card  */}
            <div className="card-image">
                <img src={item.imageUrl} alt={item.name} />
                {item.isNew && <span className="badge-new">Nouveau</span>}
            </div>

            { /* content of card  */}

            <div className="card-content">
                <div className="card-header">
                    <h3>{item.name}</h3>
                    {item.isVegetarian && <span className="badge-vege">🌱</span>}
                </div>
            </div>

            <p className="description">{item.description}</p>


            { /*  footer of card  */}

            <div className="footer-card">
                <span className="price">{item.price.toFixed(2)} $</span>
                <button className="btn-card"> Ajouter </button>
            </div>


        </div>
    )

}



export default MenuCard