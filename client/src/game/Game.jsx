import './game.styl';
import React from 'react';
import {Route} from 'react-router-dom';
import {Start} from './start/';
import {Play} from './play/';
import {Results} from './results/';
import {isEmpty} from 'lodash';


export class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            player1: '',
            player2: ''
        };
        this.onGameStart = this.onGameStart.bind(this);
    }

    onGameStart(player1, player2) {
        this.setState({player1, player2});
        const {history} = this.props;
        history.push('/game/play');
    }

    render() {
        return (
            <div className="game">
                <Route path="/game" exact
                       render={(props) => <Start onSubmit={this.onGameStart} {...props}/>}/>
                <Route path="/game/play" exact component={Play}/>
                <Route path="/game/results" exact component={Results}/>
            </div>
        );
    }
}
