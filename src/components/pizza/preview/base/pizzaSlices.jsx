import * as React from 'react';
import { Shape } from "react-konva";

const PizzaSlices = ({ pizza, sliceIndex }) => {
    return (
        <Shape
            sceneFunc={(context, shape) => {
                Array.from(Array(pizza.slices), (e, i) => {
                    context.beginPath();
                    context.moveTo(pizza.x, pizza.y);
                    context.arc(
                        pizza.x,
                        pizza.y,
                        pizza.radius,
                        i * pizza.pieAngle,
                        (i + 1) * pizza.pieAngle,
                        false
                    );
                    context.lineWidth = pizza.sliceWidth;
                    context.lineWidth = (2 / 100) * pizza.radius;
                    context.strokeStyle = "#ffffff";
                    context.stroke();
                    return context;
                });
            }}
        />
    );
};

export default PizzaSlices;