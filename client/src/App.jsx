import './app.styl';
import React from 'react';
import {Layout} from 'antd';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom'
import {Navigation} from './navigation/';
import {Game} from './game/';
import {Ranking} from './ranking/';

const {Header, Footer, Content} = Layout;

export default class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Layout className="app">
                    <Header style={{height: 'auto'}}>
                        <Navigation/>
                    </Header>
                    <Content className="app__content">
                        <Switch>
                            <Route path="/game" component={Game}/>
                            <Route path="/ranking" component={Ranking}/>
                            <Redirect to="/game"/>
                        </Switch>
                    </Content>
                    <Footer className="app__footer">
                    </Footer>
                </Layout>
            </BrowserRouter>
        );
    }
}
