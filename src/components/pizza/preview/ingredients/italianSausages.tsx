import * as React from 'react';
import { Circle } from "react-konva";

export interface PepperoniProps {
    x: number,
    y: number,
    radius: number,
}

const Pepperoni: React.SFC<PepperoniProps> = ({ x, y, radius }) => {
    return <Circle x={x} y={y} radius={radius} stroke="#811403" fill="#BA534E" />;
};

export default Pepperoni;