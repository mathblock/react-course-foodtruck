import { useState, useRef, useEffect } from "react";
import "../../../styles/priceRange.css";
interface PriceRangeFilterProps {
  min: number;
  max: number;
  step?: number;
  defaultMinValue?: number;
  defaultMaxValue?: number;
  onChange: (minValue: number, maxValue: number) => void;
}

export default function PriceRangeFilter({
  min = 0,
  max = 100,
  step = 1,
  defaultMinValue,
  defaultMaxValue,
  onChange
}: PriceRangeFilterProps) {

  const [minValue, setMinValue] = useState(defaultMinValue ?? min);
    const [maxValue, setMaxValue] = useState(defaultMaxValue ?? max);
  
    useEffect(() => {
      if (onChange) {
        onChange(minValue, maxValue);
      }
    }, [minValue, maxValue]);
  
    const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = Math.min(Number(e.target.value), maxValue - step);
      setMinValue(value);
    };
  
    const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = Math.max(Number(e.target.value), minValue + step);
      setMaxValue(value);
    };
  

  
  return(
  <div className="price-range-filter">
      <div className="price-range-header">
        <label className="price-range-label">Prix</label>
        <div className="price-range-values">
          <span className="price-value">{minValue}€</span>
          <span className="price-separator">-</span>
          <span className="price-value">{maxValue}€</span>
        </div>
      </div>

 
      <div className="price-range-inputs">
        <div className="price-input-group">
          <label htmlFor="min-price">Min</label>
          <input
            id="min-price"
            type="number"
            min={min}
            max={maxValue - step}
            step={step}
            value={minValue}
            onChange={handleMinChange}
            className="price-input"
          />
          <span className="currency">€</span>
        </div>

        <div className="price-input-divider">—</div>

        <div className="price-input-group">
          <label htmlFor="max-price">Max</label>
          <input
            id="max-price"
            type="number"
            min={minValue + step}
            max={max}
            step={step}
            value={maxValue}
            onChange={handleMaxChange}
            className="price-input"
          />
          <span className="currency">€</span>
        </div>
      </div>
    </div>
  );
}