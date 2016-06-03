import {Component, EventEmitter} from 'angular2/core';
import {Food} from './Food.model';

@Component({
	selector: 'new-food',
	outputs: ['onSubmitNewFood'],
	template: `
	<div id=newFood>
	  <h2>Add a Meal</h2>
	  <input placeholder="Food" class="col-sm-8 input-sm" #foodName>
    <input placeholder="Notes" class="col-sm-8 input-sm" #foodNotes>
	  <input placeholder="Calories" class="col-sm-8 input-sm" #foodCalories>
	  <button (click)="addFood(foodName, foodNotes, foodCalories)" class="btn-success btn-sm">ADD</button>
  </div>
  `
})

export class NewFoodComponent{
  public onSubmitNewFood: EventEmitter<Food>;
  constructor(){
    this.onSubmitNewFood = new EventEmitter();
  }
  addFood(nameOfFood: HTMLInputElement, notesOnFood: HTMLInputElement, caloriesOfFood: HTMLInputElement, restaurantCost: HTMLInputElement) {
  	var newFood = new Food(nameOfFood.value, notesOnFood.value, parseInt(caloriesOfFood.value));
  	this.onSubmitNewFood.emit(newFood);
  	nameOfFood.value = "";
  	notesOnFood.value = "";
  	caloriesOfFood.value = "";
  	console.log(newFood);
  }
}
