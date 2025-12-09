import { Salad, UtensilsCrossed, Dessert, Coffee } from "lucide-react";
import  type Menu  from "../types/menu";
import { Menucard } from "./menuCard";
import { menuItems } from "../data/menuData";
import type { CartItem } from "../types/cart";
import { useState } from "react";

interface CategoryConfig {
  title: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  color: string;
}

// Configuration des catégories
const categoryConfig: Record<string, CategoryConfig> = {
  entrees: {
    title: 'Entrées',
    icon: Salad,
    color: '#10b981'
  },
  plats: {
    title: 'Plats',
    icon: UtensilsCrossed,
    color: '#f59e0b'
  },
  desserts: {
    title: 'Desserts',
    icon: Dessert,
    color: '#ec4899'
  },
  boissons: {
    title: 'Boissons',
    icon: Coffee,
    color: '#3b82f6'
  }
};

const CategorySection = ({ 
  category, 
  menus ,
  addToCart
}: { 
  category: string; 
  menus: Menu[] ,
  addToCart: (menuId: CartItem) => void
}) => {
  const config = categoryConfig[category];
  const Icon = config.icon;
  
  return (
    <section style={{ marginBottom: '48px' }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        marginBottom: '24px',
        paddingBottom: '16px',
        borderBottom: `3px solid ${config.color}`
      }}>
        <Icon size={32}  />
        <h2 style={{
          fontSize: '28px',
          fontWeight: '700',
          color: '#1a1a1a',
          margin: 0
        }}>
          {config.title}
        </h2>
        <span style={{
          backgroundColor: config.color,
          color: 'white',
          padding: '4px 12px',
          borderRadius: '20px',
          fontSize: '14px',
          fontWeight: '600'
        }}>
          {menus.length}
        </span>
      </div>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '24px'
      }}>
        {menus.map(menu => (
          <Menucard key={menu.id} {...menu} addToCart={addToCart} />
        ))}
      </div>
    </section>
  );
};

export default function CategorizedMenuList({addToCart}: {addToCart: (menuId: CartItem) => void }) {
   // Ordre des catégories
  const categoryOrder: Array<keyof typeof categoryConfig> = ['entrees', 'plats', 'desserts', 'boissons'];
  const [activeCategory, setActiveCategory] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState<string>('');

  // Grouper les menus par catégorie
  const menus=menuItems;
  const filteredItems = () => menuItems
  .filter(
    (item) => activeCategory === "" || item.category === activeCategory
  )
  .filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const groupedMenus = filteredItems().reduce((acc, menu) => {
    if (!acc[menu.category]) {
      acc[menu.category] = [];
    }
    acc[menu.category].push(menu);
    return acc;
  }, {} as Record<string, Menu[]>);

 
  

  return (
    <div style={{
      padding: '40px 20px',
      backgroundColor: '#fafafa',
      minHeight: '100vh'
    }}>
      <header style={{
        textAlign: 'center',
        marginBottom: '48px'
      }}>
        <h1 style={{
          fontSize: '42px',
          fontWeight: '800',
          color: '#1a1a1a',
          margin: '0 0 12px 0'
        }}>
          Notre Carte
        </h1>
        <div className="search-bar" style={{ marginTop: '16px' }}>
          <input
            type="text"
            placeholder="Rechercher..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              width: '70%',
              padding: '12px 16px',
              border: '1px solid #ddd',
              borderRadius: '24px',
              fontSize: '16px',
              outline: 'none',
              transition: 'border-color 0.3s',
            }}
          />
          <select
            value={activeCategory}
            onChange={(e) => setActiveCategory(e.target.value)}
            style={{
              marginLeft: '12px',
              padding: '12px 16px',
              border: '1px solid #ddd',
              borderRadius: '24px',
              fontSize: '16px',
              outline: 'none',
              transition: 'border-color 0.3s',
            }}
          >
            <option value="">Toutes les catégories</option>
            {categoryOrder.map((category) => (
              <option key={category} value={category}>
                {categoryConfig[category].title}
              </option>
            ))}
          </select>
        </div>
      </header>

      {categoryOrder.map(category => {
        const categoryMenus = groupedMenus[category];
        if (!categoryMenus || categoryMenus.length === 0) return null;
        
        return (
          <CategorySection 
            key={category} 
            category={category} 
            menus={categoryMenus} 
            addToCart={addToCart}
          />
        );
      })}
    </div>
  );
}