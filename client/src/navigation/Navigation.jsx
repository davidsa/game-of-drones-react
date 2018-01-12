import React from 'react';
import {Menu} from 'antd';
import {Link} from 'react-router-dom';

export const Navigation = () => {
    return (
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['start']}>
            <Menu.Item key="start">
                <Link to="/game">Start Game</Link>
            </Menu.Item>
            <Menu.Item key="history">
                <Link to="/ranking">Ranking</Link>
            </Menu.Item>
        </Menu>
    );
};