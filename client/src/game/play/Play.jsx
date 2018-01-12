import React from 'react';

export class Play extends React.Component {
    constructor(props) {
        super(props);
        console.log('On Play Component');
    }

    render() {
        return (
            <h1>Play</h1>
        );
    }
}