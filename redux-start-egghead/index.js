import { createStore } from 'redux';
import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import Counter from './containers/Counter';
import { composeWithDevTools } from 'redux-devtools-extension';


const counter = (state = 3, action) => {
  switch (action.type) {
      case 'INCREMENT':
          return state + 1;
      case 'DECREMENT':
          return state - 1;
      default:
          return state
  }
};

const store = createStore(counter);

ReactDOM.render(
    <Counter value={store.getState()}/>,
    document.getElementById('root')
);

document.addEventListener('click', () => {
   store.dispatch({type: 'INCREMENT'})
});