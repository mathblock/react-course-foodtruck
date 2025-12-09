import type { MenuItem } from "@/types/menu";
import MenuCard from "./MenuCard";
import type { MenuDefautProps } from "@/types/utils";

function MenuDefaut(menuDefautProp: MenuDefautProps) {
  return (
    <div className="flex flex-col gap-10">
      {menuDefautProp.categories.map((cat) => (
        <div key={cat.key} className={`rounded-xl shadow-md p-6 ${cat.color}`}>
          <h3 className="text-2xl font-bold text-yellow-900 mb-6 flex items-center gap-2">
            {cat.label}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuDefautProp.menuData
              .filter((item: MenuItem) => item.category === cat.key)
              .map((item: MenuItem) => (
                <MenuCard key={item.id} item={item} />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default MenuDefaut;
