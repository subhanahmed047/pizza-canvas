import * as React from 'react';
import { Rect } from "react-konva";

export interface FettaProps {
    pizza: any,
    spread: boolean,
}

const spreadFetta = (pizza: any, distanceFromEdges: number, piecesPerSpread: number) => {
    return Array.from(Array(pizza.slices * 2), (e, i) => {
        const ang = i * ((Math.PI * 2) / piecesPerSpread) + 10;
        const size = (7 / 100) * pizza.radius;
        const x =
            Math.cos(ang) * (pizza.radius - (distanceFromEdges / 100) * pizza.radius) +
            pizza.x;
        const y =
            Math.sin(ang) * (pizza.radius - (distanceFromEdges / 100) * pizza.radius) +
            pizza.y;
        return <Rect key={i} x={x} y={y} width={size} height={size} fill="#F8EFFF" />
    })
}

const Fetta: React.SFC<FettaProps> = ({ pizza, spread }) => {
    return (
        <React.Fragment>
            {spread && spreadFetta(pizza, 25, pizza.slices * 2)}
            {spread && spreadFetta(pizza, 55, pizza.slices)}
        </React.Fragment>
    )
};

export default Fetta;