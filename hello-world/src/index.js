import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';
import './index.css';

import reducers from './reducers';

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>,
  document.getElementById('root')
);

//
// store.subscribe(() => {
//   console.log("subscribe", store.getState());
// });
//
// const trackButton = document.querySelectorAll('.addTrack')[0];
// trackButton.addEventListener('click', () => {
//   const trackName = document.querySelectorAll('.trackInput')[0].value;
//   store.dispatch({type: 'ADD_TRACK', payload: trackName});
// });
