import { Button } from "antd";
import { RadioChangeEvent } from 'antd/lib/radio';
import * as React from 'react';
import { Container, Row } from '../../../layout/ui-elements';
import Ingredient from '../../../models/ingredient';
import PizzaSizes from '../../../models/pizza-sizes';
import PizzaType from "../../../models/pizza-type";
import IngredientsSelect from "./ingredientsSelect";
import SizeSelect from './sizeSelect';
import TypeSelect from "./typeSelect";

interface PizzaEditorProps {
    allPizzas: PizzaType[],
    allIngredients: Ingredient[],
    pizza: {
        selectedPizzaType: PizzaType,
        selectedPizzaSize: string,
        noOfSlices: number,
    },
    pizzaStore: any,
    onSizeSelected: (event: RadioChangeEvent) => void,
    onSlicesSelected: (event: RadioChangeEvent) => void,
    onTypeSelected: (selectedPizzaID: string) => void,
    onIngredientsUpdated: any,
    targetKeys: string[],
}

const PizzaEditor = (props: PizzaEditorProps) => {
    const { pizza, allPizzas, allIngredients, onSizeSelected, onIngredientsUpdated, onTypeSelected, pizzaStore, targetKeys } = props;
    return (
        <Container direction="column" justify="center" wrap="no-wrap" >
            <Row>
                <SizeSelect
                    sizes={PizzaSizes}
                    selectedSize={pizza.selectedPizzaSize}
                    onSizeSelected={onSizeSelected}
                />
            </Row>
            {/* <Row>
                <SlicesSelect
                    selectedSlices={pizza.noOfSlices}
                    onSlicesSelected={onSlicesSelected}
                />
            </Row> */}
            <Row>
                <TypeSelect
                    pizzas={allPizzas}
                    selectedType={allPizzas[0]}
                    onTypeSelected={onTypeSelected}
                />
            </Row>
            <Row>
                <IngredientsSelect
                    selectedPizza={pizza.selectedPizzaType}
                    allIngredients={allIngredients}
                    pizzaStore={pizzaStore}
                    targetKeys={targetKeys}
                    onIngredientsUpdated={onIngredientsUpdated}
                />
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

export default PizzaEditor;