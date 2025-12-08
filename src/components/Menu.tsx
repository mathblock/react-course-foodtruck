import { useState } from "react";
import type { MenuItem } from "../types/menu";
import { menuItems } from "../data/menuData";
import MenuCard from "./MenuCard";
import './Menu.css'; // Assure-toi d'y mettre le CSS fourni

type MenuProps = {
  onAddToCart: (item: MenuItem) => void;
};

export default function Menu({ onAddToCart }: MenuProps) {
  // 1. États pour le filtrage
  const [activeCategory, setActiveCategory] = useState<string>("tous");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const categories = ["tous", "entrées", "plats", "desserts", "boissons"] as const;

  const categoryLabels: Record<string, string> = {
    tous: "🏠 Tous",
    entrées: "🥗 Entrées",
    plats: "🍔 Plats",
    desserts: "🍰 Desserts",
    boissons: "🥤 Boissons",
  };

  // 2. Logique de filtrage double
  const filteredItems = menuItems.filter((item) => {
    const matchesCategory = activeCategory === "tous" || item.category === activeCategory;
    const matchesSearch = 
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="menu-container">
      {/* 3. Barre de recherche */}
      <div className="search-bar">
        <input
          type="text"
          className="search-input"
          placeholder="Rechercher un plat, un ingrédient..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {searchTerm && (
          <button className="clear-search" onClick={() => setSearchTerm("")}>❌</button>
        )}
      </div>

      {/* 4. Boutons de catégories */}
      <div className="category-filters">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${activeCategory === cat ? "active" : ""}`}
            onClick={() => setActiveCategory(cat)}
          >
            {categoryLabels[cat]}
          </button>
        ))}
      </div>

      {/* 5. Affichage des résultats */}
      <div className="results-info">
        {filteredItems.length} produit(s) trouvé(s)
      </div>

      <div className="grid">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <MenuCard key={item.id} item={item} onAddToCart={onAddToCart} />
          ))
        ) : (
          <div className="no-results">
            <p>Désolé, aucun produit ne correspond à votre recherche. 🌮</p>
            <button onClick={() => {setSearchTerm(""); setActiveCategory("tous")}}>
              Réinitialiser les filtres
            </button>
          </div>
        )}
      </div>
    </div>
  );
}