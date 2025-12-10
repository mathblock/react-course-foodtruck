import type { SortBy } from '../../../types/menu';
import { useState } from 'react';
import '../../../styles/sortFilter.css'

interface SortFilterProps {
  value: SortBy;
  onChange: (sortBy: SortBy) => void;
  toggleFilters:()=>void
}

const sortOptions: { value: SortBy; label: string; icon: string }[] = [
  { value: 'name', label: 'Nom (A-Z)', icon: '↑' },
  { value: 'price-asc', label: 'Prix croissant', icon: '€↑' },
  { value: 'price-desc', label: 'Prix décroissant', icon: '€↓' },
  { value: 'rating', label: 'Meilleures notes', icon: '⭐' }];

export default function SortFilter({ value, onChange,toggleFilters }: SortFilterProps) {
  const [isOpen, setIsOpen] = useState(false);
  
  const selectedOption = sortOptions.find(opt => opt.value === value) || sortOptions[0];

  const handleSelect = (optionValue: SortBy) => {
    onChange(optionValue);
    setIsOpen(false);
  };

  return (
    <div className="sort-filter">
      <label className="sort-label" onClick={toggleFilters} >
        <svg className="sort-label-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"  strokeWidth="2">
          <path d="M3 6h18M7 12h10M11 18h2" strokeLinecap="round"/>
        </svg>
      </label>

      <div className="sort-select-wrapper">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="sort-select-button"
          aria-expanded={isOpen}
        >
          <span className="sort-selected-icon">{selectedOption.icon}</span>
          <span className="sort-selected-label">{selectedOption.label}</span>
          <svg 
            className={`sort-chevron ${isOpen ? 'sort-chevron-open' : ''}`}
            width="16" 
            height="16" 
            viewBox="0 0 16 16" 
            fill="none"
          >
            <path 
              d="M4 6L8 10L12 6" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {isOpen && (
          <>
            <div 
              className="sort-backdrop" 
              onClick={() => setIsOpen(false)}
            />
            <div className="sort-dropdown">
              {sortOptions.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => handleSelect(option.value)}
                  className={`sort-option ${value === option.value ? 'sort-option-active' : ''}`}
                >
                  <span className="sort-option-icon">{option.icon}</span>
                  <span className="sort-option-label">{option.label}</span>
                  {value === option.value && (
                    <svg className="sort-option-check" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path 
                        d="M13.5 4L6 11.5L2.5 8" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}