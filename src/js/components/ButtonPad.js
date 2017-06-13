import React from 'react';
import NumberButton from './NumberButton';
import PlusOperator from './operators/PlusOperator';
import MinusOperator from './operators/MinusOperator';
import MulOperator from './operators/MulOperator';
import DivOperator from './operators/DivOperator';
import DecimalOperator from './operators/DecimalOperator';
import SignOperator from './operators/SignOperator';
import ParenthesisOperator from './operators/ParenthesisOperator';
import ComputeOperator from './operators/ComputeOperator';


class ButtonPad extends React.Component
{
    constructor()
    {
        super();
        this.createReactRow = this.createReactRow.bind(this);
    }

    render()
    {
        return (<div type='number-pad'>
                <div type='button-row'>
                <button>C</button>
                <DivOperator />
                <MulOperator />
                </div>
                <div type='button-row'>
                {this.createReactRow(7, 9)}
                <MinusOperator />
                </div>
                <div type='button-row'>
                {this.createReactRow(4, 6)}
                <PlusOperator />
                </div>
                <div type='button-row'>
                {this.createReactRow(1, 3)}
                <ParenthesisOperator />
                </div>
                <div type='button-row'>
                {this.createReactRow(0, 0)}
                <DecimalOperator />
                <SignOperator />
                <ComputeOperator />
                </div>
                </div>);
    }

    createReactRow(from, to) {
        var nbrs = [];
        for (var i = from; i <= to; i++) {
            nbrs.push(String(i));
        }
        nbrs = nbrs.map((nbr, iter) => {
            return <NumberButton symbol={nbr} key={iter} />;
        });
        return nbrs
    }
}

export default ButtonPad;
