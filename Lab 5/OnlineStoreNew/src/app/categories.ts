import {Product, products} from "./products";

export interface Category{
  name: string,
  products : Product[]
}

export const categories = [
  {
    name: "Coffee (10)",
    products : products
  },
  {
    name: "Tea (5)",
    products : [
      {
        id: 1,
        name: 'Gold Kenyan granulated tea bowl in a box 250 g',
        price: 999,
        description: "Type: black. Product form: granular. Taste: classic. Country of manufacture: Kazakhstan. Storage conditions: in a cool, dry place.",
        img : "/assets/Products/tea/piala-gold-kenijskij-granulirovannyj-v-korobke-250-g-100212303-1-Container.jpg",
        url: "https://kaspi.kz/shop/p/chai-piala-gold-keniiskii-granulirovannyi-v-korobke-250-g-100212303/?c=750000000#!/item",
        rating: 5,
        category: "tea",
        likes: 0
      },
      {
        id: 2,
        name: "Tess black tea, fruit leaf 20 sachets",
        price: 729,
        description: "Type: black,fruity. Product form: sheet. Taste: raspberry, blueberry. Country of manufacture: Russia. Storage conditions: in a cool, dry place.",
        img: "/assets/Products/tea/tess-forest-dream-listovoj-20-paketikov-100210910-1-Container-transformed.png",
        url: "https://kaspi.kz/shop/p/chai-tess-chernyi-fruktovyi-listovoi-20-paketikov-100210910/?c=750000000#!/item",
        rating: 5,
        category: "tea",
        likes: 0
      },
      {
        id: 3,
        name: "Tess Flirt green leaf tea 50 g",
        price: 469,
        description: "Type: green. Product form: sheet. Taste: peach. Country of manufacture: Russia. Storage conditions: in a cool, dry place.",
        img: "/assets/Products/tea/tess-flirt-listovoj-25-paketikov-100213220-1-Container-transformed.png",
        url: "https://kaspi.kz/shop/p/chai-tess-flirt-zelenyi-listovoi-50-g-100213220/?c=750000000#!/item",
        rating: 5,
        category: "tea",
        likes: 0
      },
      {
        id: 4,
        name: "Beta Tea Fusion Fruit Mix leaf tea in a box 100 g",
        price: 438,
        description: "Type: black. Product form: sheet. Taste: rosehip, apple. Country of manufacture: Russia. Storage conditions: in a cool, dry place.",
        img: "/assets/Products/tea/beta-tea-fuzn-fruktovyj-miks-listovoj-v-korobke-100-g-100210644-1-transformed.png",
        url: "https://kaspi.kz/shop/p/chai-beta-tea-f-juzhn-fruktovyi-miks-listovoi-v-korobke-100-g-100210644/?c=750000000#!/item",
        rating: 4,
        category: "tea",
        likes: 0
      },
      {
        id: 5,
        name: "Shah Gold Indian granulated tea in a box 450 g",
        price: 1999,
        description: "Type: black. Product form: granular. Taste: classic. Country of manufacture: Kazakhstan.",
        img: "/assets/Products/tea/tea_shac_gold.png",
        url: "https://kaspi.kz/shop/p/chai-shah-gold-indiiskii-granulirovannyi-v-korobke-450-g-100212614/?c=750000000#!/item",
        rating: 5,
        category: "tea",
        likes: 0
      }
    ]
  },
  {
    name: "Capsules for coffee machines (5)",
    products: [
      {
        id: 1,
        name: "Nespresso Volluto Coffee capsules 10 pcs",
        price: 5400,
        description: "Type: coffee. Standard of capsules/cups: Nespresso Original. Country of manufacture: Switzerland. Storage conditions: Store in a dry place.",
        img: "/assets/Products/capsules/nespresso-volluto-10-st-101080310-1-Container-transformed.png",
        url: "https://kaspi.kz/shop/p/kapsuly-kofe-nespresso-volluto-10-sht-101080310/?c=750000000#!/item",
        rating: 5,
        category: "capsule",
        likes: 0
      },
      {
        id: 2,
        name: "L'or Espresso Caramel Coffee capsules 10 pcs",
        price: 3100,
        description: "Type: coffee. Standard of capsules/cups: Nespresso Original. Country of manufacture: France.",
        img: "/assets/Products/capsules/l-or-espresso-caramel-106884641-1.jpg",
        url: "https://kaspi.kz/shop/p/kapsuly-kofe-l-or-espresso-caramel-10-sht-106884641/?c=750000000#!/item",
        rating: 4.5,
        category: "capsule",
        likes: 0
      },
      {
        id: 3,
        name: "Nespresso Coffee Capsules Starbucks Caffe Verona 10 pcs",
        price: 4500,
        description: "Type: coffee. Standard of capsules/cups: Nespresso Original. Country of manufacture: Switzerland. Storage conditions: Store in a dry place.",
        img: "/assets/Products/capsules/kapsuly-kofe-nespresso-starbucks-caffe-verona-10-sht-101080047-1.png",
        url: "https://kaspi.kz/shop/p/kapsuly-kofe-nespresso-starbucks-caffe-verona-10-sht-101080047/?c=750000000#!/item",
        rating: 5,
        category: "capsule",
        likes: 0
      },
      {
        id: 4,
        name: "L'or Espresso Onyx Coffee Capsules 10 pcs",
        price: 3100,
        description: "Type: coffee. Standard of capsules/cups: Nespresso Original. Country of manufacture: France.",
        img: "/assets/Products/capsules/l-or-espresso-onyx-106884639-1.jpg",
        url: "https://kaspi.kz/shop/p/kapsuly-kofe-l-or-espresso-onyx-10-sht-106884639/?c=750000000#!/item",
        rating: 5,
        category: "capsule",
        likes: 0
      },
      {
        id: 5,
        name: "Lavazza Blue Ricco Coffee capsules 100 pcs",
        price: 18000,
        description: "Type: coffee. Standard capsules / chalds: Lavazza. Country of manufacture: Italy.",
        img: "/assets/Products/capsules/lavazza-blue-ricco-100-st-102400979-1-Container.png",
        url: "https://kaspi.kz/shop/p/kapsuly-kofe-lavazza-blue-ricco-100-sht-102400979/?c=750000000#!/item",
        rating: 5,
        category: "capsule",
        likes: 0
      }
    ]
  },
  {
    name: "Cocoa and hot chocolate (5)",
    products: [
      {
        id: 1,
        name: "Kurukahveci Mehmet Efendii Turkish cocoa 250 g",
        price: 3600,
        description: "Type: cocoa. Product type: instant. Sugar-free: Yes. Does not contain: artificial additives. Country of manufacture: Turkey.",
        img: "/assets/Products/cocoa/mehmet-efendi-po-turecki-250-g-101476564-1-Container-transformed.png",
        url: "https://kaspi.kz/shop/p/kurukahveci-mehmet-efendii-kakao-po-turetski-250-g-101476564/?c=750000000#!/item",
        rating: 5,
        category: "cocoa",
        likes: 0
      },
      {
        id: 2,
        name: "MacChocolate hot chocolate 20 g",
        price: 71,
        description: "Type: hot chocolate. Product type: instant. Without sugar: No. Does not contain: GMOs. Country of manufacture: Russia.",
        img: "/assets/Products/cocoa/macchocolate-3v1-20-paketikov-100225027-1-Container.jpg",
        url: "https://kaspi.kz/shop/p/macchocolate-gorjachii-shokolad-20-g-100225027/?c=750000000#!/item",
        rating: 5,
        category: "cocoa",
        likes: 0
      },
      {
        id: 3,
        name: "Ristora Bar hot chocolate 1000 g",
        price: 5200,
        description: "Type: hot chocolate. Product type: instant. Without sugar: No. Does not contain: GMOs. Country of manufacture: Italy. Storage conditions: store in a cool, dry place at a temperature not higher than +25 °C and relative humidity not higher than 75% away from direct sunlight.",
        img: "/assets/Products/cocoa/ristora-bar-goracij-sokolad-1-kg-101168025-1-Container-transformed.png",
        url: "https://kaspi.kz/shop/p/ristora-bar-gorjachii-shokolad-1000-g-101168025/?c=750000000#!/item",
        rating: 5,
        category: "cocoa",
        likes: 0
      },
      {
        id: 4,
        name: "Lantel instant cocoa 150 g",
        price: 850,
        description: "Type: cocoa. Product type: instant. Sugar-free: Yes. Country of manufacture: Russia.",
        img: "/assets/Products/cocoa/lantel-rastvorimyj-150-g-102722157-1-transformed.png",
        url: "https://kaspi.kz/shop/p/lantel-rastvorimyi-kakao-150-g-102722157/?c=750000000#!/item",
        rating: 4.5,
        category: "cocoa",
        likes: 0
      },
      {
        id: 5,
        name: "Royal Forest carob fried 200 g",
        price: 1600,
        description: "Type: carob. Product type: instant. Without sugar: No. Country of manufacture: Spain.",
        img: "/assets/Products/cocoa/royal-forest-kerob-obzharennyi-200-gr-108235335-1-transformed.png",
        url: "https://kaspi.kz/shop/p/royal-forest-kerob-obzharennyi-200-g-108235335/?c=750000000#!/item",
        rating: 0,
        category: "cocoa",
        likes: 0
      }
    ]
  }

]
