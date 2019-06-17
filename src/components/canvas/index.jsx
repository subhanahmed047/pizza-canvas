import React from "react";
import { Col, Row } from "antd";

const Canvas = () => {
  return <Row span={10} type="flex" align="middle" justify="center">
    <Col
      lg={{ span: 14 }}
      md={{ span: 18 }}
      sm={{ span: 20 }}
      xs={{ span: 24 }}
      align="middle"
      className="boxShadow"
    >
      <p>It Works!</p>
    </Col>
  </Row>
};

export default Canvas;
