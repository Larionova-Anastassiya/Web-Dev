import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDo';

  items: string[];
  display: string;

  constructor() {
    this.items = [];
    this.display = '';




  }

  addItem() {
    if (this.display !== ''){
      this.items.push(this.display);
      this.display = '';
    } else {
      alert('Enter the task description');
    }
  }

  removeItem(i: number) {
    this.items.splice(i, 1);
  }
}
