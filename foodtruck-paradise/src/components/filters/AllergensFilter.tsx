interface AllergensFilterProps {
  selected: string[];
  onChange: (allergens: string[]) => void;
}

const commonAllergens = [
  { value: 'gluten', label: 'Gluten' },
  { value: 'lactose', label: 'Lactose' },
  { value: 'nuts', label: 'Fruits à coque' },
  { value: 'eggs', label: 'Œufs' },
  { value: 'fish', label: 'Poisson' },
  { value: 'shellfish', label: 'Crustacés' },
  { value: 'soy', label: 'Soja' },
  { value: 'sesame', label: 'Sésame' },
];

export default function AllergensFilter({ selected, onChange }: AllergensFilterProps) {
  const toggleAllergen = (allergen: string) => {
    if (selected.includes(allergen)) {
      onChange(selected.filter((a) => a !== allergen));
    } else {
      onChange([...selected, allergen]);
    }
  };

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">
        Exclure les allergènes
      </label>
      <div className="space-y-2 max-h-48 overflow-y-auto">
        {commonAllergens.map((allergen) => (
          <div key={allergen.value} className="flex items-center">
            <input
              type="checkbox"
              id={`allergen-${allergen.value}`}
              checked={selected.includes(allergen.value)}
              onChange={() => toggleAllergen(allergen.value)}
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label
              htmlFor={`allergen-${allergen.value}`}
              className="ml-2 text-sm text-gray-700 cursor-pointer"
            >
              {allergen.label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}