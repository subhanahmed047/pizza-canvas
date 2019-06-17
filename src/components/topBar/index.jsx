import React from "react";
import { Layout, Icon, Button } from "antd";
import { withRouter } from "react-router-dom";
import fakeAuth from "../../auth/auth-utils";

const { Header } = Layout;

const TopBar = ({ sideDrawerCollapsed, toggleSideDrawer, meetingPanelCollapsed, toggleMeetingPanel, history }) => {
  return (
    <Header style={{
      background: "#fff", padding: 0,
      boxShadow: '2px 2px 5px rgba(0,0,0, .05)',
      width: '100%',
      zIndex: 9999,
    }}>
      <Icon
        className="trigger"
        type={sideDrawerCollapsed ? "menu-unfold" : "menu-fold"}
        onClick={toggleSideDrawer}
      />
      <span style={{ float: "right", lineHeight: "60px" }}>
        <Button
          type="link"
          icon="logout"
          onClick={() => {
            fakeAuth.logout().then(history.push("/login"));
          }}
        >
          Logout
      </Button>
        <Icon
          className="trigger"
          type={meetingPanelCollapsed ? "menu-fold" : "menu-unfold"}
          onClick={toggleMeetingPanel}
        />
      </span>
    </Header >
  );
};

export default withRouter(TopBar);
