/*
 * action types
 */

export const INPUT_DIGIT = 'INPUT_DIGIT';
export const INPUT_OPERATOR = 'INPUT_OPERATOR';
export const CALCULATE = 'CALCULATE';

/*
 * action creators
 */

export const inputDigit = (digit) => {
    return {
        type: INPUT_DIGIT,
        payload: digit
    };
};

export const inputOperator = (op) => {
    return {
        type: INPUT_OPERATOR,
        payload: op
    };
};

export const calculate = (result) => {
    return {
        type: CALCULATE,
        payload: result
    };
};
