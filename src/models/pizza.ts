import PizzaType from "./pizza-type";

export default interface Pizza {
    id: string,
    type: PizzaType,
    size: string[],
}