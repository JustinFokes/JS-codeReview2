import { Component } from 'angular2/core';
import { Food } from './Food.model';

@Component ({
  selector: 'food-display',
  inputs: ['food'],
  template: `
   
    <label (click) = "toggleShow()">{{ food.name }} {{ food.notes }}</label>
      <p *ngIf="show === true">{{ food.calories }}</p>
    
  `
})
export class FoodDisplayComponent {
  public food: Food;
  public show: boolean = false;
  toggleShow(){
  	this.show = !this.show;
  }
}
