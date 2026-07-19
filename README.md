# Online Food Delivery Application built with Angular
A responsive food ordering web app built with **Angular** (standalone components) and **TypeScript**, where users can browse restaurants, build an order, check out, and track delivery status in real time.

## Features

- Browse a list of restaurants with cuisine, rating, and delivery time
- View a restaurant's menu and add items to a running cart
- Cart supports quantity adjustment and item removal
- Single-restaurant cart rule (matches how real delivery apps prevent mixed orders)
- Order placement with a simulated live status tracker: **Placed → Preparing → Out for Delivery → Delivered**
- Fully responsive UI with a custom design system (no UI framework dependency)

## Tech Stack

| Layer          | Technology                              |
|----------------|-------------------------------------------|
| Framework      | Angular 17 (standalone components)        |
| Language       | TypeScript                                |
| State          | RxJS (`BehaviorSubject`) via services      |
| Routing        | Angular Router                            |
| Styling        | Plain CSS with CSS variables              |

## Project Structure
food-delivery-app/
├── src/
│   ├── app/
│   │   ├── models/                 # Restaurant, MenuItem, CartItem, Order interfaces
│   │   ├── services/
│   │   │   ├── restaurant.service.ts   # Mock restaurant/menu data
│   │   │   ├── cart.service.ts         # Cart state (add/remove/quantity)
│   │   │   └── order.service.ts        # Places orders, simulates status progression
│   │   ├── components/
│   │   │   ├── restaurant-list/    # Home page — browse restaurants
│   │   │   ├── menu/               # Restaurant menu — add items to cart
│   │   │   ├── cart/               # Review cart, checkout
│   │   │   └── order-tracking/     # Live order status tracker
│   │   ├── app.component.ts        # Root shell (header, cart badge, router outlet)
│   │   ├── app.routes.ts
│   │   └── app.config.ts
│   ├── index.html
│   ├── main.ts
│   └── styles.css
├── angular.json
├── package.json
└── tsconfig.json

## How It Works

- **RestaurantService** holds mock restaurant and menu data (swap this for real HTTP calls to a backend API without touching any component).
- **CartService** exposes cart state as an observable (`items$`) so the cart badge in the header and the cart page stay in sync automatically.
- **OrderService** creates an order on checkout and advances its status on a timer, simulating what a real backend + WebSocket/polling connection would do.

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) 18+ and npm
- Angular CLI: `npm install -g @angular/cli`

### Run locally

```bash
git clone https://github.com/CodeWithSaloni/food-delivery-app.git
cd food-delivery-app
npm install
ng serve
```

Open `http://localhost:4200` in your browser.

## Possible Enhancements

- Connect `RestaurantService` to a real backend API (e.g. ASP.NET Core Web API + SQL Server)
- Add user authentication and order history
- Add restaurant search and cuisine filters
- Persist cart state across page reloads
- Replace the simulated tracker with real-time updates via SignalR/WebSockets

## Author

**Saloni Kamble**
[GitHub](https://github.com/CodeWithSaloni) · [LinkedIn](https://linkedin.com/in/saloni-k-86301a247)
