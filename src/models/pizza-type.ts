import Ingredient from "./ingredient";

export default interface PizzaType {
    id: string,
    title: string,
    ingredients: Ingredient[],
}