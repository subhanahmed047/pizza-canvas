import { action, computed, observable, toJS } from "mobx";
import Ingredient from "../models/ingredient";
import PizzaType from '../models/pizza-type';

class PizzaStore {
  @observable pizzas: PizzaType[] = [
      {
          id: 'cheese_lovers',
          title: 'Cheese Lover',
          ingredients: [
              {
                key: '0',
                id: '0',
                title: 'Cheese'
              },
              {
                key: '1',
                id: '1',
                title: 'Fetta'
              }
          ]
      },
      {
          id: 'bbq_meat_lovers',
          title: 'BBQ Meat Lovers',
          ingredients: [
              {
                key: '0',
                id: '0',
                title: 'Cheese'
              },
              {
                key: '2',
                id: '2',
                title: 'Italian Sausages'
              },
              {
                key: '3',
                id: '3',
                title: 'Pepperoni'
              }
          ]
      }
  ];
  @observable selectedPizza: PizzaType = this.pizzas[0];
  
  @action
  addPizza = (pizza: PizzaType) => {
    this.pizzas.push(pizza);
  };

  @action addIngredients(pizza: PizzaType, ingredients: Ingredient[]){
    this.pizzas.map((p: PizzaType) => {
      if(p.id === pizza.id){
        p.ingredients = ingredients;
        console.log(toJS(p));
      }
      return p;
    });
  }

  @action updateSelected(pizza: PizzaType){
    this.selectedPizza = pizza;
  }

  @computed
  get pizzaCount() {
    return this.pizzas.length;
  }
}

const singleton = new PizzaStore();
export default singleton;