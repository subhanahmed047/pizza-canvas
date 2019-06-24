import React from "react";
import { Drawer } from "antd";

const ChildDrawer = ({ title, children, onClose, childDrawerVisibility }) => {
  return (
    <Drawer
      title={title}
      width={320}
      closable={true}
      onClose={onClose}
      visible={childDrawerVisibility}
    >
      {children}
    </Drawer>
  );
};

export default ChildDrawer;
