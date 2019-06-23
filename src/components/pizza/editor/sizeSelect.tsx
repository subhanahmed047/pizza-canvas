import * as React from 'react';
import { Radio } from 'antd';
import { RadioChangeEvent } from 'antd/lib/radio';

export interface SizeSelectProps {
    sizes: any,
    selectedSize: string,
    onSizeSelected: (event: RadioChangeEvent) => void,
}

const SizeSelect: React.SFC<SizeSelectProps> = ({ sizes, selectedSize, onSizeSelected }) => {
    return (
        <Radio.Group
            defaultValue={selectedSize}
            buttonStyle="solid"
            size="large"
            onChange={onSizeSelected}
        >
            {
                Object.keys(sizes).map(key => <Radio.Button key={sizes[key]} value={sizes[key]}>{sizes[key]}</Radio.Button>)
            }
        </Radio.Group>
    );
}

export default SizeSelect;