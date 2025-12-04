import { menuItems } from "../data/menuData";
import MenuCard from "./MenuCard";

function Menu() {
  const categories = [
    { key: "plats", title: "🍴 Plats Principaux" },
    { key: "entrees", title: "🥗 Entrées" },
    { key: "desserts", title: "🍰 Desserts" },
    { key: "boissons", title: "🥤 Boissons" },
  ];

  return (
    <section id="menu">
      {categories.map((cat) => {
        const filtered = menuItems.filter((item) => item.category === cat.key);

        return (
          <div key={cat.key} className="menu-section">
            <h2>{cat.title}</h2>
            <div className="menu-grid">
              {filtered.map((item) => (
                <MenuCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default Menu;
