import './start.styl';
import React from 'react';
import {Button, Card, Form, Input} from 'antd';
import {isEmpty} from 'lodash';

const {Item} = Form;

class NormalStart extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit(e) {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (err) {
                console.error(err);
            }
            console.debug(JSON.stringify(values, null, 4));
            const {player1, player2} = values;
            this.props.onSubmit(player1, player2);
        });
    }

    createFormInput(name, required, message) {
        const {getFieldDecorator} = this.props.form;
        return getFieldDecorator(name, {rules: [{required, message}]});
    }

    render() {
        return (
            <Card title="Start Game" className="start">
                <Form onSubmit={this.handleSubmit}>
                    <Item>
                        {this.createFormInput('player1', true, 'Please Select Player 1 Name')
                        (
                            <Input placeholder="Player 1" className="start__input"/>
                        )}
                    </Item>
                    <Item>
                        {this.createFormInput('player2', true, 'Please Select Player 2 Name')
                        (
                            <Input placeholder="Player 2" className="start__input"/>
                        )}
                    </Item>
                    <Button type="primary" htmlType="submit">Play</Button>
                </Form>
            </Card>
        );
    }
}

export const Start = Form.create()(NormalStart);
