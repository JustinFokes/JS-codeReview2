import { Component } from 'angular2/core';
import { Food } from './Food.model';



@Component ({
  selector: 'my-app',
  directives: [],
  template: `

  <div id="heading">
    <h1>Food Log</h1>
  </div>

  `
})

export class AppComponent {
  public foods: Food[];
  constructor() {
    this.foods = [
      new Food("Pizza", "Definitely caved on this one!", 5000),
      new Food("Chicken", "Great meal, and low on carbs too!", 250),
    ];
  }
}


//Directive's pull in immported forms? A little shaky on this one... Directives pull in information...

//inputs store data from the component you are working within. Once you import the component, this data is still accessible.

//outputs list properties which have been emmitted... An emmitted property is sent to the "Parent"
