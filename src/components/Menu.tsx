import menuData from "@/data/menuData";
import type { MenuItem } from "@/types/menu";
import { useState } from "react";
import { Button } from "./ui/button";
import MenuFiltrer from "./MenuFiltrer";
import MenuDefaut from "./MenuDefaut";
import type { Category, MenuProps } from "@/types/utils";
import { useNavigate } from "react-router-dom";

const categories: Category[] = [
  { key: "entrees", label: "🥗 Entrées", color: "bg-green-50" },
  { key: "plats", label: "🍴 Plats Principaux", color: "bg-yellow-50" },
  { key: "desserts", label: "🍰 Desserts", color: "bg-pink-50" },
  { key: "boissons", label: "🥤 Boissons", color: "bg-blue-50" },
];

function Menu({ onAddToCart }: MenuProps) {
  const [activeCategory, setActiveCategory] = useState<string>("tous");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const navigate = useNavigate();

  const menuFiltrer: MenuItem[] = menuData
    .filter(
      (item: MenuItem) =>
        activeCategory === "tous" || item.category === activeCategory
    )
    .filter(
      (item: MenuItem) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <section id="menu" className="py-12 px-6 bg-white">
      <h2 className="text-4xl font-extrabold text-center text-yellow-900 mb-12 drop-shadow">
        Notre Menu
      </h2>

      <div id="filtreRecherche">
        <div id="recherche" className="flex items-center gap-2 mb-6">
          <input
            type="text"
            placeholder="Rechercher un produit..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border rounded px-3 py-1 flex-1"
          />
          <Button onClick={() => setSearchTerm("")}>❌</Button>
        </div>

        <div id="filtre" className="flex justify-center gap-2 mb-6">
          <Button onClick={() => setActiveCategory("tous")}>Tous</Button>
          {categories.map((cat) => (
            <Button
              key={cat.key}
              onClick={
                () =>
                  navigate(
                    `/menu/category/${cat.key}`
                  ) /* setActiveCategory(cat.key) */
              }
            >
              {cat.label}
            </Button>
          ))}
        </div>
      </div>

      <div id="affichageResultat">
        {activeCategory === "tous" && searchTerm === "" ? (
          <MenuDefaut
            categories={categories}
            menuData={menuData}
            onAddToCart={onAddToCart}
          />
        ) : (
          <MenuFiltrer menuFiltrer={menuFiltrer} onAddToCart={onAddToCart} />
        )}
      </div>
    </section>
  );
}

export default Menu;
