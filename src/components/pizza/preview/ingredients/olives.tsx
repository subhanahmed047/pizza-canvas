import * as React from 'react';
import { Ellipse } from "react-konva";

export interface OlivesProps {
    pizza: any,
    spread: boolean,
}

const spreadOlives = (pizza: any, distanceFromEdges: number, piecesPerSpread: number) => {
    return Array.from(Array(pizza.slices * 2), (e, i) => {
        const ang = i * ((Math.PI * 2) / piecesPerSpread) + 80;
        const x =
            Math.cos(ang) * (pizza.radius - (distanceFromEdges / 100) * pizza.radius) +
            pizza.x;
        const y =
            Math.sin(ang) * (pizza.radius - (distanceFromEdges / 100) * pizza.radius) +
            pizza.y;
        return <Ellipse key={i} x={x} y={y} radiusX={(2 / 100) * pizza.radius} radiusY={(3 / 100) * pizza.radius} stroke="#101A00" strokeWidth={7} />;
    })
}

const Olives: React.SFC<OlivesProps> = ({ pizza, spread }) => {
    return (
        <React.Fragment>
            {spread && spreadOlives(pizza, 35, pizza.slices / 5)}
            {spread && spreadOlives(pizza, 75, pizza.slices / 4)}
        </React.Fragment>
    )
};

export default Olives;