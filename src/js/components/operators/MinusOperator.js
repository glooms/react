import React from 'react';
import OperatorButton from '../OperatorButton';


class MinusOperator extends OperatorButton
{
    constructor()
    {
        super();
    }

    componentDidMount()
    {
        this.setState({operator: '-', buttonId: 'minus'});
    }
}

export default MinusOperator;
