import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import logger from 'redux-logger';
import {rootReducer} from "./reducer";

const isProduction = process.env.NODE_ENV === 'production';
const middleware = [logger];
const enhancers = applyMiddleware(...middleware);

export default isProduction ? createStore(rootReducer, composeWithDevTools(enhancers)) : createStore(rootReducer)
