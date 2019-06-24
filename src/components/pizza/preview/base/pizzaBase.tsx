import * as React from 'react';
import { Circle } from "react-konva";

export interface PizzaBaseProps {
    pizza: any
}

const PizzaBase: React.SFC<PizzaBaseProps> = ({ pizza }) => {
    return (
        <Circle x={pizza.x} y={pizza.y} radius={pizza.radius} stroke="#FEDDBC" fill="#FEDDBC" />
    );
}

export default PizzaBase;