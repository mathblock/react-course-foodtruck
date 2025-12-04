import menuData from "@/data/menuData";
import MenuCard from "./MenuCard";

const categories = [
  { key: "entrees", label: "🥗 Entrées", color: "bg-green-50" },
  { key: "plats", label: "🍴 Plats Principaux", color: "bg-yellow-50" },
  { key: "desserts", label: "🍰 Desserts", color: "bg-pink-50" },
  { key: "boissons", label: "🥤 Boissons", color: "bg-blue-50" },
];

function Menu() {
  return (
    <section id="menu" className="py-12 px-6 bg-white">
      <h2 className="text-4xl font-extrabold text-center text-yellow-900 mb-12 drop-shadow">
        Notre Menu
      </h2>
      <div className="flex flex-col gap-10">
        {categories.map((cat) => (
          <div
            key={cat.key}
            className={`rounded-xl shadow-md p-6 ${cat.color}`}
          >
            <h3 className="text-2xl font-bold text-yellow-900 mb-6 flex items-center gap-2">
              {cat.label}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {menuData
                .filter((item) => item.category === cat.key)
                .map((item) => (
                  <MenuCard key={item.id} {...item} />
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Menu;
