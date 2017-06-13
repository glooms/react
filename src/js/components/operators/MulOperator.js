import React from 'react';
import OperatorButton from '../OperatorButton';


class MulOperator extends OperatorButton
{
    constructor()
    {
        super();
    }

    componentDidMount()
    {
        this.setState({operator: 'x', buttonId: 'mul'});
    }
}

export default MulOperator;
