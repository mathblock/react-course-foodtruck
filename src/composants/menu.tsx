import { Salad, UtensilsCrossed, Dessert, Coffee } from "lucide-react";
import  type Menu  from "../types/menu";
import { Menucard } from "./menuCard";
import { menuItems } from "../data/menuData";

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
  menus 
}: { 
  category: string; 
  menus: Menu[] 
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
          <Menucard key={menu.id} {...menu} />
        ))}
      </div>
    </section>
  );
};

export default function CategorizedMenuList() {
  // Grouper les menus par catégorie
  const menus=menuItems;
  const groupedMenus = menus.reduce((acc, menu) => {
    if (!acc[menu.category]) {
      acc[menu.category] = [];
    }
    acc[menu.category].push(menu);
    return acc;
  }, {} as Record<string, Menu[]>);

  // Ordre des catégories
  const categoryOrder: Array<keyof typeof categoryConfig> = ['entrees', 'plats', 'desserts', 'boissons'];

  return (
    <div style={{
      width:'100%',
      margin: '0 auto',
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
        <p style={{
          fontSize: '18px',
          color: '#666',
          margin: 0
        }}>
          Découvrez nos délicieuses créations
        </p>
      </header>

      {categoryOrder.map(category => {
        const categoryMenus = groupedMenus[category];
        if (!categoryMenus || categoryMenus.length === 0) return null;
        
        return (
          <CategorySection 
            key={category} 
            category={category} 
            menus={categoryMenus} 
          />
        );
      })}
    </div>
  );
}