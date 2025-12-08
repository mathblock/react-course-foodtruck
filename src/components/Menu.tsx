import { useState } from "react";
import { menuItems } from "../data/menuData";
import MenuCard from "./MenuCard";
import type { MenuItem } from "../types/menu";

type MenuProps = {
  onAddToCart: (item: MenuItem) => void;
};

export default function Menu({ onAddToCart }: MenuProps) {
  const [activeCategory, setActiveCategory] = useState("tous");
  const [searchTerm, setSearchTerm] = useState("");

  // FILTRAGE DOUBLE : catégorie ET recherche
  const filteredItems = menuItems
    .filter((item) => activeCategory === "tous" || item.category === activeCategory)
    .filter(
      (item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

  const categories = [
    { id: "tous", label: "🍽️ Tous", value: "tous" },
    { id: "entrees", label: "🥗 Entrées", value: "entrees" },
    { id: "plats", label: "🍔 Plats", value: "plats" },
    { id: "desserts", label: "🍰 Desserts", value: "desserts" },
    { id: "boissons", label: "🥤 Boissons", value: "boissons" },
  ];

  return (
    <div className="menu" id="menu">
      {/* BARRE DE RECHERCHE */}
      <div className="search-bar">
        <input
          type="text"
          className="search-input"
          placeholder="🔍 Rechercher un plat..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {searchTerm && (
          <button
            className="search-clear"
            onClick={() => setSearchTerm("")}
            aria-label="Effacer"
          >
            ❌
          </button>
        )}
      </div>

      {/* FILTRES PAR CATÉGORIE */}
      <div className="category-filters">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.value)}
            className={`filter-btn ${activeCategory === cat.value ? "active" : ""}`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* NOMBRE DE RÉSULTATS */}
      <p className="results-count">
        {filteredItems.length} plat{filteredItems.length !== 1 ? "s" : ""} trouvé
        {filteredItems.length !== 1 ? "s" : ""}
      </p>

      {/* LISTE DES PLATS */}
      {filteredItems.length === 0 ? (
        <div className="no-results">
          <p>😔 Aucun plat trouvé</p>
          <button onClick={() => { setSearchTerm(""); setActiveCategory("tous"); }} className="reset-filters">
            Réinitialiser les filtres
          </button>
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
