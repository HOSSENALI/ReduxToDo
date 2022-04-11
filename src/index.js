
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './styles/custom-styles.css';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createStore } from "redux";

//initialize a store object.............
const initializeState = {
  counter: 10,
};
//Do jobs on changes on action...........
function counterReducer(state = initializeState, action) {
  switch (action.type) {
    case "INCREMENT_ONE":
      return {
        ...state,
        counter: state.counter + 1,
      };
      break;
    case "DECREMENT_ONE":
      return {
        ...state,
        counter: state.counter - 1,
      };
      break;
    default:
      break;
  }
  return state;
}
//Set a store.......................
let store = createStore(
  counterReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
reportWebVitals();
