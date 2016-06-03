import { Component } from 'angular2/core';
import { Food } from './Food.model';
import { FoodListComponent } from './Food-list.component';




@Component ({
  selector: 'my-app',
  directives: [FoodListComponent],
  template: `

  <div id="heading">
    <h1>Food Log</h1>
    <h3>(Click the Food Item to Display Calories and Notes)</h3>
    <food-list (onFoodSelect)="receiveFood($event)" [foodList] = "foods"></food-list>
  </div>
  `
})

export class AppComponent {
  public foods: Food[];
  constructor() {
    this.foods = [
      new Food("Pizza", "Definitely caved on this one", 5000),
      new Food("Chicken", "Great meal, and low on carbs too", 250),
    ];
  }
  receiveFood(newFood: Food): void {
  }
}


//Directive's pull in immported forms? A little shaky on this one... Directives pull in information...

//inputs store data from the component you are working within. Once you import the component, this data is still accessible.

//outputs list properties which have been emmitted... An emmitted property is sent to the "Parent"
