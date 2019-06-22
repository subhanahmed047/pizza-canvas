import * as React from 'react';
import { Steps } from 'antd';

const { Step } = Steps;

interface StepFormProps {
    selectedStep?: number,
}

const StepsForm: React.SFC<StepFormProps> = ({ selectedStep = 0 }) => {
    return (
        <Steps current={selectedStep}>
            <Step title="Prepare" />
            <Step title="Review" />
            <Step title="Order" />
        </Steps>
    );
}

export default StepsForm;