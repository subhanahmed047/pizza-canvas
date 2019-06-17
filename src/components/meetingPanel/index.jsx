import React from 'react';
import { Layout, Tabs } from "antd";
const { TabPane } = Tabs;
const { Sider } = Layout;

const MeetingPanel = ({ onlineUsers, zoom, collapsed, toggleMeetingPanel }) => {
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
                toggleMeetingPanel()
            }}
        >
            <Tabs defaultActiveKey="1">
                <TabPane tab="Online Users" key="1">{onlineUsers}</TabPane>
                <TabPane tab="Zoom" key="2">{zoom}</TabPane>
            </Tabs>,
        </Sider >
    );
}

export default MeetingPanel;