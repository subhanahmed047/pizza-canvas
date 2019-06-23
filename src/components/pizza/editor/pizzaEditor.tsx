import { Button, Form } from "antd";
import * as React from 'react';
import PizzaSizes from '../../../models/pizza-sizes';
import SizeSelect from './sizeSelect';
interface PizzaEditorProps {
    form: any,
}

class PizzaEditorForm extends React.Component<PizzaEditorProps> {
    state = {
        selectedSize: PizzaSizes.small,
    }

    onSizeSelected = (e: any) => {
        console.log(e.target.value);
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
        // const { getFieldDecorator } = this.props.form;
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