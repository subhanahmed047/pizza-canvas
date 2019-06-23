import * as React from 'react';
import { Select } from 'antd';
import PizzaType from '../../../models/pizza-type';
const { Option } = Select;

export interface TypeSelectProps {
    pizzas: PizzaType[],
    selectedType: PizzaType,
    onTypeSelected: (selectedPizzaID: string) => void,
}


const TypeSelect: React.SFC<TypeSelectProps> = ({ pizzas, selectedType, onTypeSelected }) => {
    return (
        <Select
            showSearch
            style={{ width: '100%' }}
            placeholder="Select a Pizza"
            defaultValue={selectedType.id}
            optionFilterProp="children"
            onChange={onTypeSelected}
            size="large"
        >
            {pizzas.map(pizza => <Option key={pizza.id} value={pizza.id}>{pizza.title}</Option>)}
        </Select>
    );
}

export default TypeSelect;