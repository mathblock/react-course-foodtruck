import MenuCard from './MenuCard';
import { menuItems } from '../data/menuData';

const Menu = () => {
  const categories = [
    { key: 'entrees', label: '🥗 Entrées' },
    { key: 'plats', label: '🍴 Plats de resistance' },
    { key: 'desserts', label: '🍰 Desserts' },
    { key: 'boissons', label: '🥤 Boissons' },
  ];

  return (
    <div className="menu">
      {categories.map(category => {
        const items = menuItems.filter(item => item.category === category.key);
        return (
          <section key={category.key} className="menu-section">
            <h2>{category.label}</h2>
            <div className="menu-grid">
              {items.map(item => (
                <MenuCard key={item.id} item={item} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default Menu;