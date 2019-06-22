import { Layout } from "antd";
import React from "react";
import Canvas from "../canvas";
import RightDrawer from "../rightDrawer";
import SideDrawer from "../sideDrawer/";
import TopBar from "../topBar/";
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
            <Canvas />
          </Content>
          <RightDrawer
            collapsed={this.state.rightDrawerCollapased}
            toggleRightDrawer={this.toggleRightDrawer}
          />
        </Layout>
      </Layout>
    );
  }
}

export default Home;
