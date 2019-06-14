import React from "react";
import "antd/dist/antd.css";
import { Layout, Menu, Icon } from "antd";
import ChildDrawer from "./childDrawer";
const { Sider } = Layout;

const menuItems = [
  {
    key: 0,
    text: "Home",
    icon: "home",
    drawer: false,
    link: "/"
  },
  {
    key: 1,
    text: "Upload",
    icon: "cloud-upload",
    drawer: true
  }
];

const renderMenuItems = onClickMenuItem => {
  return menuItems.map(item => (
    <Menu.Item
      key={item.key}
      onClick={item.drawer ? () => onClickMenuItem(item.key) : null}
    >
      <Icon type={item.icon} />
      <span>{item.text}</span>
    </Menu.Item>
  ));
};

const SideDrawer = ({
  collapsed,
  toggleDrawer,
  toggleChildDrawer,
  childDrawerVisibility,
  onClickMenuItem
}) => {
  return (
    <Sider
      trigger={null}
      collapsible
      breakpoint="lg"
      collapsed={collapsed}
      onBreakpoint={onSmallScreen => {
        toggleDrawer();
      }}
    >
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["0"]}>
        {renderMenuItems(onClickMenuItem)}
      </Menu>
      <ChildDrawer
        childDrawerVisibility={childDrawerVisibility}
        onClose={toggleChildDrawer}
        title="Upload Document"
      >
        <p>Upload Area Works!</p>
      </ChildDrawer>
    </Sider>
  );
};

export default SideDrawer;
