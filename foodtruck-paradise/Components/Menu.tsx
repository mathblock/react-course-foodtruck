import React from "react";
import { menuItems } from "../src/data/menuData";
import MenuCard from "./MenuCard";

function Menu() {
  const categories = [
    { key: "plats", label: "🍴 Plats Principaux" },
    { key: "entrées", label: "Entrées" },
    { key: "desserts", label: "Desserts" },
    { key: "boissons", label: "Boissons" },
  ];

  return (
    <div id="menu">
      {categories.map(cat => (
        <section key={cat.key}>
          <h2>{cat.label}</h2>
          <div className="menu-grid">
            {menuItems
              .filter(item => item.category === cat.key)
              .map(item => (
                <MenuCard key={item.id} item={item} />
              ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export default Menu;