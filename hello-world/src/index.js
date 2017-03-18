// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import './index.css';
//
// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );

import { createStore } from 'redux';

function playlist(state = [], action) {
  if(action.type){
    return [
        ...state,
        action.payload
    ]
  }
  return state
}

const store = createStore(playlist);

store.subscribe(() => {
  console.log("subscribe", store.getState());
});

const trackButton = document.querySelectorAll('.addTrack')[0];
trackButton.addEventListener('click', () => {
  const trackName = document.querySelectorAll('.trackInput')[0].value;
  store.dispatch({type: 'ADD_TRACK', payload: trackName});
});
