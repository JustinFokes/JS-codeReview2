import { Component } from 'angular2/core';
import { Food } from './Food.model';

@Component ({
  selector: 'food-display',
  inputs: ['food'],
  template: `
  
  <div class="food-form"> 
    <h5 (click) = "toggleShow()">{{ food.name }}</h5>
    <p *ngIf="show === true">Notes: {{ food.notes }} --- Calories: {{ food.calories }}</p>
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
