export type Category = 'all' | 'entrees' |'plats'| 'desserts' | 'boissons';
export type SortBy = 'price-asc' | 'price-desc' | 'name' | 'rating';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'entrees' | 'plats' | 'desserts' | 'boissons';
  imageUrl: string;
  isVegetarian: boolean;
  isNew?: boolean;
  allergens: string[];
  rating: number;
  reviewCount: number;
}
export interface FilterState {
  category: Category;
  minPrice: number;
  maxPrice: number;
  isVegetarian: boolean;
  allergens: string[];
  sortBy: SortBy;
}


export const defaultFilters: FilterState = {
  category: 'all',
  minPrice: 0,
  maxPrice: 50,
  isVegetarian: false,
  allergens: [],
  sortBy: 'name',
};