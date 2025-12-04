import "../module/MenuList.css";

import MenuCard from "./MenuCard";
import menuItems from "../data/menuData";
import type {MenuProps} from "../types/menus";

const MenuList: React.FC = () => {
   
  const entrees = menuItems.filter((item: MenuProps) => item.category === 'entree');
  const plats = menuItems.filter((item: MenuProps) => item.category === 'plat principal');
  const desserts = menuItems.filter((item: MenuProps) => item.category === 'dessert');
  const boissons = menuItems.filter((item: MenuProps) => item.category === 'boisson');

  return (
    <div className="menu-list">
      <section className="menu-section">
        <h2>Plat principal</h2>
        <div className="menu-grid">
          {plats.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      <section className="menu-section">
        <h2>Entrées</h2>
        <div className="menu-grid">
          {entrees.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      <section className="menu-section">
        <h2>Desserts</h2>
        <div className="menu-grid">
          {desserts.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      <section className="menu-section">
        <h2>Boissons</h2>
        <div className="menu-grid">
          {boissons.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default MenuList;