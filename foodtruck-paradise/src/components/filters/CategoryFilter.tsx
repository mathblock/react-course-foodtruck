import type { Category } from '../../types/menu';
import '../../styles/category.css'

interface CategoryFilterProps {
  value: Category;
  onChange: (category: Category) => void;
}

const categories: { value: Category; label: string }[] = [
  { value: 'all', label: 'Toutes' },
  { value: 'entrees', label: 'Entrées' },
  { value: 'plats', label: 'Plats' },
  { value: 'desserts', label: 'Desserts' },
  { value: 'boissons', label: 'Boissons' },
];

export default function CategoryFilter({ value, onChange }: CategoryFilterProps) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">
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
      </select>
    </div>
  );
}