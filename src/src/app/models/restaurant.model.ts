import { MenuItem } from './menu-item.model';

export interface Restaurant {
  id: number;
  name: string;
  cuisine: string;
  rating: number;
  deliveryTimeMinutes: number;
  imageEmoji: string;
  menu: MenuItem[];
}
