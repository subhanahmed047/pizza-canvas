import { Col, Layout, Row } from "antd";
import { RadioChangeEvent } from "antd/lib/radio";
import { toJS } from "mobx";
import { inject, observer } from "mobx-react";
import React from "react";
import StepsForm from "../../layout/stepsForm";
import TopBar from "../../layout/topBar";
import PizzaSizes from '../../models/pizza-sizes';
import PizzaType from "../../models/pizza-type";
import PizzaEditor from "../pizza/editor/pizzaEditor";
import PizzaPreview from "../pizza/preview/pizzaPreview.jsx";
import Ingredient from "../../models/ingredient";
const { Content } = Layout;

interface HomeProps {
  pizzaStore: any,
  ingredientsStore: any,
}

interface HomeState {
  sideDrawerCollapsed: boolean,
  rightDrawerCollapased: boolean,
  childDrawerVisiblilty: boolean,
  pizza: {
    selectedPizzaType: PizzaType,
    selectedPizzaSize: string,
    noOfSlices: number,
  },
  targetKeys: string[],
}

@inject("pizzaStore", "ingredientsStore")
@observer
class Home extends React.Component<HomeProps, HomeState> {
  constructor(props: HomeProps) {
    super(props);
    this.state = {
      sideDrawerCollapsed: false,
      rightDrawerCollapased: false,
      childDrawerVisiblilty: false,
      pizza: {
        selectedPizzaType: this.props.pizzaStore.selectedPizza,
        selectedPizzaSize: PizzaSizes.small,
        noOfSlices: 6,
      },
      targetKeys: this.props.pizzaStore.selectedPizza.ingredients.map((i: Ingredient) => i.key)
    };
  }

  onSizeSelected = (e: RadioChangeEvent) => {
    this.setState(prevState => ({
      pizza: {
        ...prevState.pizza,
        selectedPizzaSize: e.target.value
      }
    }))
  }

  onSlicesSelected = (e: RadioChangeEvent) => {
    this.setState(prevState => ({
      pizza: {
        ...prevState.pizza,
        noOfSlices: e.target.value
      }
    }))
  }

  onTypeSelected = (selectedPizzaID: string) => {
    const selectedPizza: PizzaType = this.props.pizzaStore.pizzas.filter((pizza: PizzaType) => pizza.id === selectedPizzaID)[0];
    console.log("Selected Pizza", toJS(selectedPizza));
    this.setState(prevState => ({
      pizza: {
        ...prevState.pizza,
        selectedPizzaType: selectedPizza
      },
      targetKeys: selectedPizza.ingredients.map((i: Ingredient) => i.key)
    }))
  }

  onIngredientsUpdated = (nextTargetKeys: string[], direction: any, moveKeys: any) => {
    this.setState({ targetKeys: nextTargetKeys });
    const newIngredients = this.state.pizza.selectedPizzaType.ingredients.filter(
      ingredient => nextTargetKeys.some((key: string) => ingredient.key === key));
    this.props.pizzaStore.addIngredients(this.state.pizza.selectedPizzaType, newIngredients);
  };


  render() {
    const { pizzaStore, ingredientsStore } = this.props;
    return (
      <Layout
        style={{
          minHeight: "100vh"
        }}
      >
        <TopBar />

        <Content>
          <Layout style={{ margin: '40px', padding: '20px', background: '#fff' }}>
            <Row type="flex" justify="center" style={{ paddingBottom: '2%' }}>
              <Col span={12}>
                <StepsForm selectedStep={0} />
              </Col>
            </Row>
            <Row type="flex" justify="space-around" style={{ flexWrap: 'wrap' }}>
              <Col style={{ padding: '10px' }}>
                <PizzaEditor
                  allPizzas={pizzaStore.pizzas}
                  allIngredients={ingredientsStore.ingredients}
                  pizza={this.state.pizza}
                  onSizeSelected={this.onSizeSelected}
                  onTypeSelected={this.onTypeSelected}
                  onSlicesSelected={this.onSlicesSelected}
                  pizzaStore={pizzaStore}
                  onIngredientsUpdated={this.onIngredientsUpdated}
                  targetKeys={this.state.targetKeys}
                />
              </Col>
              <Col span={14} style={{
                padding: '2vh', boxShadow: '-3px 2px 13px -5px rgba(0,0,0,0.27)'
              }}>
                <h3>Preview: </h3>
                <PizzaPreview selectedPizza={this.state.pizza} targetKeys={this.state.targetKeys} allIngredients={ingredientsStore.ingredients} />
              </Col>
            </Row>
          </Layout>
        </Content>
      </Layout >
    );
  }
}

export default Home;
