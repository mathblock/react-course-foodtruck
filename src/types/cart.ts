import type Menu from "./menu";

 export interface CartItem {
  item:Menu;
  quantity: number;
  isfavorite: boolean;
}