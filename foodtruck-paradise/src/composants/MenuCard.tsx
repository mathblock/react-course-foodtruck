import type{ MenuItem } from "../types/menu";

interface Props {
  item: MenuItem;
}

function MenuCard({ item }: Props) {
  return (
    <article className="menu-card">
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

        <div className="card-footer">
          <span className="price">{item.price.toFixed(2)} €</span>
          <button className="btn-add">Ajouter</button>
        </div>
      </div>
    </article>
  );
}

export default MenuCard;
