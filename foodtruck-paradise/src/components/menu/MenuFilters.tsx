import { useMenuFilters } from '../../hooks/useMenuFilters';
import CategoryFilter from '../filters/CategoryFilter';
import PriceRangeFilter from '../filters/PriceRangeFilter';
import VegetarianFilter from '../filters/VegetarianFilter';
import AllergensFilter from '../filters/AllergensFilter';
import SortFilter from '../filters/SortFilter';
import ResetFilters from '../filters/ResetFilters';
import MenuResultsCounter from '../filters/MenuResults';

interface MenuFiltersProps {
  resultCount?: number;
}

export default function MenuFilters({ resultCount }: MenuFiltersProps) {
  const { filters, updateFilters, resetFilters } = useMenuFilters();

  return (
    <div className="menu-filters bg-white p-6 rounded-lg shadow-md space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Filtres</h2>
        <ResetFilters onReset={resetFilters} />
      </div>

      <MenuResultsCounter count={resultCount} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <CategoryFilter 
          value={filters.category} 
          onChange={(c) => updateFilters({ category: c })} 
        />
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
          onChange={(a) => updateFilters({ allergens: a })} 
        />
        <SortFilter 
          value={filters.sortBy} 
          onChange={(s) => updateFilters({ sortBy: s })} 
        />
      </div>
    </div>
  );
}