import React from 'react';
import OperatorButton from '../OperatorButton';
import store from '../../store';
import { calculate } from '../../actions';

class ComputeOperator extends OperatorButton
{
    constructor()
    {
        super();
        this.calcExpression = this.calcExpression.bind(this);
    }

    componentDidMount()
    {
        this.setState({operator: '=', buttonId: 'compute'});
    }

    handleClick()
    {
        var result = this.calcExpression();
        store.dispatch(calculate(result)); 
    }

    calcExpression() {
        var expr = store.getState();
        if (!expr)
            return 0;
        var result = Number(expr[0]);
        for (var i = 1; i < expr.length; i++) {
            var token = expr[i];
            switch (token) {
                case '+':
                    result += Number(expr[i + 1]);
                    break;
                case '-':
                    result -= Number(expr[i + 1]);
                    break;
                case 'x':
                    result *= Number(expr[i + 1]);
                    break;
                case '/':
                    result /= Number(expr[i + 1]);
                    break;
                default:
                    break;
            }
        }
        return result;
    }
}

export default ComputeOperator;
