import * as React from 'react';
import { Layer, Stage } from 'react-konva';
import PizzaBase from './PizzaBase';
import PizzaSauce from './PizzaSauce';
import Pepperoni from './ingredients/pepperoni';
import PizzaSlices from './PizzaSlices.jsx';
import Fetta from './ingredients/fetta';
import ItalianSausages from './ingredients/italianSausages';
import Olive from './ingredients/olive';
import Cheese from './ingredients/cheese';

class PizzaPreview extends React.Component {
    constructor(props) {
        super(props);

        this.container = React.createRef();
        const slices = 8;

        this.state = {
            stageWidth: 0,
            stageHeight: 0,
            slices: 8,
            pizza: {
                x: 0,
                y: 0,
                radius: 0,
                slices: slices,
                sliceWidth: 360 / slices,
                pieAngle: (2 * Math.PI) / slices
            },
            container: React.createRef(),
        };
    }

    componentDidMount() {
        this.checkSize();
        window.addEventListener("resize", this.checkSize);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.checkSize);
    }

    checkSize = () => {
        const width = this.container.offsetWidth;
        const height = this.container.offsetHeight;

        // if width becomes less than height, then make pizza fit to with otherwise fit to height
        let radius = height / 2;
        if ((width / 2) < (radius)) {
            radius = width / 2;
        }

        this.setState(prevState => ({
            stageWidth: width,
            stageHeight: height,
            pizza: {
                ...prevState.pizza,
                x: width / 2,
                y: height / 2,
                radius: radius,
            }
        }))
    };

    spreadPepperoni = (pizza, distanceFromEdges, piecesPerSpread) => {
        return Array.from(Array(pizza.slices * 2), (e, i) => {
            const ang = i * ((Math.PI * 2) / piecesPerSpread);
            const x =
                Math.cos(ang) * (pizza.radius - (distanceFromEdges / 100) * pizza.radius) +
                pizza.x;
            const y =
                Math.sin(ang) * (pizza.radius - (distanceFromEdges / 100) * pizza.radius) +
                pizza.y;
            return <Pepperoni key={i} x={x} y={y} radius={(10 / 100) * pizza.radius} />;
        })
    }

    spreadFetta = (pizza, distanceFromEdges, piecesPerSpread) => {
        return Array.from(Array(pizza.slices * 2), (e, i) => {
            const ang = i * ((Math.PI * 2) / piecesPerSpread) + 10;
            const x =
                Math.cos(ang) * (pizza.radius - (distanceFromEdges / 100) * pizza.radius) +
                pizza.x;
            const y =
                Math.sin(ang) * (pizza.radius - (distanceFromEdges / 100) * pizza.radius) +
                pizza.y;
            return <Fetta key={i} x={x} y={y} size={(7 / 100) * pizza.radius} />;
        })
    }

    spreadItalianSausages = (pizza, distanceFromEdges, piecesPerSpread) => {
        return Array.from(Array(pizza.slices * 2), (e, i) => {
            const ang = i * ((Math.PI * 2) / piecesPerSpread) + 30;
            const x =
                Math.cos(ang) * (pizza.radius - (distanceFromEdges / 100) * pizza.radius) +
                pizza.x;
            const y =
                Math.sin(ang) * (pizza.radius - (distanceFromEdges / 100) * pizza.radius) +
                pizza.y;
            return <ItalianSausages key={i} x={x} y={y} radius={(6 / 100) * pizza.radius} />;
        })
    }

    spreadOlives = (pizza, distanceFromEdges, piecesPerSpread) => {
        return Array.from(Array(pizza.slices * 2), (e, i) => {
            const ang = i * ((Math.PI * 2) / piecesPerSpread) + 80;
            const x =
                Math.cos(ang) * (pizza.radius - (distanceFromEdges / 100) * pizza.radius) +
                pizza.x;
            const y =
                Math.sin(ang) * (pizza.radius - (distanceFromEdges / 100) * pizza.radius) +
                pizza.y;
            return <Olive key={i} x={x} y={y} radiusX={(2 / 100) * pizza.radius} radiusY={(3 / 100) * pizza.radius} />;
        })
    }

    render() {
        const { stageWidth, stageHeight, pizza } = this.state;
        console.log(pizza);
        return (
            <div
                style={{
                    width: '100%',
                    minHeight: '50em'
                }}
                ref={node => {
                    this.container = node;
                }}>
                <Stage width={stageWidth} height={stageHeight}>
                    <Layer>
                        <PizzaBase pizza={pizza} />
                        <PizzaSauce pizza={pizza} />
                        <Cheese pizza={pizza} />
                        {this.spreadItalianSausages(pizza, 19, pizza.slices * 2)}
                        {this.spreadItalianSausages(pizza, 45, pizza.slices)}
                        {this.spreadItalianSausages(pizza, 75, pizza.slices / 2)}
                        {this.spreadPepperoni(pizza, 25, pizza.slices * 2)}
                        {this.spreadPepperoni(pizza, 55, pizza.slices)}
                        {this.spreadFetta(pizza, 25, pizza.slices * 2)}
                        {this.spreadFetta(pizza, 55, pizza.slices)}
                        {this.spreadOlives(pizza, 35, pizza.slices / 5)}
                        {this.spreadOlives(pizza, 75, pizza.slices / 4)}
                        <PizzaSlices pizza={pizza} />
                    </Layer>
                </Stage>
            </div>
        );
    }
}

export default PizzaPreview;