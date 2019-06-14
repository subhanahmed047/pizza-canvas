import React from "react";
import { Layout } from "antd";
import SideDrawer from "../sideDrawer/";
import TopBar from "../topBar/";
import AppContent from "../appContent";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
      childDrawerVisiblilty: false
    };
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  toggleChildDrawer = () => {
    this.setState({
      childDrawerVisiblilty: !this.state.childDrawerVisiblilty
    });
  };

  onClickMenuItem = key => {
    this.toggleChildDrawer();
  };

  render() {
    return (
      <Layout
        style={{
          height: "100vh"
        }}
      >
        <SideDrawer
          collapsed={this.state.collapsed}
          childDrawerVisibility={this.state.childDrawerVisiblilty}
          toggleDrawer={this.toggle}
          toggleChildDrawer={this.toggleChildDrawer}
          onClickMenuItem={this.onClickMenuItem}
        />
        <Layout>
          <TopBar
            collapsed={this.state.collapsed}
            toggleSideDrawer={this.toggle}
          />
          <AppContent />
        </Layout>
      </Layout>
    );
  }
}

export default Home;
