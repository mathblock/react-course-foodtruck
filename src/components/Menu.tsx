
import React from "react";


import { menuItems } from "../data/menuData";
import MenuCard from "./MenuCard";



const Menu:React.FC = function(){

    const entrees = menuItems.filter((item)=> item.category==='entrées')
    const boissons = menuItems.filter((item)=> item.category === 'boissons')
    const desserts = menuItems.filter((item)=> item.category === 'desserts')
    const plats = menuItems.filter((item)=> item.category === 'plats')


    return(

        <div className="menu-container">

            <section id="plats">
                <h2>Plat princpaux</h2>
                <div className="menu-grid">
                    {plats.map((item)=> <MenuCard key={item.id} item={item}/>)}
                </div>
            </section>

            <section id="entrees">
                <h2> Plats d'entree </h2>
                <div className="menu-grid">
                    {entrees.map((item) => <MenuCard key={item.id} item={item} />)}
                </div>
            </section>

            <section id="desserts">
                <h2> Plats d'entree </h2>
                <div className="menu-grid">
                    {desserts.map((item) => <MenuCard key={item.id} item={item} />)}
                </div>
            </section>

            <section id="boissons">
                <h2> Plats d'entree </h2>
                <div className="menu-grid">
                    {boissons.map((item) => <MenuCard key={item.id} item={item} />)}
                </div>
            </section>
        </div>

    ) 
}

export default Menu