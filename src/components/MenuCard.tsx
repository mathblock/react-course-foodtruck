import { useState } from "react";
import type { MenuItem } from "../types/menu";

type MenuCardProps = {
  item: MenuItem;
  onAddToCart: (item: MenuItem) => void;
};

export default function MenuCard({ item, onAddToCart }: MenuCardProps) {
  const [isAdded, setIsAdded] = useState(false);

  const handleAdd = () => {
    onAddToCart(item);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 500);
  };

  return (
    <div className="menu-card">
      <div className="card-image">
        <img src={item.imageUrl} alt={item.name} />
        {item.isNew && <span className="badge-new">Nouveau</span>}
      </div>

      <div className="card-content">
        <div className="card-header">
          <h3>{item.name}</h3>
          {item.isVegetarian && <span className="badge-vege">🌱</span>}
        </div>

        <p className="description">{item.description}</p>
        <p className="preparation-time">⏱️ {item.preparationTime} min</p>

        <div className="card-footer">
          <span className="price">{item.price.toFixed(2)} €</span>
          <button onClick={handleAdd} className={`btn-add ${isAdded ? "added" : ""}`}>
            {isAdded ? "✓ Ajouté !" : "🛒 Ajouter"}
          </button>
        </div>
      </div>
    </div>
  );
}
