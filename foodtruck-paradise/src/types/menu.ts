export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'entrees' | 'plats' | 'desserts' | 'boissons';
  imageUrl: string;
  isVegetarian: boolean;
  isNew?: boolean;
}

export interface CartItem {
  menuItem: MenuItem;
  quantity: number;
}

export interface PromoCode {
  code: string;
  percent: number;
}