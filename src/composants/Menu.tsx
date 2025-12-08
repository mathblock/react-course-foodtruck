import { menuItems } from "../data/menuData";
import MenuCard from "./MenuCard";
import { useState } from "react";
import type { MenuItem } from "../types/menu";

interface MenuProps {
  onAddToCart: (item: MenuItem) => void;
}

function Menu({ onAddToCart }: MenuProps) {
  const [activeCategory, setActiveCategory] = useState<string>("tous");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const categories = [
    { key: "tous", title: "Tous" },
    { key: "entrees", title: "🥗 Entrées" },
    { key: "plats", title: "🍔 Plats" },
    { key: "desserts", title: "🍰 Desserts" },
    { key: "boissons", title: "🥤 Boissons" },
  ];

  const filteredItems = menuItems
    .filter((item) => activeCategory === "tous" || item.category === activeCategory)
    .filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

  const resultsCount = filteredItems.length;

  return (
    <section id="menu">
      <div className="menu-controls">
        <div className="search">
          <input
            type="text"
            placeholder="Rechercher un plat ou description..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            aria-label="Recherche"
          />
          <button
            className="btn-clear"
            onClick={() => setSearchTerm("")}
            aria-label="Effacer la recherche"
          >
            ❌
          </button>
        </div>

        <div className="category-buttons">
          {categories.map((cat) => (
            <button
              key={cat.key}
              className={`cat-btn ${activeCategory === cat.key ? "active" : ""}`}
              onClick={() => setActiveCategory(cat.key)}
            >
              {cat.title}
            </button>
          ))}
        </div>

        <p className="results-count">Résultats: {resultsCount}</p>
      </div>

      {resultsCount === 0 ? (
        <p className="no-results">Aucun produit</p>
      ) : (
        categories
          .filter((c) => c.key !== "tous")
          .map((cat) => {
            const itemsForCat = filteredItems.filter((item) => item.category === cat.key);
            if (itemsForCat.length === 0) return null;

            return (
              <div key={cat.key} className="menu-section">
                <h2>{cat.title.replace(/^[^\s]+\s?/, "").trim() ? cat.title : cat.title}</h2>
                <div className="menu-grid">
                  {itemsForCat.map((item) => (
                    <MenuCard key={item.id} item={item} onAddToCart={onAddToCart} />
                  ))}
                </div>
              </div>
            );
          })
      )}
    </section>
  );
}

export default Menu;

