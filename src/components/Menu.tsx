import menuData from '../data/menuData';
import MenuCard from './MenuCard';

const Menu = () => {

    return (
        <div className="menu-container">
            <section className="menu-section">
                <h2>🍴 Plats Principaux</h2>
                <div className="menu-grid">
                    {menuData
                        .filter((item) => item.category === 'plats')
                        .map((item) => (
                            <MenuCard key={item.id} item={item} />
                        ))}
                </div>
            </section>

            <section className="menu-section">
                <h2>🥗 Entrées</h2>
                <div className="menu-grid">
                    {menuData
                        .filter((item) => item.category === 'entrees')
                        .map((item) => (
                            <MenuCard key={item.id} item={item} />
                        ))}
                </div>
            </section>

            <section className="menu-section">
                <h2>🍰 Desserts</h2>
                <div className="menu-grid">
                    {menuData
                        .filter((item) => item.category === 'desserts')
                        .map((item) => (
                            <MenuCard key={item.id} item={item} />
                        ))}
                </div>
            </section>

            <section className="menu-section">
                <h2>🥤 Boissons</h2>
                <div className="menu-grid">
                    {menuData
                        .filter((item) => item.category === 'boissons')
                        .map((item) => (
                            <MenuCard key={item.id} item={item} />
                        ))}
                </div>
            </section>
        </div>
    );
}

export default Menu;
