import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItem } from '../models/cart-item.model';
import { Order, OrderStatus } from '../models/order.model';

const STATUS_SEQUENCE: OrderStatus[] = ['Placed', 'Preparing', 'Out for Delivery', 'Delivered'];
const STAGE_DURATION_MS = 4000;

@Injectable({ providedIn: 'root' })
export class OrderService {
  private currentOrderSubject = new BehaviorSubject<Order | null>(null);
  currentOrder$ = this.currentOrderSubject.asObservable();

  private nextOrderId = 1000;

  placeOrder(items: CartItem[], total: number): Order {
    const order: Order = {
      id: this.nextOrderId++,
      items,
      total,
      status: 'Placed',
      placedAt: new Date(),
    };
    this.currentOrderSubject.next(order);
    this.simulateProgress(order.id);
    return order;
  }

  private simulateProgress(orderId: number): void {
    let stageIndex = 0;

    const interval = setInterval(() => {
      stageIndex++;
      const current = this.currentOrderSubject.value;
      if (!current || current.id !== orderId || stageIndex >= STATUS_SEQUENCE.length) {
        clearInterval(interval);
        return;
      }
      this.currentOrderSubject.next({ ...current, status: STATUS_SEQUENCE[stageIndex] });
      if (STATUS_SEQUENCE[stageIndex] === 'Delivered') {
        clearInterval(interval);
      }
    }, STAGE_DURATION_MS);
  }
}
