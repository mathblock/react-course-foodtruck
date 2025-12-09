import { useParams } from 'react-router-dom';
import { menuItems } from '../data/menuData';
import MenuCard from '../components/MenuCard';
import type { MenuItem } from '../types/menu';

interface CategoryPageProps {
  onAddToCart?: (item: MenuItem) => void;
}

export default function CategoryPage({ onAddToCart }: CategoryPageProps) {
  const { categoryName } = useParams<{ categoryName: string }>();

  const items = menuItems.filter(i => i.category === categoryName);

  return (
    <div className="page category-page">
      <h2>{categoryName ? categoryName.charAt(0).toUpperCase() + categoryName.slice(1) : 'Catégorie'}</h2>
      {items.length === 0 ? (
        <div className="no-products">Aucun produit</div>
      ) : (
        <div className="menu-grid">
          {items.map(item => (
            <MenuCard key={item.id} item={item} onAddToCart={onAddToCart ?? (() => {})} />
          ))}
        </div>
      )}
    </div>
  );
}
