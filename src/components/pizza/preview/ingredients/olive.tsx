import * as React from 'react';
import { Ellipse } from "react-konva";

export interface OliveProps {
    x: number,
    y: number,
    radiusX: number,
    radiusY: number,
}

const Olive: React.SFC<OliveProps> = ({ x, y, radiusX, radiusY }) => {
    return <Ellipse x={x} y={y} radiusX={radiusX} radiusY={radiusY} stroke="#101A00" strokeWidth={7} />;
};

export default Olive;