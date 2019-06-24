import * as React from 'react';
import { Circle } from "react-konva";

export interface PepperoniProps {
    pizza: any,
    spread: boolean
}

const spreadPepperoni = (pizza: any, distanceFromEdges: number, piecesPerSpread: number) => {
    return Array.from(Array(pizza.slices * 2), (e, i) => {
        const ang = i * ((Math.PI * 2) / piecesPerSpread);
        const x =
            Math.cos(ang) * (pizza.radius - (distanceFromEdges / 100) * pizza.radius) +
            pizza.x;
        const y =
            Math.sin(ang) * (pizza.radius - (distanceFromEdges / 100) * pizza.radius) +
            pizza.y;
        return <Circle key={i} x={x} y={y} radius={(10 / 100) * pizza.radius} stroke="#BC4415" fill="#E55452" />;
    })
}

const Pepperoni: React.SFC<PepperoniProps> = ({ pizza, spread }) => {
    return (
        <React.Fragment>
            {spread && spreadPepperoni(pizza, 25, pizza.slices * 2)}
            {spread && spreadPepperoni(pizza, 55, pizza.slices)}
        </React.Fragment>
    )
};

export default Pepperoni;
