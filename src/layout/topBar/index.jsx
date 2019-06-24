import { Button, Layout } from "antd";
import React from "react";
import { withRouter } from "react-router-dom";
import fakeAuth from "../../auth/auth-utils";

const { Header } = Layout;

const TopBar = ({ history }) => {
  return (
    <Header style={{
      background: "#fff", padding: 0,
      boxShadow: '2px 2px 5px rgba(0,0,0, .05)',
      width: '100%',
      zIndex: 9999,
    }}>
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
      </span>
    </Header >
  );
};

export default withRouter(TopBar);
