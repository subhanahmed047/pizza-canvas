import { Layout, Col, Row } from "antd";
import React from "react";
import SideDrawer from "../sideDrawer/";
import TopBar from "../topBar/";
import PizzaEditor from "../pizza/editor/pizzaEditor";
import PizzaPreview from "../pizza/preview/pizzaPreview.jsx";
import StepsForm from "../../layout/stepsForm";
const { Content } = Layout;

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sideDrawerCollapsed: false,
      rightDrawerCollapased: false,
      childDrawerVisiblilty: false
    };
  }

  toggleSideDrawer = () => {
    this.setState({
      sideDrawerCollapsed: !this.state.sideDrawerCollapsed
    });
  };

  toggleChildDrawer = () => {
    this.setState({
      childDrawerVisiblilty: !this.state.childDrawerVisiblilty
    });
  };

  toggleRightDrawer = () => {
    this.setState({
      rightDrawerCollapased: !this.state.rightDrawerCollapased
    });
  };

  onClickMenuItem = key => {
    this.toggleChildDrawer();
  };

  render() {
    return (
      <Layout
        style={{
          minHeight: "100vh"
        }}
      >
        <SideDrawer
          collapsed={this.state.sideDrawerCollapsed}
          childDrawerVisibility={this.state.childDrawerVisiblilty}
          toggleSideDrawer={this.toggleSideDrawer}
          toggleChildDrawer={this.toggleChildDrawer}
          onClickMenuItem={this.onClickMenuItem}
        />
        <Layout>
          <TopBar
            sideDrawerCollapsed={this.state.sideDrawerCollapsed}
            toggleSideDrawer={this.toggleSideDrawer}
            rightDrawerCollapased={this.state.rightDrawerCollapased}
            toggleMeetingPanel={this.toggleMeetingPanel}
          />
          <Content>
            <Layout style={{ margin: '40px', padding: '20px', background: '#fff' }}>
              <Row type="flex" justify="center">
                <Col span={12}>
                  <StepsForm selectedStep={0} />
                </Col>
              </Row>
              <Row type="flex" justify="center" style={{ paddingTop: '40px', flexWrap: 'wrap' }}>
                <Col span={10} style={{ padding: '10px', border: '1px solid grey' }}>
                  <PizzaEditor />
                </Col>
                <Col span={10}>
                  <PizzaPreview />
                </Col>
              </Row>
            </Layout>
          </Content>
        </Layout>
      </Layout >
    );
  }
}

export default Home;
