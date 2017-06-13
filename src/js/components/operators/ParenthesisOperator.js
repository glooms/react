import React from 'react';
import OperatorButton from '../OperatorButton';


class ParenthesisOperator extends OperatorButton
{
    constructor()
    {
        super();
    }

    componentDidMount()
    {
        this.setState({operator: '()', buttonId: 'parenthesis'});
    }
}

export default ParenthesisOperator;
