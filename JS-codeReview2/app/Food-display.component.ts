import { Component } from 'angular2/core';
import { Food } from './Food.model';

@Component ({
  selector: 'food-display',
  inputs: ['food'],
  template: `
    <div class="container2">
    <label (click) = "toggleShow()">{{ food.name }} {{ food.notes }}</label>
      <p *ngIf="show === true">{{ food.calories }}</p>
    </div>
  `
})
export class FoodDisplayComponent {
  public food: Food;
  public show: boolean = false;
  toggleShow(){
  	this.show = !this.show;
  }
}


//I want to be able to see all the kegs that have less than 10 pints left so that I can be ready to change them