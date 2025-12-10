import type { Category } from '../../../types/menu';
import '../../../styles/category.css'
import { Cake, CupSoda, Salad, Utensils, Vote } from 'lucide-react';
import type { JSX } from 'react';

interface CategoryFilterProps {
  value: Category;
  onChange: (category: Category) => void;
}

const categories: { value: Category; label: string; icon: JSX.Element }[] = [
  { value: 'all', label: 'Toutes', icon: <Vote size={15} strokeWidth={3.5} className='category-icon' /> },
  { value: 'entrees', label: 'Entrées', icon: <Salad strokeWidth={3.5} size={18} className='category-icon' />  },
  { value: 'plats', label: 'Plats', icon: <Utensils strokeWidth={3.5} size={18} className='category-icon' />  },
  { value: 'desserts', label: 'Desserts', icon: <Cake strokeWidth={3.5} size={18} className='category-icon' />  },
  { value: 'boissons', label: 'Boissons', icon: <CupSoda strokeWidth={3.5} size={18} className='category-icon' />  },
];

export default function CategoryFilter({ value, onChange }: CategoryFilterProps) {
  return (
    <div className="category-filter-container">
      {/* <label className="block text-sm font-medium text-gray-700">
        Catégorie
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value as Category)}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      >
        {categories.map((cat) => (
          <option key={cat.value} value={cat.value}>
            {cat.label}
          </option>
        ))}
      </select> */}
      {
        categories.map((cat) => (
          <span
            key={cat.value}
            onClick={() => onChange(cat.value)}
            className={`category-button ${value === cat.value ? 'category-button-active' : `category-button-${cat.value}`}`}
          >
            {cat.icon}
            {cat.label}
          </span>
        ))}
      </div>
  );
}