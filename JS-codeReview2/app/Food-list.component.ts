import { Component, EventEmitter } from 'angular2/core';
import { Food } from './Food.model';
import { NewFoodComponent } from './new-Food.component';
import { FoodDisplayComponent } from './Food-display.component';



@Component ({
  selector: 'food-list',
  inputs: ['foodList'],
  outputs: ['onFoodSelect'],
  directives: [NewFoodComponent, FoodDisplayComponent],
  template: `

    <food-display *ngFor="#currentFood of foodList"
      (click)="foodClicked(currentFood)"
      [class.selected]="currentFood === selectedFood"
      [food]="currentFood">
    </food-display>
    <new-food (onSubmitNewFood)="addFood($event)" [food]="selectedFood"></new-food>
  `
})
export class FoodListComponent {
  public foodList : Food[];
  public onFoodSelect : EventEmitter<Food>;
  public selectedFood : Food;
  constructor() {
    this.onFoodSelect = new EventEmitter();
  }
  foodClicked(clickedFood : Food): void {
    this.selectedFood = clickedFood;
    this.onFoodSelect.emit(clickedFood);
  }
  addFood(newFood : Food): void {
    this.foodList.push(newFood);
    console.log(newFood);
  }
}