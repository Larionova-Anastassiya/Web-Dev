import {Component, Input, OnInit} from '@angular/core';
import {Observable, share} from 'rxjs';

import { products } from '../products';
import {CartService} from "../cart.service";
import {Category} from "../categories";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  //products = [...products];
  @Input() category!: Category

  share(url: string) {
    var sharelink = "https://t.me/share/url?url="+url;
    window.open(sharelink);
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }






  constructor(private cartService: CartService) { }
  shippingCosts!: Observable<{ type: string, price: number }[]>;

  ngOnInit(): void {
    this.shippingCosts =  this.cartService.getShippingPrices();
  }


}
