import React from "react";
import "antd/dist/antd.css";
import { Col, Row, Layout } from "antd";
import Canvas from "./canvas";
const { Content } = Layout;

const AppContent = () => {
  return (
    <Content
      style={{
        margin: "24px 16px",
        padding: 24,
        background: "#fff",
        minHeight: "400px"
      }}
    >
      <Row type="flex" justify="center">
        <Col
          lg={{ span: 10 }}
          md={{ span: 16 }}
          sm={{ span: 18 }}
          xs={{ span: 24 }}
          align="center"
          style={{
            boxShadow: '2px 2px 5px rgba(0,0,0, .25)',
            marginTop: '1vh',
            height: '60vh'
          }}
        >
          <Canvas />
        </Col>
      </Row>
    </Content>
  );
};

export default AppContent;
