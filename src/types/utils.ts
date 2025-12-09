import type { CartItem } from "./cart";
import type { MenuItem } from "./menu";

export type Category = {
  key: string;
  label: string;
  color: string;
};

export type MenuFilterProps = {
  menuFiltrer: MenuItem[];
  onAddToCart: (item: MenuItem) => void;
};

export type MenuDefautProps = {
  categories: Category[];
  menuData: MenuItem[];
  onAddToCart: (item: MenuItem) => void;
};

export type CartSummaryProps = {
  carts: CartItem[];
  onUpdateQuantity: (itemId: number, quantity: number) => void;
  onRemove: (itemId: number) => void;
};

export type MenuProps = {
  onAddToCart: (item: MenuItem) => void;
};

export type MenuCardProps = {
  item: MenuItem;
  onAddToCart: (item: MenuItem) => void;
};

export type NavigationMenu = {
  chemin: string;
  classN: string;
  label: string;
  cart?: boolean;
  classN2?: string;
};

export type RouteApp = {
  chemin: string;
  element: React.ReactNode;
  ind?: boolean;
};
