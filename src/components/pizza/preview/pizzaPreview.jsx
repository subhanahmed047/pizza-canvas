import * as React from 'react';
import { Layer, Stage } from 'react-konva';
import { PizzaBase, PizzaSauce, PizzaSlices } from './base';
import { Pepperoni, Fetta, Olives, Cheese, ItalianSausages } from './ingredients/';

class PizzaPreview extends React.Component {
    constructor(props) {
        super(props);

        this.container = React.createRef();
        this.state = {
            stageWidth: 0,
            stageHeight: 0,
            pizza: {
                x: 0,
                y: 0,
                radius: 0,
                slices: this.props.selectedPizza.noOfSlices,
                sliceWidth: 360 / this.props.selectedPizza.noOfSlices,
                pieAngle: (2 * Math.PI) / this.props.selectedPizza.noOfSlices
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

    render() {
        const { stageWidth, stageHeight, pizza } = this.state;
        const { selectedPizza } = this.props;
        // const ingredients = selectedPizza.selectedPizzaType.ingredients;
        const ingredients = this.props.allIngredients.filter(ingredient => this.props.targetKeys.some((key) => ingredient.key === key));
        console.log(ingredients);

        const ingredientsMap = {
            "Cheese": Cheese,
            "Olives": Olives,
            "Italian Sausages": ItalianSausages,
            "Pepperoni": Pepperoni,
            "Fetta": Fetta
        }

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
                        <PizzaBase pizza={pizza} spread />
                        <PizzaSauce pizza={pizza} spread />
                        {
                            Object.keys(ingredientsMap).map(key => {
                                if (ingredients.some(i => i.title === key)) {
                                    const Ingredient = ingredientsMap[key];
                                    return <Ingredient key={key} pizza={pizza} spread />
                                }
                                return <React.Fragment />;
                            })
                        }
                        <PizzaSlices pizza={pizza} spread />

                    </Layer>
                </Stage>
            </div>
        );
    }
}

export default PizzaPreview;