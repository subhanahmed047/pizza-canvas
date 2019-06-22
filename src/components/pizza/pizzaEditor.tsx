import * as React from 'react';
import StepsForm from '../../layout/stepsForm';
import SizeForm from '../../layout/sizeForm';
import PizzaSizes from '../../models/pizza-sizes';
import { Button, Row, Col, Layout } from 'antd';
import PreviewCanvas from '../../components/preview/previewCanvas';
interface PizzaEditorProps {

}

class PizzaEditor extends React.Component<PizzaEditorProps> {
    state = {
        selectedSize: PizzaSizes.small,
    }

    onSizeSelected = (e: any) => {
        console.log(e.target.value);
    }

    render() {
        return (
            <Layout style={{ padding: '24px 0', background: '#fff' }}>
                <Row type="flex" justify="center" align="top">
                    <Col span={20}>
                        <StepsForm selectedStep={0} />
                    </Col>
                </Row>
                <Row type="flex" justify="center" align="top" style={{ minHeight: '600px' }}>
                    <Col span={10} style={{ border: '2px solid black' }}>
                        <SizeForm
                            sizes={PizzaSizes}
                            selectedSize={this.state.selectedSize}
                            onSizeSelected={this.onSizeSelected}
                        />
                        <Button type="primary" icon="right" >Next</Button>
                    </Col>
                    <Col span={10} style={{ border: '2px solid black' }}>
                        <PreviewCanvas />
                    </Col>
                </Row>
            </Layout >
        );
    }
}

export default PizzaEditor;