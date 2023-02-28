import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product, products } from '../products';
import { CartService } from '../cart.service';
import {count} from "rxjs";
import {categories} from "../categories";


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})

export class ProductDetailsComponent implements OnInit {

  product: Product | undefined;

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }

  constructor(private route: ActivatedRoute, private cartService: CartService) { }

  ngOnInit() {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const categoryName = String(routeParams.get('categoryName'))
    const productIdFromRoute = Number(routeParams.get('productId'));

    // Find the product that correspond with the id provided in route.
    //this.product = products.find(product => product.id === productIdFromRoute);
    // @ts-ignore
    this.product = categories.find(category => category.name === categoryName)!.products.find(product => product.id === productIdFromRoute);
  }

  giveLike(product: Product){
    product.likes += 1
  }


}
