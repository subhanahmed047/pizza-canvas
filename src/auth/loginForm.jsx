import React from "react";
import { Row, Col, Form, Icon, Input, Button, Checkbox } from "antd";
import { Redirect, Link, withRouter } from "react-router-dom";
import fakeAuth from "../auth/auth-utils";

class Login extends React.Component {
  state = {
    redirectToReferrer: false
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
        this.authenticate();
      }
    });
  };

  authenticate = () => {
    fakeAuth.authenticate(() => {
      this.setState(() => ({
        redirectToReferrer: true
      }));
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { from } = this.props.location.state || { from: { pathname: "/" } };
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer === true) {
      return <Redirect to={from} />;
    }

    return (
      <Row type="flex" justify="center" style={{ marginTop: "10vh" }}>
        <Col xs={{ span: 12 }} md={{ span: 8 }} lg={{ span: 6 }}>
          <Form onSubmit={this.handleSubmit} className="login-form">
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
              {getFieldDecorator("remember", {
                valuePropName: "checked",
                initialValue: true
              })(<Checkbox>Remember me</Checkbox>)}
              <Link className="login-form-forgot" to="/reset">
                Forgot password
              </Link>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
                block
              >
                Log in
              </Button>
            </Form.Item>
            <Form.Item>
              Don't have an account? <Link to="/register">register now!</Link>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    );
  }
}

const LoginForm = Form.create({ name: "normal_login" })(Login);
export default withRouter(LoginForm);
