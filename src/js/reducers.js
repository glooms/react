import { combineReducers } from 'redux'
import { INPUT_DIGIT, INPUT_OPERATOR, CALCULATE } from './actions'

function digits(state = [], action)
{
    switch (action.type) {
        case INPUT_DIGIT:
            console.log(state);
            if (state.length === 0)
                return [action.payload];
            if (Number.isNaN(Number(state[state.length - 1]))) {
                return [
                    ...state,
                    action.payload
                ];
            }
            var newState = [...state];
            newState.push(newState.pop() + action.payload);
            return newState;

        default:
            return state;
    }
}


function operators(state = [], action)
{
    switch (action.type) {
        case INPUT_OPERATOR:
            if (!state)
                return;
            if (Number(state[state.length - 1]) === NaN)
                return state;
            return [
                ...state,
                action.payload
            ];

        default:
            return state;
    }
}

function calculate(state = [], action)
{
    switch (action.type) {
        case CALCULATE:
            return [action.payload];

        default:
            return state;
    }
}

function calculatorApp(state = [], action)
{
    switch (action.type) {
        case INPUT_DIGIT:
            return digits(state, action);
        
        case INPUT_OPERATOR:
            return operators(state, action);

        case CALCULATE:
            return calculate(state, action);

        default:
            return state;
    }
}

export default calculatorApp;
