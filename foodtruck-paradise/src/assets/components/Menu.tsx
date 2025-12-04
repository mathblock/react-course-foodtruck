import React from 'react'
import MenuCard from './MenuCard'
import { menuItems } from '../data/menuData'
import './Menu.css'

const Menu: React.FC = () => {
  // Filtrer par catégories
  const entrees = menuItems.filter(item => item.category === 'entrées')
  const plats = menuItems.filter(item => item.category === 'plats')
  const desserts = menuItems.filter(item => item.category === 'desserts')
  const boissons = menuItems.filter(item => item.category === 'boissons')

  return (
    <div className="menu-container">
      {/* Plats Principaux */}
      <section id="plats">
        <h2>🍴 Plats Principaux</h2>
        <div className="menu-grid">
          {plats.map(item => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      {/* Entrées */}
      <section id="entrees">
        <h2>🥗 Entrées</h2>
        <div className="menu-grid">
          {entrees.map(item => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      {/* Desserts */}
      <section id="desserts">
        <h2>🍰 Desserts</h2>
        <div className="menu-grid">
          {desserts.map(item => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      {/* Boissons */}
      <section id="boissons">
        <h2>🥤 Boissons</h2>
        <div className="menu-grid">
          {boissons.map(item => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default Menu
