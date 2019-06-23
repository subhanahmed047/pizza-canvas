import { Transfer } from 'antd';
import * as React from 'react';
import Ingredient from '../../../models/ingredient';

interface IngredientsSelectProps {
    allIngredients: Ingredient[],
    pizzaIngredients: Ingredient[],
}

class IngredientsSelect extends React.Component<IngredientsSelectProps> {
    state = {
        selectedKeys: [],
        targetKeys: this.props.pizzaIngredients.map(({ key }) => key),
        disabled: false,
    };


    componentWillReceiveProps(nextProps: IngredientsSelectProps) {
        const newIngredientKeys = nextProps.pizzaIngredients.map(({ key }) => key);
        if (nextProps.pizzaIngredients.map(({ key }) => key) !== this.state.targetKeys) {
            this.setState({ targetKeys: newIngredientKeys });
        }
    }

    handleChange = (nextTargetKeys: any, direction: any, moveKeys: any) => {
        this.setState({ targetKeys: nextTargetKeys });

        console.log('targetKeys: ', nextTargetKeys);
        console.log('direction: ', direction);
        console.log('moveKeys: ', moveKeys);
    };

    render() {
        const { disabled } = this.state;
        const { allIngredients, pizzaIngredients } = this.props;
        return (
            <div>
                <Transfer
                    dataSource={allIngredients as any}
                    titles={['Available Ingredients', 'Your Pizza']}
                    targetKeys={this.state.targetKeys}
                    onChange={this.handleChange}
                    render={item => item.title}
                    disabled={disabled}
                />
            </div>
        );
    }
}

export default IngredientsSelect;