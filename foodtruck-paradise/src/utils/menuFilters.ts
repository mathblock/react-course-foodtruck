import type { FilterState } from "../types/menu";

export const parseFiltersFromSearchParams = (searchParams: URLSearchParams): FilterState| null =>{
    const category = searchParams.get('category') as FilterState['category'] | null;
  const minPrice = Number(searchParams.get('minPrice') || 0);
  const maxPrice = Number(searchParams.get('maxPrice') || 50);
  const isVegetarian = searchParams.get('vegetarian') === 'true';
  const allergens = searchParams.get('allergens')?.split(',').filter(Boolean) || [];
  const sortBy = searchParams.get('sort') as FilterState['sortBy'];

  if (!searchParams.toString()) return null; 

  return {
    category: category === 'all' || !category ? 'all' : category,
    minPrice: isNaN(minPrice) ? 0 : minPrice,
    maxPrice: isNaN(maxPrice) ? 50 : maxPrice,
    isVegetarian,
    allergens,
    sortBy: sortBy || 'name',
  };
};
 export const stringifyFilters = (filters: FilterState): URLSearchParams => {
  const params = new URLSearchParams();

  if (filters.category && filters.category !== 'all') params.set('category', filters.category);
  if (filters.minPrice > 0) params.set('minPrice', filters.minPrice.toString());
  if (filters.maxPrice < 50) params.set('maxPrice', filters.maxPrice.toString());
  if (filters.isVegetarian) params.set('vegetarian', 'true');
  if (filters.allergens.length > 0) params.set('allergens', filters.allergens.join(','));
  if (filters.sortBy !== 'name') params.set('sort', filters.sortBy);

  return params;
}; 