// src/components/Menu1.tsx  (ou MenuList.tsx)
import { useState } from "react";
import "../module/MenuList.css";
import MenuCard from "./MenuCard";
import menuItems from "../data/menuData";
import type { MenuProps } from "../types/menus";
import { useOutletContext } from "react-router-dom";
import { useParams } from "react-router-dom";

interface LayoutContext {
  addToCart: (item: MenuProps) => void;
}

const MenuList = () => {
  const {categoryName} = useParams<{categoryName: string}>();
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState(categoryName || "tous");

  const { addToCart } = useOutletContext<LayoutContext>();

  const filtered = menuItems
    .filter(item => activeCategory === "tous" || item.category === activeCategory)
    .filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

  const categories = [
    { id: "tous", label: "Tous", emoji: "👌🏾" },
    { id: "entree", label: "Entrées", emoji: "🍽️" },
    { id: "plat principale", label: "Plats", emoji: "🥘" },
    { id: "dessert", label: "Desserts", emoji: "🍧" },
    { id: "boisson", label: "Boissons", emoji: "🍷" },
  ];

  return (
    <div className="menu-list">
      <div style={{ maxWidth: 600, margin: "2rem auto", position: "relative" }}>
        <input
          type="text"
          placeholder="Rechercher un plat..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            width: "100%",
            padding: "1rem 3rem 1rem 1rem",
            borderRadius: 25,
            border: "2px solid #ddd",
            fontSize: "1.1rem"
          }}
        />
        {searchTerm && (
          <button
            onClick={() => setSearchTerm("")}
            style={{
              position: "absolute",
              right: 10,
              top: "50%",
              transform: "translateY(-50%)",
              background: "none",
              border: "none",
              fontSize: "1.5rem",
              cursor: "pointer"
            }}
          >
            X
          </button>
        )}
      </div>

      <div style={{ textAlign: "center", margin: "2rem 0" }}>
        {categories.map(cat => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            style={{
              margin: "0 0.5rem",
              padding: "0.6rem 1.4rem",
              borderRadius: 20,
              border: "2px solid #ddd",
              background: activeCategory === cat.id ? "#e74c3c" : "white",
              color: activeCategory === cat.id ? "white" : "#333",
              cursor: "pointer",
              fontSize: "1rem"
            }}
          >
            {cat.emoji} {cat.label}
          </button>
        ))}
      </div>

      <p style={{ textAlign: "center", color: "#666" }}>
        {filtered.length} résultat{filtered.length > 1 ? "s" : ""}
      </p>

      {filtered.length === 0 ? (
        <p style={{ textAlign: "center", fontSize: "1.5rem", margin: "4rem" }}>
          Aucun plat trouvé
        </p>
      ) : (
        <div style={{ 
          display: "grid", 
          gap: "2rem", 
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          padding: "0 1rem"
        }}>
          {filtered.map((item) => (
            <MenuCard key={item.id} item={item} onAddToCart={addToCart} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MenuList;