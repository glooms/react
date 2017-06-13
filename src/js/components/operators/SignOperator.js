import React from 'react';
import OperatorButton from '../OperatorButton';


class SignOperator extends OperatorButton
{
    constructor()
    {
        super();
    }

    componentDidMount()
    {
        this.setState({operator: '+/-', buttonId: 'sign'});
    }
}

export default SignOperator;
