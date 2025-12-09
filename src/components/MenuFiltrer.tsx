import type { MenuItem } from "@/types/menu";
import MenuCard from "./MenuCard";
import type { MenuFilterProps } from "@/types/utils";

function MenuFiltrer(menuFilterProp: MenuFilterProps) {
  return (
    <>
      <p id="nombreResultat" className="mb-4 text-gray-700">
        {menuFilterProp.menuFiltrer.length > 0
          ? `${menuFilterProp.menuFiltrer.length} produit(s) trouvé(s)`
          : "Aucun produit"}
      </p>

      {menuFilterProp.menuFiltrer.length > 0 && (
        <div
          id="resultat"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {menuFilterProp.menuFiltrer.map((item: MenuItem) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </>
  );
}

export default MenuFiltrer;
