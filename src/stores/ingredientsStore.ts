import { observable } from "mobx";
import IngredientsType from '../models/ingredient';

class IngredientsStore {
  @observable ingredients: IngredientsType[] = [
              {
                key: '0',
                id: '0',
                title: 'cheese'
              },
              {
                key: '1',
                id: '1',
                title: 'fetta'
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
  ];
}

const singleton = new IngredientsStore();
export default singleton;