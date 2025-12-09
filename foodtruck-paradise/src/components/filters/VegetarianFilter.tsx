import '../../styles/filters.css'

interface VegetarianFilterProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export default function VegetarianFilter({ checked, onChange }: VegetarianFilterProps) {
  return (
    <div className="space-y-2">
  <label className="label-title">Options alimentaires</label>

  <div className="checkbox-container">
    <input
      type="checkbox"
      id="vegetarian"
      checked={checked}
      onChange={(e) => onChange(e.target.checked)}
      className="checkbox-input"
    />
    <label htmlFor="vegetarian" className="checkbox-label">
      Végétarien uniquement
    </label>
  </div>
</div>

  );
}