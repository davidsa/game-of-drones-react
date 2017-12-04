import './home.styl';
import React from 'react';
import {Button, Card, Input, Layout, Menu} from 'antd';

const {Header, Footer, Content} = Layout;
const {Group: InputGroup} = Input;

export class Home extends React.Component {
    render() {
        return (
            <Layout className="home">
                <Header style={{height: 'auto'}}>
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['start']}>
                        <Menu.Item key="start">Start</Menu.Item>
                        <Menu.Item key="history">History</Menu.Item>
                    </Menu>
                </Header>
                <Content className="content">
                    <Card title="Start Game">
                        <InputGroup>
                            <Input style={{marginBottom: '20px'}} placeholder="Player 1"/>
                            <Input style={{marginBottom: '20px'}} placeholder="Player 2"/>
                        </InputGroup>
                        <Button type="primary">Play</Button>
                    </Card>
                </Content>
                <Footer>Footer</Footer>
            </Layout>
        );
    }
}