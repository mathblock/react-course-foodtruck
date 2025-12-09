interface VegetarianFilterProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export default function VegetarianFilter({ checked, onChange }: VegetarianFilterProps) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">
        Options alimentaires
      </label>
      <div className="flex items-center">
        <input
          type="checkbox"
          id="vegetarian"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
        />
        <label
          htmlFor="vegetarian"
          className="ml-2 text-sm text-gray-700 cursor-pointer"
        >
          Végétarien uniquement
        </label>
      </div>
    </div>
  );
}