
import { useParams, Link } from "react-router-dom";
import MenuCard from "../components/MenuCard";
import menuItems from "../data/menuData";
import type { MenuProps } from "../types/menus";
import { useOutletContext } from "react-router-dom";

interface LayoutContext {
  addToCart: (item: MenuProps) => void;
}

const categoryTitles: Record<string, string> = {
  entrees: "Nos Entrées",
  plats: "Nos Plats Principaux",
  desserts: "Nos Desserts",
  boissons: "Nos Boissons",
};

const categoryEmojis: Record<string, string> = {
  entrees: "Salade",
  plats: "Plat",
  desserts: "Glace",
  boissons: "Verre",
};

export default function CategoryPage() {
  const { category } = useParams<{ category: string }>();
  const { addToCart } = useOutletContext<LayoutContext>();

  if (!category || !["entree", "plats principale", "desserts", "boissons"].includes(category)) {
    return (
      <div style={{ textAlign: "center", padding: "4rem", minHeight: "60vh" }}>
        <h1>Catégorie non trouvée</h1>
        <Link to="/" style={{ color: "#e74c3c", textDecoration: "underline" }}>
          ← Retour au menu
        </Link>
      </div>
    );
  }

  const items = menuItems.filter(item => item.category === category);

  return (
    <div style={{ padding: "2rem 1rem", maxWidth: "1400px", margin: "0 auto" }}>
      {/* Titre magnifique */}
      <div style={{ textAlign: "center", margin: "3rem 0 4rem" }}>
        <h1 style={{ fontSize: "3rem", color: "#2f3542", margin: "0 0 1rem" }}>
          {categoryEmojis[category]} {categoryTitles[category] || category}
        </h1>
        <p style={{ fontSize: "1.3rem", color: "#666" }}>
          {items.length} plat{items.length > 1 ? "s" : ""} délicieux
        </p>
        <Link 
          to="/" 
          style={{
            display: "inline-block",
            marginTop: "1rem",
            color: "#e74c3c",
            textDecoration: "none",
            fontWeight: "bold"
          }}
        >
          ← Voir tout le menu
        </Link>
      </div>

      {/* Grille des plats */}
      {items.length === 0 ? (
        <p style={{ textAlign: "center", fontSize: "1.5rem", color: "#999", margin: "6rem 0" }}>
          Aucun plat dans cette catégorie pour le moment
        </p>
      ) : (
        <div style={{
          display: "grid",
          gap: "2.5rem",
          gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
          padding: "0 1rem"
        }}>
          {items.map(item => (
            <MenuCard key={item.id} item={item} onAddToCart={addToCart} />
          ))}
        </div>
      )}
    </div>
  );
}