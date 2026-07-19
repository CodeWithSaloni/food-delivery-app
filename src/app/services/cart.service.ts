import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItem } from '../models/cart-item.model';
import { MenuItem } from '../models/menu-item.model';

@Injectable({ providedIn: 'root' })
export class CartService {
  private itemsSubject = new BehaviorSubject<CartItem[]>([]);
  items$ = this.itemsSubject.asObservable();

  private get items(): CartItem[] {
    return this.itemsSubject.value;
  }

  addItem(menuItem: MenuItem, restaurantId: number, restaurantName: string): void {
    const currentItems = this.items;
    const isDifferentRestaurant =
      currentItems.length > 0 && currentItems[0].restaurantId !== restaurantId;

    const workingItems = isDifferentRestaurant ? [] : [...currentItems];
    const existing = workingItems.find((i) => i.menuItem.id === menuItem.id);

    if (existing) {
      existing.quantity += 1;
      this.itemsSubject.next([...workingItems]);
    } else {
      workingItems.push({ menuItem, restaurantId, restaurantName, quantity: 1 });
      this.itemsSubject.next(workingItems);
    }
  }

  decrementItem(menuItemId: number): void {
    const workingItems = this.items
      .map((i) => (i.menuItem.id === menuItemId ? { ...i, quantity: i.quantity - 1 } : i))
      .filter((i) => i.quantity > 0);
    this.itemsSubject.next(workingItems);
  }

  removeItem(menuItemId: number): void {
    this.itemsSubject.next(this.items.filter((i) => i.menuItem.id !== menuItemId));
  }

  getItems(): CartItem[] {
    return this.items;
  }

  clearCart(): void {
    this.itemsSubject.next([]);
  }

  getTotal(): number {
    return this.items.reduce((sum, i) => sum + i.menuItem.price * i.quantity, 0);
  }

  getItemCount(): number {
    return this.items.reduce((sum, i) => sum + i.quantity, 0);
  }
}
