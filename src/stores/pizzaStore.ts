import { observable, action, computed } from "mobx";
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
                title: 'cheese'
              },
              {
                key: '1',
                id: '1',
                title: 'fetta'
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
                title: 'cheese'
              },
              {
                key: '2',
                id: '2',
                title: 'italian sausages'
              },
              {
                key: '3',
                id: '3',
                title: 'pepperoni'
              }
          ]
      }
  ];

  @action
  addPizza = (pizza: PizzaType) => {
    this.pizzas.push(pizza);
  };

  @computed
  get pizzaCount() {
    return this.pizzas.length;
  }
}

const singleton = new PizzaStore();
export default singleton;