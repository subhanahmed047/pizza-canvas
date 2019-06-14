import React from "react";
import { Row, Col, Form, Icon, Input, Button } from "antd";
import { Link } from "react-router-dom";

class Register extends React.Component {
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
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
              {getFieldDecorator("name", {
                rules: [{ required: true, message: "Please input your Name!" }]
              })(
                <Input
                  prefix={
                    <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  placeholder="Name"
                />
              )}
            </Form.Item>
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
              {getFieldDecorator("password", {
                rules: [
                  { required: true, message: "Please input your Password!" }
                ]
              })(
                <Input
                  prefix={
                    <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  type="password"
                  placeholder="Password"
                />
              )}
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
                block
              >
                Register
              </Button>
            </Form.Item>
            <Form.Item>
              Already have an account?{" "}
              <Link to="/login" className="login-form-forgot">
                Login Here!
              </Link>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    );
  }
}

const RegisterForm = Form.create({ name: "normal_login" })(Register);
export default RegisterForm;
