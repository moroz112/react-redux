import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import App from './App';
import About from './About';
import './index.css';
import { HashRouter, Route, Link } from 'react-router-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import reducers from './reducers';

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <div>
                <Route path="/home" component={App}></Route>
                <Route path="/about" component={About}></Route>
            </div>
        </HashRouter>
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
