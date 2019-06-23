import * as React from 'react';
import { toJS } from 'mobx';
import { Button, Form } from "antd";
import PizzaSizes from '../../../models/pizza-sizes';
import SizeSelect from './sizeSelect';
import { inject, observer } from "mobx-react";
import TypeSelect from "./typeSelect";
import IngredientsSelect from "./ingredientsSelect";
import PizzaType from "../../../models/pizza-type";

interface PizzaEditorProps {
    form: any,
    pizzaStore: any,
    ingredientsStore: any,
}

@inject("pizzaStore", "ingredientsStore")
@observer
class PizzaEditorForm extends React.Component<PizzaEditorProps> {
    state = {
        selectedSize: PizzaSizes.small,
        selectedPizza: this.props.pizzaStore.pizzas[0],
    }

    onSizeSelected = (e: any) => {
        console.log(e.target.value);
    }

    onTypeSelected = (selectedPizzaID: string) => {
        const selectedPizza = this.props.pizzaStore.pizzas.filter((pizza: PizzaType) => pizza.id === selectedPizzaID)[0];
        console.log("Pizza Selected: ", toJS(selectedPizza));
        this.setState({
            selectedPizza: selectedPizza
        });
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
        const { getFieldDecorator } = this.props.form;
        const { pizzaStore, ingredientsStore } = this.props;

        { console.log(pizzaStore.pizzas) }
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Item>
                    <SizeSelect
                        sizes={PizzaSizes}
                        selectedSize={this.state.selectedSize}
                        onSizeSelected={this.onSizeSelected}
                    />
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator("type", {
                        rules: [{ required: true, message: "Please select your Pizza Type" }]
                    })(
                        <TypeSelect
                            pizzas={pizzaStore.pizzas}
                            selectedType={pizzaStore.pizzas[0]}
                            onTypeSelected={this.onTypeSelected}
                        />
                    )}

                </Form.Item>
                <Form.Item>
                    {getFieldDecorator("ingredients", {
                        rules: [{ required: true, message: "Please select your Ingredients" }]
                    })(
                        <IngredientsSelect pizzaIngredients={this.state.selectedPizza.ingredients} allIngredients={ingredientsStore.ingredients} />
                    )}

                </Form.Item>
                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        className="login-form-button"
                        block
                    >
                        Continue
              </Button>
                </Form.Item>
            </Form>
        );
    }
}


const PizzaEditor = Form.create({ name: "pizza_Form" })(PizzaEditorForm);
export default PizzaEditor;