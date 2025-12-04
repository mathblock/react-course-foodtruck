import React from 'react'
import type { MenuItem } from '../types/menu'
import './MenuCard.css'

interface MenuCardProps {
  item: MenuItem
}

const MenuCard: React.FC<MenuCardProps> = ({ item }) => {
  return (
    <div className="menu-card">
      {/* Image + badge "Nouveau" */}
      <div className="card-image">
        <img src={item.imageUrl} alt={item.name} />
        {item.isNew && <span className="badge-new">Nouveau</span>}
      </div>

      {/* Contenu */}
      <div className="card-content">
        {/* Header: nom + badge végétarien */}
        <div className="card-header">
          <h3>{item.name}</h3>
          {item.isVegetarian && <span className="badge-vege">🌱</span>}
        </div>

        {/* Description */}
        <p className="description">{item.description}</p>

        {/* Footer: prix + bouton */}
        <div className="card-footer">
          <span className="price">{item.price.toFixed(2)} €</span>
          <button className="btn-add">Ajouter</button>
        </div>
      </div>
    </div>
  )
}

export default MenuCard
