import { menuItems } from '../data/menuData';
import MenuCard from './MenuCard';

function Menu() {
    const categories = [
        { key: 'plats', label: 'Plats Principaux' },
        { key: 'entrees', label: 'Entrées' },
        { key: 'desserts', label: 'Desserts' },
        { key: 'boissons', label: 'Boissons' },
    ];

    return (
        <div className="menu">
            {categories.map(category => (
                <section key={category.key} className="menu-category">
                    <h2>{category.label}</h2>
                    <div className="menu-grid" aria-label={category.label}>
                        {menuItems
                            .filter(item => item.category === category.key)
                            .map(item => (
                                <MenuCard key={item.id} item={item} />
                            ))}
                    </div>
                </section>
            ))}
        </div>
    );
}
export default Menu;
