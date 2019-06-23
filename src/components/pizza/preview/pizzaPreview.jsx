import * as React from 'react';
import { Layer, Stage, Shape } from 'react-konva';
import PizzaBase from './PizzaBase';
import PizzaSauce from './PizzaSauce';
import PizzaSlices from './PizzaSlices.jsx';

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

        this.setState({
            stageWidth: width,
            stageHeight: height,
            pizza: {
                x: width / 2,
                y: height / 2,
                radius: (width / 2) - 5,
            }
        });
    };

    render() {
        return (
            <div
                style={{
                    width: '100%',
                    minHeight: '50em'
                }}
                ref={node => {
                    this.container = node;
                }}>
                <Stage width={this.state.stageWidth} height={this.state.stageHeight}>
                    <Layer>
                        <PizzaBase pizza={this.state.pizza} />
                        <PizzaSauce pizza={this.state.pizza} />
                        <Shape
                            sceneFunc={(context, shape) => {
                                Array.from(Array(this.state.pizza.slices), (e, i) => {
                                    context.beginPath();
                                    context.moveTo(this.state.pizza.x, this.state.pizza.y);
                                    context.arc(
                                        this.state.pizza.x,
                                        this.state.pizza.y,
                                        this.state.pizza.radius,
                                        i * this.state.pizza.pieAngle,
                                        (i + 1) * this.state.pizza.pieAngle,
                                        false
                                    );
                                    context.lineWidth = this.state.pizza.sliceWidth;
                                    context.lineWidth = 5;
                                    context.strokeStyle = "white";
                                    context.stroke();
                                    return context;
                                });
                            }}
                        />
                    </Layer>
                </Stage>
            </div>
        );
    }
}

export default PizzaPreview;