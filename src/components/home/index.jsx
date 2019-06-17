import React from "react";
import SideDrawer from "../sideDrawer/";
import TopBar from "../topBar/";
import Canvas from "../canvas";
import MeetingPanel from "../meetingPanel";
import { Layout } from "antd";
import OnlineUsers from "../meetingPanel/onlineUsers";
const { Content } = Layout;

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sideDrawerCollapsed: false,
      meetingPanelCollapsed: false,
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

  toggleMeetingPanel = () => {
    this.setState({
      meetingPanelCollapsed: !this.state.meetingPanelCollapsed
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
            meetingPanelCollapsed={this.state.meetingPanelCollapsed}
            toggleMeetingPanel={this.toggleMeetingPanel}
          />
          <Content>
            <Canvas />
          </Content>
          <MeetingPanel
            collapsed={this.state.meetingPanelCollapsed}
            onlineUsers={<OnlineUsers />}
            toggleMeetingPanel={this.toggleMeetingPanel}
          />
        </Layout>
      </Layout>
    );
  }
}

export default Home;
