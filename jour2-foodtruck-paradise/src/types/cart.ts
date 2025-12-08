import type { MenuItem } from "./menu";

export interface CartItem {
  id: string;
  item: MenuItem;
  quantity: number;
}