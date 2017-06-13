import React from 'react';
import store from '../store';
import { inputOperator } from '../actions';

class OperatorButton extends React.Component
{
    constructor()
    {
        super();
        this.state = {
            operator: null,
            buttonId: null,
        };
        this.handleClick = this.handleClick.bind(this);
    }

    render()
    {
        return (<button id={this.state.buttonId} onClick={this.handleClick}>
                {this.state.operator}
                </button>);
    }

    handleClick()
    {
        store.dispatch(inputOperator(this.state.operator));
    }
}

export default OperatorButton;
