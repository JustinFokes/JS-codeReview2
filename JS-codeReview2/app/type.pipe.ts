import {Pipe, PipeTransform} from 'angular2/core';
import { Food } from './Food.model';

@Pipe({
	name: "foodFilter",
	pure: false, 
})

export class TypePipe implements PipeTransform {
  transform(input: Food[], args) {
    var foodType = args[0];
    if(foodType === "Healthy") {
      return input.filter(function(food) {
        if(food.calories <= 500){
        	return true;
        } else{
        	return false;
        }
      });
    } else if(foodType === "Unhealthy"){
    	return input.filter(function(food){
    		if(food.calories > 500){
    			return true;
    		} else{
    			return false;
    		}
    	});
    } 
  }
}
