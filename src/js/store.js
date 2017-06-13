import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import calculatorApp from './reducers'

const reduxLogger = createLogger();

const store = createStore(calculatorApp, applyMiddleware(reduxLogger));

export default store;
