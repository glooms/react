import React from 'react';
import store from '../store';

class NumberField extends React.Component
{
    constructor()
    {
        super();
        this.state = {
            exprList: ''
        }
        store.subscribe(() => {
            this.setState({exprList: store.getState()});
        });
    }
    
    render()
    {
        var expr = '';
        var list = this.state.exprList;
        for (var i = 0; i < list.length; i++)
            expr += ' ' + list[i];
        return (<div id='number-field'>{expr}</div>);
    }
}

export default NumberField;
