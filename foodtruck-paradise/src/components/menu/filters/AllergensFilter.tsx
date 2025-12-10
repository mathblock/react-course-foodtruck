
import '../../../styles/allergensFilter.css';

interface AllergensFilterProps {
  selected: string[];
  onChange: (allergens: string[]) => void;
}

const commonAllergens = [
  { value: 'gluten', label: 'Gluten', icon: '🌾' },
  { value: 'lactose', label: 'Lactose', icon: '🥛' },
  { value: 'nuts', label: 'Fruits à coque', icon: '🥜' },
  { value: 'eggs', label: 'Œufs', icon: '🥚' },
  { value: 'fish', label: 'Poisson', icon: '🐟' },
  { value: 'shellfish', label: 'Crustacés', icon: '🦐' },
  { value: 'soy', label: 'Soja', icon: '🫘' },
  { value: 'sesame', label: 'Sésame', icon: '🌰' },
];

function AllergensFilter({ selected, onChange }: AllergensFilterProps) {
  const toggleAllergen = (allergen: string) => {
    if (selected.includes(allergen)) {
      onChange(selected.filter((a) => a !== allergen));
    } else {
      onChange([...selected, allergen]);
    }
  };

  const clearAll = () => {
    onChange([]);
  };

  return (
    <div className="allergens-filter">
      <div className="allergens-header">
        <label className="allergens-label">
          Exclure les allergènes
        </label>
        {selected.length > 0 && (
          <button 
            onClick={clearAll}
            className="allergens-clear"
            type="button"
          >
            Tout effacer ({selected.length})
          </button>
        )}
      </div>

      <div className="allergens-grid">
        {commonAllergens.map((allergen) => {
          const isSelected = selected.includes(allergen.value);
          return (
            <button
              key={allergen.value}
              type="button"
              onClick={() => toggleAllergen(allergen.value)}
              className={`allergen-badge ${isSelected ? 'allergen-badge-selected' : ''}`}
              aria-pressed={isSelected}
            >
              <span className="allergen-icon">{allergen.icon}</span>
              <span className="allergen-label">{allergen.label}</span>
              {isSelected && (
                <span className="allergen-check">✓</span>
              )}
            </button>
          );
        })}
      </div>

      {selected.length > 0 && (
        <div className="allergens-summary">
          <span className="summary-icon">⚠️</span>
          <span className="summary-text">
            {selected.length} allergène{selected.length > 1 ? 's' : ''} exclu{selected.length > 1 ? 's' : ''}
          </span>
        </div>
      )}
    </div>
  );
}

export default AllergensFilter;