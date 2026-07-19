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
