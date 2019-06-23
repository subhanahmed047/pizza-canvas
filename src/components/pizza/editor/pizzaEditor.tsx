import * as React from 'react';
import { toJS } from 'mobx';
import { Button, Form } from "antd";
import PizzaSizes from '../../../models/pizza-sizes';
import SizeSelect from './sizeSelect';
import SlicesSelect from './slicesSelect';
import { inject, observer } from "mobx-react";
import TypeSelect from "./typeSelect";
import IngredientsSelect from "./ingredientsSelect";
import PizzaType from "../../../models/pizza-type";
import { Container, Row } from '../../../layout/ui-elements';

interface PizzaEditorProps {
    form: any,
    pizzaStore: any,
    ingredientsStore: any,
}

interface PizzaEditorState {
    pizza: {
        selectedPizzaType: PizzaType,
        selectedPizzaSize: string,
        noOfSlices: number,
    }
}


@inject("pizzaStore", "ingredientsStore")
@observer
class PizzaEditor extends React.Component<PizzaEditorProps, PizzaEditorState> {
    constructor(props: PizzaEditorProps) {
        super(props);
        this.state = {
            pizza: {
                selectedPizzaType: this.props.pizzaStore.pizzas[0],
                selectedPizzaSize: PizzaSizes.small,
                noOfSlices: 6,
            }
        }
    }

    onSizeSelected = (e: any) => {
        console.log(e.target.value);
    }

    onSlicesSelected = (e: any) => {
        this.setState(prevState => ({
            pizza: {
                ...prevState.pizza,
                noOfSlices: e.target.value
            }
        }))
    }

    onTypeSelected = (selectedPizzaID: string) => {
        const selectedPizza: PizzaType = this.props.pizzaStore.pizzas.filter((pizza: PizzaType) => pizza.id === selectedPizzaID)[0];
        console.log("Pizza Selected: ", toJS(selectedPizza));
        this.setState(prevState => ({
            pizza: {
                ...prevState.pizza,
                selectedPizzaType: selectedPizza
            }
        }))
    }

    handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        this.props.form.validateFields((err: any, values: string[]) => {
            if (!err) {
                console.log("Received values of form: ", values);
            }
        });
    };

    render() {
        const { pizzaStore, ingredientsStore } = this.props;
        return (
            <Container direction="column" justify="center" wrap="no-wrap" >
                <Row>
                    <SizeSelect
                        sizes={PizzaSizes}
                        selectedSize={this.state.pizza.selectedPizzaSize}
                        onSizeSelected={this.onSizeSelected}
                    />
                </Row>
                <Row>
                    <SlicesSelect
                        selectedSlices={this.state.pizza.noOfSlices}
                        onSlicesSelected={this.onSlicesSelected}
                    />
                </Row>
                <Row>
                    <TypeSelect
                        pizzas={pizzaStore.pizzas}
                        selectedType={pizzaStore.pizzas[0]}
                        onTypeSelected={this.onTypeSelected}
                    />
                </Row>
                <Row>
                    <IngredientsSelect pizzaIngredients={this.state.pizza.selectedPizzaType.ingredients} allIngredients={ingredientsStore.ingredients} />
                </Row>
                <Row>
                    <Button
                        type="primary"
                        htmlType="submit"
                        className="login-form-button"
                        block
                    >
                        Continue
              </Button>
                </Row>
            </Container>
        );
    }
}

export default PizzaEditor;