import type { SortBy } from '../../types/menu';

interface SortFilterProps {
  value: SortBy;
  onChange: (sortBy: SortBy) => void;
}

const sortOptions: { value: SortBy; label: string }[] = [
  { value: 'name', label: 'Nom (A-Z)' },
  { value: 'price-asc', label: 'Prix croissant' },
  { value: 'price-desc', label: 'Prix décroissant' },
  { value: 'rating', label: 'Meilleures notes' },
];

export default function SortFilter({ value, onChange }: SortFilterProps) {
  return (
    <div className="space-y-2">
      <label className="label-title" htmlFor="sort-by">
        Trier par
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value as SortBy)}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      >
        {sortOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}