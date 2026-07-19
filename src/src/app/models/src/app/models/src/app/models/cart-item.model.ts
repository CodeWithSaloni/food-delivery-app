import { MenuItem } from './menu-item.model';

export interface CartItem {
  menuItem: MenuItem;
  restaurantId: number;
  restaurantName: string;
  quantity: number;
}
