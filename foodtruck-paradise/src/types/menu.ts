export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: "entrées" | "plats" | "desserts" | "boissons";
  imageUrl: string;
  isVegetarian: boolean;
  isNew?: boolean;
}