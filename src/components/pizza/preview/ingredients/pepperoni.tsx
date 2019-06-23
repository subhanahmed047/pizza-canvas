import * as React from 'react';
import { Circle } from "react-konva";

export interface PepperoniProps {
    x: number,
    y: number,
    radius: number,
}

const Pepperoni: React.SFC<PepperoniProps> = ({ x, y, radius }) => {
    return <Circle x={x} y={y} radius={radius} stroke="#BC4415" fill="#E55452" />;
};

export default Pepperoni;