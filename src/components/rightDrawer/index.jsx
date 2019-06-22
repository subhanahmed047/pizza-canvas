import React from 'react';
import { Layout } from "antd";
const { Sider } = Layout;

const RightDrawer = ({ collapsed, toggleRightDrawer }) => {
    return (
        <Sider
            trigger={null}
            collapsible
            breakpoint="md"
            collapsedWidth="0"
            collapsed={collapsed}
            width="25vh"
            style={{
                background: 'white',
                height: '93.5vh',
                position: 'absolute',
                top: '6.5vh',
                right: 0,
            }}
            onBreakpoint={onSmallScreen => {
                toggleRightDrawer()
            }}
        >

        </Sider >
    );
}

export default RightDrawer;