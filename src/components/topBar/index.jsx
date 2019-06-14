import React from "react";
import "antd/dist/antd.css";
import { Layout, Icon, Button } from "antd";
import { withRouter } from "react-router-dom";
import fakeAuth from "../../auth/auth-utils";

const { Header } = Layout;

const TopBar = ({ collapsed, toggleSideDrawer, history }) => {
  return (
    <Header style={{ background: "#fff", padding: 0 }}>
      <Icon
        className="trigger"
        type={collapsed ? "menu-unfold" : "menu-fold"}
        onClick={toggleSideDrawer}
      />

      <Button
        type="link"
        icon="logout"
        onClick={() => {
          fakeAuth.logout().then(history.push("/login"));
        }}
        style={{ float: "right", lineHeight: "60px" }}
      >
        Logout
      </Button>
    </Header>
  );
};

export default withRouter(TopBar);
