interface PriceRangeFilterProps {
  min: number;
  max: number;
  onChange: (min: number, max: number) => void;
}

export default function PriceRangeFilter({ min, max, onChange }: PriceRangeFilterProps) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">
        Fourchette de prix
      </label>
      <div className="flex items-center gap-3">
        <input
          type="number"
          value={min}
          onChange={(e) => onChange(Number(e.target.value), max)}
          min={0}
          max={max}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Min"
        />
        <span className="text-gray-500">-</span>
        <input
          type="number"
          value={max}
          onChange={(e) => onChange(min, Number(e.target.value))}
          min={min}
          max={100}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Max"
        />
      </div>
      <div className="flex justify-between text-xs text-gray-600">
        <span>{min}€</span>
        <span>{max}€</span>
      </div>
    </div>
  );
}