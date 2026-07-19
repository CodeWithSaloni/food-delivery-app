import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { OrderService } from '../../services/order.service';
import { OrderStatus } from '../../models/order.model';

const STEPS: OrderStatus[] = ['Placed', 'Preparing', 'Out for Delivery', 'Delivered'];

@Component({
  selector: 'app-order-tracking',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './order-tracking.component.html',
  styleUrl: './order-tracking.component.css',
})
export class OrderTrackingComponent {
  steps = STEPS;
  currentOrder$ = this.orderService.currentOrder$;

  constructor(private orderService: OrderService) {}

  stepIndex(status: OrderStatus): number {
    return this.steps.indexOf(status);
  }
}
