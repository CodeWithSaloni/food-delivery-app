import { Injectable } from '@angular/core';
import { Restaurant } from '../models/restaurant.model';

@Injectable({ providedIn: 'root' })
export class RestaurantService {
  private restaurants: Restaurant[] = [
    {
      id: 1,
      name: 'Spice Route',
      cuisine: 'North Indian',
      rating: 4.5,
      deliveryTimeMinutes: 30,
      imageEmoji: '🍛',
      menu: [
        { id: 101, name: 'Butter Chicken', description: 'Creamy tomato curry with tender chicken', price: 320, isVeg: false },
        { id: 102, name: 'Paneer Tikka Masala', description: 'Grilled paneer in a spiced tomato gravy', price: 280, isVeg: true },
        { id: 103, name: 'Garlic Naan', description: 'Tandoor-baked flatbread with garlic butter', price: 60, isVeg: true },
        { id: 104, name: 'Dal Makhani', description: 'Slow-cooked black lentils in butter and cream', price: 220, isVeg: true },
      ],
    },
    {
      id: 2,
      name: 'Bella Italia',
      cuisine: 'Italian',
      rating: 4.3,
      deliveryTimeMinutes: 40,
      imageEmoji: '🍕',
      menu: [
        { id: 201, name: 'Margherita Pizza', description: 'Classic tomato, mozzarella, and basil', price: 350, isVeg: true },
        { id: 202, name: 'Pepperoni Pizza', description: 'Loaded with spicy pepperoni', price: 420, isVeg: false },
        { id: 203, name: 'Alfredo Pasta', description: 'Creamy parmesan sauce with penne', price: 300, isVeg: true },
        { id: 204, name: 'Garlic Bread', description: 'Toasted baguette with garlic herb butter', price: 120, isVeg: true },
      ],
    },
    {
      id: 3,
      name: 'Dragon Wok',
      cuisine: 'Chinese',
      rating: 4.1,
      deliveryTimeMinutes: 25,
      imageEmoji: '🥡',
      menu: [
        { id: 301, name: 'Veg Hakka Noodles', description: 'Stir-fried noodles with fresh vegetables', price: 210, isVeg: true },
        { id: 302, name: 'Chicken Manchurian', description: 'Crispy chicken tossed in a tangy sauce', price: 280, isVeg: false },
        { id: 303, name: 'Spring Rolls', description: 'Crispy rolls with a vegetable filling', price: 150, isVeg: true },
      ],
    },
  ];

  getRestaurants(): Restaurant[] {
    return this.restaurants;
  }

  getRestaurantById(id: number): Restaurant | undefined {
    return this.restaurants.find((r) => r.id === id);
  }
}
