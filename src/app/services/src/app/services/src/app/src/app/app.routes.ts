import { Routes } from '@angular/router';
import { RestaurantListComponent } from './components/restaurant-list/restaurant-list.component';
import { MenuComponent } from './components/menu/menu.component';
import { CartComponent } from './components/cart/cart.component';
import { OrderTrackingComponent } from './components/order-tracking/order-tracking.component';

export const routes: Routes = [
  { path: '', component: RestaurantListComponent },
  { path: 'restaurant/:id', component: MenuComponent },
  { path: 'cart', component: CartComponent },
  { path: 'order/:id', component: OrderTrackingComponent },
];
