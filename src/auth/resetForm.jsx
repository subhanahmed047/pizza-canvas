import React from "react";
import { Row, Col, Form, Icon, Input, Button, Divider } from "antd";
import { Link } from "react-router-dom";

class Reset extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Row type="flex" justify="center" style={{ marginTop: "10vh" }}>
        <Col xs={{ span: 12 }} md={{ span: 8 }} lg={{ span: 6 }}>
          <Form onSubmit={this.handleSubmit} className="Reset-form">
            <Form.Item>
              {getFieldDecorator("email", {
                rules: [{ required: true, message: "Please input your Email!" }]
              })(
                <Input
                  prefix={
                    <Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  placeholder="Email Address"
                />
              )}
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="Reset-form-button"
                block
              >
                Send Reset Link
              </Button>
            </Form.Item>
            <Form.Item style={{ textAlign: "center" }}>
              <Icon type="user-add" />
              <Link to="/register">Register</Link>
              <Divider type="vertical" />
              <Icon type="login" />
              <Link to="/login">Login</Link>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    );
  }
}

const ResetForm = Form.create({ name: "normal_Reset" })(Reset);
export default ResetForm;
