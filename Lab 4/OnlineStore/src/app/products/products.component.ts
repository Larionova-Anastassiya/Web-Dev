import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: any[]

  constructor() {
    this.products = [
      {
        "image": "/assets/StoresImage/jacobs-monarch-paket-400-g.png",
        "name": "Instant coffee Jacobs Monarch 400 g",
        "description": "Type of drink: Americano. " +
          "With ground coffee: No. " +
          "Taste: natural. " +
          "Number of servings: 200. " +
          "Country of production: Russia. " +
          "Storage conditions: store at a temperature not higher than +25 ° C and relative humidity not higher than 75%.",
        "rating": 5,
        "price": 4990
      },
      {
        "image": "/assets/StoresImage/kofe-maccoffee-3v1-original-20gr.jpg",
        "name": "Instant coffee MacCoffee coffee mix 20 g",
        "description": "Type of drink: 3 in 1. " +
          "With ground coffee: No. " +
          "Taste: natural. " +
          "Number of servings: 1. " +
          "Country of manufacture: Malaysia.",
        "rating": 5,
        "price": 79
      },
      {
        "image": "/assets/StoresImage/jacobs-monarch-banka-95-g.png",
        "name": "Instant coffee Jacobs Monarch 95 g",
        "description": "Type of drink: Americano. " +
          "With ground coffee: No. " +
          "Taste: natural. " +
          "Number of servings: 47. " +
          "Country of manufacture: Russia. " +
          "Storage conditions: store at a temperature not higher than +25 ° C and relative humidity not higher than 75%.",
        "rating": 5,
        "price": 1748
      },
      {
        "image": "/assets/StoresImage/kofe-rastvorimyi-nescafe-gold-60-g-transformed.png",
        "name": "Instant coffee NESCAFE Gold 60 g",
        "description": "Type of drink: Americano. " +
          "With ground coffee: No. " +
          "Taste: natural. " +
          "Number of servings: 30. " +
          "Country of manufacture: Russia. " +
          "Storage conditions: store at a temperature not higher than +25 ° C and relative humidity not higher than 75%.",
        "rating": 5,
        "price": 1159
      },
      {
        "image": "/assets/StoresImage/maccoffee-arabica-banka-100-g-transformed.png",
        "name": "Instant coffee MacCoffee Arabica 100 g",
        "description": "Type of drink: Americano. " +
          "With ground coffee: No. " +
          "Taste: natural. " +
          "Number of servings: 50. " +
          "Country of manufacture: Russia. " +
          "Storage conditions: store at a temperature not higher than +25 ° C and relative humidity not higher than 75%.",
        "rating": 3.5,
        "price": 1925
      },
      {
        "image": "/assets/StoresImage/lavazza-crema-e-aroma-zernovoj-v-pakete-1000-g-transformed.png",
        "name": "Lavazza Crema e Aroma grain coffee in a package of 1000 g",
        "description": "Type: grain. " +
          "Type of grains: arabica/robusta. " +
          "Roasting: medium. " +
          "Grinding: medium. " +
          "Country of production: Italy.",
        "rating": 5,
        "price": 8499
      },
      {
        "image": "/assets/StoresImage/carte-noire-original-molotyj-v-pakete-230-g.jpg",
        "name": "Carte Noire Original ground coffee in a package of 230 g",
        "description": "Type: ground. " +
          "Grain type: arabica. " +
          "Roasting: medium. " +
          "Grinding: medium. " +
          "Country of production: Russia. " +
          "Storage conditions: store at a temperature not higher than +25 ° C and relative humidity not higher than 75%.",
        "rating": 5,
        "price": 3445
      },
      {
        "image": "/assets/StoresImage/Coffee-Jardin-Espresso-Di-Milano-grain-arabica-500-g.png",
        "name": "Coffee Jardin Espresso Di Milano grain arabica 500 g",
        "description": "Type: grain. " +
          "Type of grains: arabica. " +
          "Roasting: dark. " +
          "Grinding: medium. " +
          "Country of production: Russia.",
        "rating": 5,
        "price": 3839
      },
      {
        "image": "/assets/StoresImage/kofe-jacobs-barista-italiano-v-zernah-800gr-transformed.png",
        "name": "Кофе Jacobs Barista Editions Italiano зерновой 800 г",
        "description": "Type: grain. " +
          "Type of grains: arabica. " +
          "Roasting: medium. " +
          "Taste: natural. " +
          "Country of production: Russia.",
        "rating": 5,
        "price": 8697
      },
      {
        "image": "/assets/StoresImage/kofe-tchibo-exclusive-molotyj-250-g-transformed.png",
        "name": "Tchibo Exclusive ground coffee 250 g",
        "description": "Type: ground. " +
          "Grain type: arabica/robusta. " +
          "Roasting: medium. " +
          "Taste: natural. " +
          "country of production: Germany.",
        "rating": 5,
        "price": 2800
      }
    ]

  }

  links(index: Number) {
    if (index == 0) {
      window.location.href = 'https://kaspi.kz/shop/p/kofe-rastvorimyi-jacobs-monarch-400-g-100207926/?c=750000000#!/item';
    }
    else if (index == 1) {
      window.location.href = 'https://kaspi.kz/shop/p/kofe-rastvorimyi-maccoffee-coffee-mix-20-g-105058953/?c=750000000#!/item';
    }
    else if (index == 2) {
      window.location.href = 'https://kaspi.kz/shop/p/kofe-rastvorimyi-jacobs-monarch-95-g-100207925/?c=750000000#!/item';
    }
    else if (index == 3) {
      window.location.href = 'https://kaspi.kz/shop/p/kofe-rastvorimyi-nescafe-gold-60-g-100208018/?c=750000000#!/item';
    }
    else if (index == 4) {
      window.location.href = 'https://kaspi.kz/shop/p/kofe-rastvorimyi-maccoffee-arabica-100-g-100208058/?c=750000000#!/item';
    }
    else if (index == 5) {
      window.location.href = 'https://kaspi.kz/shop/p/kofe-lavazza-crema-e-aroma-zernovoi-v-pakete-1000-g-100828062/?c=750000000#!/item';
    }
    else if (index == 6) {
      window.location.href = 'https://kaspi.kz/shop/p/kofe-carte-noire-original-molotyi-v-pakete-230-g-100219167/?c=750000000#!/item';
    }
    else if (index == 7) {
      window.location.href = 'https://kaspi.kz/shop/p/kofe-jardin-espresso-di-milano-zernovoi-arabika-500-g-103292864/?c=750000000#!/item';
    }
    else if (index == 8) {
      window.location.href = 'https://kaspi.kz/shop/p/kofe-jacobs-barista-editions-italiano-zernovoi-800-g-105339313/?c=750000000#!/item';
    }
    else if (index == 9) {
      window.location.href = 'https://kaspi.kz/shop/p/kofe-tchibo-exclusive-molotyi-250-g-105120717/?c=750000000#!/item';
    }
    else {
      window.location.href = '';
    }
  }
}
