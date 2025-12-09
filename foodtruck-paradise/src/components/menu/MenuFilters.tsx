import { useMenuFilters } from '../../hooks/useMenuFilters';
import CategoryFilter from './filters/CategoryFilter';
import PriceRangeFilter from './filters/PriceRangeFilter';
import VegetarianFilter from './filters/VegetarianFilter';
import SortFilter from './filters/SortFilter';
import ResetFilters from './filters/ResetFilters';
import MenuResultsCounter from './filters/MenuResults';
import "../../styles/MenuFilters.css"
import { useState } from 'react';
import AllergensFilter from './filters/AllergensFilter';

interface MenuFiltersProps {
  resultCount?: number;
}

export default function MenuFilters({ resultCount }: MenuFiltersProps) {
  const { filters, updateFilters, resetFilters } = useMenuFilters();
  const [searchInput, setSearchInput] = useState<string>("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  }

  return (
    <div className="menu-filters bg-white p-6 rounded-lg shadow-md space-y-6">
      <div className="flex justify-between items-center">
        <input type="text" className="search-input" placeholder="Rechercher un plat..." value={searchInput} onChange={handleSearchChange} />
        <SortFilter 
          value={filters.sortBy} 
          onChange={(s) => updateFilters({ sortBy: s })} 
        />
        <ResetFilters className='reset-filters' onReset={resetFilters} />
      </div>

      <div className="filter-section">
        <MenuResultsCounter count={resultCount} />
        <CategoryFilter 
            value={filters.category} 
            onChange={(c) => updateFilters({ category: c })} 
        />
        
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <PriceRangeFilter
          min={filters.minPrice}
          max={filters.maxPrice}
          onChange={(min, max) => updateFilters({ minPrice: min, maxPrice: max })}
        />
        <VegetarianFilter 
          checked={filters.isVegetarian} 
          onChange={(v) => updateFilters({ isVegetarian: v })} 
        />
        <AllergensFilter 
          selected={filters.allergens} 
          onChange={(a:string[]) => updateFilters({ allergens: a })} 
        />
        
      </div>
      
    </div>
  );
}