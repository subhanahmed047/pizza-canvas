import * as React from 'react';
import { Rect } from "react-konva";

export interface FettaProps {
    x: number,
    y: number,
    size: number,
}

const Fetta: React.SFC<FettaProps> = ({ x, y, size }) => {
    return <Rect
        x={x}
        y={y}
        width={size}
        height={size}
        fill="#F8EFFF" />;
};

export default Fetta;