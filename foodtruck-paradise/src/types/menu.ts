export type Category = "entrees" | "plats" | "desserts" | "boissons";

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: Category;
  imageUrl: string;
  isVegetarian: boolean;
  isNew?: boolean;
}
