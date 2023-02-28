import { Component } from '@angular/core';
import {Category, categories} from "../categories";

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent {
  categories = categories

  currentCategory = categories[0];

  changeCategory(cat : Category){
    this.currentCategory = cat
  }

}

