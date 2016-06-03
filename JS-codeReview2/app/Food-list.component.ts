import { Component, EventEmitter } from 'angular2/core';
import { Food } from './Food.model';
import { NewFoodComponent } from './new-Food.component';
import { FoodDisplayComponent } from './Food-display.component';
import { TypePipe } from './type.pipe';
import { EditFoodDetailsComponent } from './edit-food-details.component';



@Component ({
  selector: 'food-list',
  inputs: ['foodList'],
  outputs: ['onFoodSelect'],
  pipes: [TypePipe],
  directives: [NewFoodComponent, FoodDisplayComponent, EditFoodDetailsComponent],
  template: `

    <select (change)="onChange($event.target.value)" class="filter">
      <option value="Healthy">Foods less than 500Kcal</option>
      <option value="Unhealthy">Foods with MORE than 500Kcal</option>
    </select>

    <food-display *ngFor="#currentFood of foodList | foodFilter: filterFood"
      (click)="foodClicked(currentFood)"
      [class.selected]="currentFood === selectedFood"
      [food]="currentFood">
    </food-display>
    <edit-food-details *ngIf="selectedFood" [food]="selectedFood"></edit-food-details>
    <new-food (onSubmitNewFood)="addFood($event)"></new-food>
    
  `
})
export class FoodListComponent {
  public foodList : Food[];
  public onFoodSelect : EventEmitter<Food>;
  public selectedFood : Food;
  public filterFood: string = "Healthy";
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
  onChange(filterOption) {
    this.filterFood = filterOption;
  }
}



//[()] <-- : input/output...

//[food]="selectedFood" removed from <new-food>