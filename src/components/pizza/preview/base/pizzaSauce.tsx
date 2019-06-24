import * as React from 'react';
import { Circle } from "react-konva";

export interface PizzaSauceProps {
    pizza: any
}

const PizzaSauce: React.SFC<PizzaSauceProps> = ({ pizza }) => {
    return (
        <Circle x={pizza.x} y={pizza.y} radius={pizza.radius - ((10 / 100) * pizza.radius)} stroke="#DB6D2C" fill="#DB6D2C" />
    );
}

export default PizzaSauce;