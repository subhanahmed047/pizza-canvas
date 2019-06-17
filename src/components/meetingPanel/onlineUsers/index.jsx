import React from 'react';
import { List, Skeleton, Avatar, Row, Col, Icon, Tooltip } from 'antd';

class OnlineUsers extends React.Component {
    state = {
        loading: true,
        users: [],
    }

    componentDidMount() {
        const fakeDataUrl = `https://randomuser.me/api/?results=${Math.floor(Math.random() * Math.floor(10))}&inc=name,picture`;

        fetch(fakeDataUrl)
            .then((response) => {
                return response.json();
            })
            .then(
                (users) => {
                    this.setState({
                        loading: false,
                        users: users.results
                    });
                },
                (error) => {
                    console.log(error);
                    this.setState({
                        loading: false,
                    });
                }
            )
    }


    formatName = (name) => {
        return `${name.first} ${name.last}`
            .toLowerCase()
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    };

    render = () => (
        <Row type="flex" justify="center">
            <Col span={20}>
                <List
                    loading={this.state.loading}
                    itemLayout="horizontal"
                    dataSource={this.state.users}
                    size="small"
                    renderItem={item => (
                        <List.Item actions={[<Tooltip title="Allow Editing"><Icon type="edit" /></Tooltip>, <Tooltip title="Transfer Control"><Icon type="swap" /></Tooltip>]} style={{ textAlign: "justify" }}>
                            <Skeleton avatar title={false} loading={item.loading} active>
                                <List.Item.Meta
                                    avatar={
                                        <Avatar src={item.picture.thumbnail} />
                                    }
                                    title={this.formatName(item.name)}
                                />
                            </Skeleton>
                        </List.Item>
                    )}
                />
            </Col>
        </Row>
    );
}

export default OnlineUsers;