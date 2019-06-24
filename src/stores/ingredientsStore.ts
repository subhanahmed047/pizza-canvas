import { observable } from "mobx";
import IngredientsType from '../models/ingredient';

class IngredientsStore {
  @observable ingredients: IngredientsType[] = [
              {
                key: '0',
                id: '0',
                title: 'Cheese'
              },
              {
                key: '1',
                id: '1',
                title: 'Fetta'
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
              },
              {
                key: '4',
                id: '4',
                title: 'Olives'
              }
  ];
}

const singleton = new IngredientsStore();
export default singleton;