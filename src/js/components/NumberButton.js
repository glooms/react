import React from 'react';
import store from '../store';
import { inputDigit } from '../actions';


class NumberButton extends React.Component
{
    constructor(props)
    {
        super(props);
        if (Number(props.symbol) === NaN) {
            console.log('WTF YOU DOIN!?');
            return;
        }
        this.symbol = props.symbol;
        this.handleClick = this.handleClick.bind(this);
    }

    render()
    {
        return (<button type='number' onClick={this.handleClick}>
                {this.symbol}
                </button>);
    }

    handleClick(e)
    {
        store.dispatch(inputDigit(this.symbol));
    }
}

export default NumberButton;
