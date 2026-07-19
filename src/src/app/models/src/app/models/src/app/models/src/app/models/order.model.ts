import { CartItem } from './cart-item.model';

export type OrderStatus = 'Placed' | 'Preparing' | 'Out for Delivery' | 'Delivered';

export interface Order {
  id: number;
  items: CartItem[];
  total: number;
  status: OrderStatus;
  placedAt: Date;
}
