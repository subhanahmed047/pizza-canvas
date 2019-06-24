import { Transfer } from 'antd';
import * as React from 'react';
import Ingredient from '../../../models/ingredient';
import { toJS } from 'mobx';
import PizzaType from '../../../models/pizza-type';

interface IngredientsSelectProps {
    allIngredients: Ingredient[],
    selectedPizza: PizzaType,
    pizzaStore: any,
    onIngredientsUpdated: any,
    targetKeys: string[]
}

class IngredientsSelect extends React.Component<IngredientsSelectProps> {

    render() {
        const { allIngredients } = this.props;
        return (
            <div>
                <Transfer
                    dataSource={allIngredients as any}
                    titles={['Available', 'On Pizza']}
                    targetKeys={this.props.targetKeys}
                    onChange={this.props.onIngredientsUpdated}
                    render={item => item.title}
                />
            </div>
        );
    }
}

export default IngredientsSelect;