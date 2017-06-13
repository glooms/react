import React from 'react';
import OperatorButton from '../OperatorButton';


class PlusOperator extends OperatorButton
{
    constructor()
    {
        super();
    }

    componentDidMount()
    {
        this.setState({operator: '+', buttonId: 'plus'});
    }
}

export default PlusOperator;
