import * as React from 'react';
import { Circle } from "react-konva";

export interface CheeseProps {
    pizza: any,
}

const Cheese: React.SFC<CheeseProps> = ({ pizza }) => {
    return <Circle x={pizza.x} y={pizza.y} radius={pizza.radius - ((13 / 100) * pizza.radius)} fill="#F7EDB0" />
};

export default Cheese;