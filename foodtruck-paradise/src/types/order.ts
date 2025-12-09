import { type CartItem } from './cart';

export interface Order {
  id: string;
  orderNumber: string;
  date: Date;
  items: CartItem[];
  total: number;
  status: 'pending' | 'confirmed' | 'preparing' | 'delivering' | 'delivered' | 'cancelled';
  estimatedDelivery: Date;
  deliveryAddress: {
    street: string;
    city: string;
    postalCode: string;
  };
  promoCode?: string;
  discount?: number;
}
