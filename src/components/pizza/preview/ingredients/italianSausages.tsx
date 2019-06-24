import * as React from 'react';
import { Circle } from "react-konva";

export interface ItalianSausagesProps {
    pizza: any,
    spread: boolean,
}


const spreadItalianSausages = (pizza: any, distanceFromEdges: number, piecesPerSpread: number) => {
    return Array.from(Array(pizza.slices * 2), (e, i) => {
        const ang = i * ((Math.PI * 2) / piecesPerSpread) + 30;
        const x =
            Math.cos(ang) * (pizza.radius - (distanceFromEdges / 100) * pizza.radius) +
            pizza.x;
        const y =
            Math.sin(ang) * (pizza.radius - (distanceFromEdges / 100) * pizza.radius) +
            pizza.y;
        return <Circle key={i} x={x} y={y} radius={(6 / 100) * pizza.radius} stroke="#811403" fill="#BA534E" />
    })
}

const ItalianSausages: React.SFC<ItalianSausagesProps> = ({ pizza, spread }) => {
    return (
        <React.Fragment>
            {spread && spreadItalianSausages(pizza, 19, pizza.slices * 2)}
            {spread && spreadItalianSausages(pizza, 45, pizza.slices)}
            {spread && spreadItalianSausages(pizza, 75, pizza.slices / 2)}
        </React.Fragment>
    )
};

export default ItalianSausages;
