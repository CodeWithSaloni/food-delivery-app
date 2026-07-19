import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  constructor(
    public cartService: CartService,
    private orderService: OrderService,
    private router: Router
  ) {}

  increment(menuItemId: number, restaurantId: number, restaurantName: string): void {
    const item = this.currentItems().find((i) => i.menuItem.id === menuItemId);
    if (item) {
      this.cartService.addItem(item.menuItem, restaurantId, restaurantName);
    }
  }

  decrement(menuItemId: number): void {
    this.cartService.decrementItem(menuItemId);
  }

  remove(menuItemId: number): void {
    this.cartService.removeItem(menuItemId);
  }

  currentItems() {
    return this.cartService.getItems();
  }

  checkout(): void {
    const items = this.currentItems();
    if (items.length === 0) return;

    const total = this.cartService.getTotal();
    const order = this.orderService.placeOrder(items, total);
    this.cartService.clearCart();
    this.router.navigate(['/order', order.id]);
  }
}
