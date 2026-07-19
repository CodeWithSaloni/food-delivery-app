import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { RestaurantService } from '../../services/restaurant.service';
import { CartService } from '../../services/cart.service';
import { Restaurant } from '../../models/restaurant.model';
import { MenuItem } from '../../models/menu-item.model';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent implements OnInit {
  restaurant?: Restaurant;

  constructor(
    private route: ActivatedRoute,
    private restaurantService: RestaurantService,
    public cartService: CartService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.restaurant = this.restaurantService.getRestaurantById(id);
  }

  addToCart(item: MenuItem): void {
    if (!this.restaurant) return;
    this.cartService.addItem(item, this.restaurant.id, this.restaurant.name);
  }
}
