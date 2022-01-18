import { Component, VERSION } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  fruits = ['Mengo', 'Orange', 'Banana'];
  fruitss = new BehaviorSubject(['Mengo', 'Orange', 'Banana']);
  constructor() {}

  addFruit(item) {
    //this.fruits.push(item);
    this.fruits = [...this.fruits, item];
  }
  addFruits(it) {
    this.fruitss.next(it);
  }
}
