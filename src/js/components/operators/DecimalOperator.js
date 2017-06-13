import React from 'react';
import OperatorButton from '../OperatorButton';


class DecimalOperator extends OperatorButton
{
    constructor()
    {
        super();
    }

    componentDidMount()
    {
        this.setState({operator: '.', buttonId: 'decimal'});
    }
}

export default DecimalOperator;
