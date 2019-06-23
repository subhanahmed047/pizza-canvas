import * as React from 'react';
import { Radio } from 'antd';
import { RadioChangeEvent } from 'antd/lib/radio';

export interface SlicesSelectProps {
    selectedSlices: number,
    onSlicesSelected: (event: RadioChangeEvent) => void,
}

const SlicesSelect: React.SFC<SlicesSelectProps> = ({ selectedSlices, onSlicesSelected }) => {
    const slices: number[] = [6, 8, 12];
    return (
        <Radio.Group
            defaultValue={selectedSlices}
            buttonStyle="solid"
            size="large"
            onChange={onSlicesSelected}
        >
            {
                slices.map(slice => <Radio.Button key={slice} value={slice}>{slice} Slices</Radio.Button>)
            }
        </Radio.Group>
    );
}

export default SlicesSelect;