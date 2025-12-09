import '../../../styles/filters.css'
interface VegetarianFilterProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

function VegetarianFilter({ checked, onChange }: VegetarianFilterProps) {
  return (
    <div className="vegetarian-filter">
      <label className="vegetarian-label">Options alimentaires</label>

      <button
        type="button"
        onClick={() => onChange(!checked)}
        className={`vegetarian-card ${checked ? 'vegetarian-card-active' : ''}`}
        aria-pressed={checked}
      >
        <div className="vegetarian-content">
          <span className="vegetarian-icon">🥗</span>
          <div className="vegetarian-text">
            <span className="vegetarian-title">Végétarien uniquement</span>
            <span className="vegetarian-description">Afficher les plats sans viande ni poisson</span>
          </div>
        </div>

        {checked && (
          <div className="vegetarian-check">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path 
                d="M13.5 4L6 11.5L2.5 8" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </div>
        )}
      </button>
    </div>
  );
}
export default VegetarianFilter;