import { createStore, applyMiddleware } from "redux";
import ThunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import CounterReducer from "../reducers/CounterReducer";

const middlewares = [ThunkMiddleware];
const middlewareEnhancer = applyMiddleware(...middlewares);
const enhancers = [middlewareEnhancer];
const composedEnhancers = composeWithDevTools(...enhancers);

export default function Store(previousstate) {
    const store = createStore(
        CounterReducer,
        previousstate,
        composedEnhancers
        // window. REDUX DEVTOOLS EXTENSION && window. REDUX_DEVTOOLS E
    );
    return store;
};