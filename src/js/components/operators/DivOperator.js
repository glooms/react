import React from 'react';
import OperatorButton from '../OperatorButton';


class DivOperator extends OperatorButton
{
    constructor()
    {
        super();
    }

    componentDidMount()
    {
        this.setState({operator: '/', buttonId: 'div'});
    }
}

export default DivOperator;
