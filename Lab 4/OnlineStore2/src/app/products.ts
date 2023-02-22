export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  rating:number;

  url: string;
}

export const products = [
  {
    id: 1,
    name: 'Instant coffee Jacobs Monarch 400 g ',
    price: 4990,
    description: "Type of drink: Americano." +
      "With ground coffee: No. " +
      "Taste: natural. " +
      "Number of servings: 200. " +
      "Country of production: Russia. " +
      "Storage conditions: store at a temperature not higher than +25 ° C and relative humidity not higher than 75%.",
    img : "/assets/StoresImage/jacobs-monarch-paket-400-g.png",
    url: "https://kaspi.kz/shop/p/kofe-rastvorimyi-jacobs-monarch-400-g-100207926/?c=750000000#!/item",
    rating: 5
  },
  {
    id: 2,
    name: 'Instant coffee MacCoffee coffee mix 20 g ',
    price: 79,
    description: "Type of drink: 3 in 1. " +
      "With ground coffee: No. " +
      "Taste: natural. " +
      "Number of servings: 1. " +
      "Country of manufacture: Malaysia.",
    img : "/assets/StoresImage/kofe-maccoffee-3v1-original-20gr.jpg",
    url: "https://kaspi.kz/shop/p/kofe-rastvorimyi-maccoffee-coffee-mix-20-g-105058953/?c=750000000#!/item",
    rating: 5
  },
  {
    id: 3,
    name: 'Instant coffee Jacobs Monarch 95 g ',
    price: 1748,
    description: "Type of drink: Americano. " +
      "With ground coffee: No. " +
      "Taste: natural. " +
      "Number of servings: 47. " +
      "Country of manufacture: Russia. " +
      "Storage conditions: store at a temperature not higher than +25 ° C and relative humidity not higher than 75%.",
    img : "/assets/StoresImage/jacobs-monarch-banka-95-g.png",
    url: "https://kaspi.kz/shop/p/kofe-rastvorimyi-jacobs-monarch-95-g-100207925/?c=750000000#!/item",
    rating: 5
  },
  {
    id: 4,
    name: 'Instant coffee NESCAFE Gold 60 g ',
    price: 1159,
    description: "Type of drink: Americano. " +
      "With ground coffee: No. " +
      "Taste: natural. " +
      "Number of servings: 30. " +
      "Country of manufacture: Russia. " +
      "Storage conditions: store at a temperature not higher than +25 ° C and relative humidity not higher than 75%.",
    img : "/assets/StoresImage/kofe-rastvorimyi-nescafe-gold-60-g-transformed.png",
    url: "https://kaspi.kz/shop/p/kofe-rastvorimyi-nescafe-gold-60-g-100208018/?c=750000000#!/item",
    rating: 5,
  },
  {
    id: 5,
    name: 'Instant coffee MacCoffee Arabica 100 g ',
    price: 1925,
    description: "Type of drink: Americano. " +
      "With ground coffee: No. " +
      "Taste: natural. " +
      "Number of servings: 50. " +
      "Country of manufacture: Russia. " +
      "Storage conditions: store at a temperature not higher than +25 ° C and relative humidity not higher than 75%.",
    img : "/assets/StoresImage/maccoffee-arabica-banka-100-g-transformed.png",
    url: "https://kaspi.kz/shop/p/kofe-rastvorimyi-maccoffee-arabica-100-g-100208058/?c=750000000#!/item",
    rating: 3.5
  },
  {
    id: 6,
    name: 'Lavazza Crema e Aroma grain coffee in a package of 1000 g ',
    price: 8499,
    description: "Type: grain. " +
      "Type of grains: arabica/robusta. " +
      "Roasting: medium. " +
      "Grinding: medium. " +
      "Country of production: Italy.",
    img : "/assets/StoresImage/lavazza-crema-e-aroma-zernovoj-v-pakete-1000-g-transformed.png",
    url: "https://kaspi.kz/shop/p/kofe-lavazza-crema-e-aroma-zernovoi-v-pakete-1000-g-100828062/?c=750000000#!/item",
    rating: 5
  },
  {
    id: 7,
    name: 'Carte Noire Original ground coffee in a package of 230 g',
    price: 3445,
    description: "Type: ground. " +
      "Grain type: arabica. " +
      "Roasting: medium. " +
      "Grinding: medium. " +
      "Country of production: Russia. " +
      "Storage conditions: store at a temperature not higher than +25 ° C and relative humidity not higher than 75%.",
    img : "/assets/StoresImage/carte-noire-original-molotyj-v-pakete-230-g.jpg",
    url: "https://kaspi.kz/shop/p/kofe-carte-noire-original-molotyi-v-pakete-230-g-100219167/?c=750000000#!/item",
    rating: 5
  },
  {
    id: 8,
    name: 'Coffee Jardin Espresso Di Milano grain arabica 500 g',
    price: 3839,
    description: "Type: grain. " +
      "Type of grains: arabica. " +
      "Roasting: dark. " +
      "Grinding: medium. " +
      "Country of production: Russia.",
    img : "/assets/StoresImage/Coffee-Jardin-Espresso-Di-Milano-grain-arabica-500-g.png",
    url: "https://kaspi.kz/shop/p/kofe-jardin-espresso-di-milano-zernovoi-arabika-500-g-103292864/?c=750000000#!/item",
    rating: 5
  },
  {
    id: 9,
    name: 'Jacobs Barista Editions Italiano coffee grain 800 g',
    price: 8697,
    description: "Type: grain. " +
      "Type of grains: arabica. " +
      "Roasting: medium. " +
      "Taste: natural. " +
      "Country of production: Russia.",
    img : "/assets/StoresImage/kofe-jacobs-barista-italiano-v-zernah-800gr-transformed.png",
    url: "https://kaspi.kz/shop/p/kofe-jacobs-barista-editions-italiano-zernovoi-800-g-105339313/?c=750000000#!/item",
    rating: 5
  },
  {
    id: 10,
    name: 'Tchibo Exclusive ground coffee 250 g',
    price: 2800,
    description: "Type: ground. " +
      "Grain type: arabica/robusta. " +
      "Roasting: medium. " +
      "Taste: natural. " +
      "country of production: Germany.",
    img : "/assets/StoresImage/kofe-tchibo-exclusive-molotyj-250-g-transformed.png",
    url: "https://kaspi.kz/shop/p/kofe-tchibo-exclusive-molotyi-250-g-105120717/?c=750000000#!/item",
    rating: 5
  }
];
