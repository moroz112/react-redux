import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import App from './App';
import About from './About';
import Track from './Track';
import './index.css';
import { Router, Route, hashHistory } from 'react-router';
// import { HashRouter, Route, Link } from 'react-router-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { syncHistoryWithStore } from 'react-router-redux';

import reducers from './reducers';

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
const history = syncHistoryWithStore(hashHistory, store);
import NewApp from './new/containers/NewApp';

// ReactDOM.render(
//     <Provider store={store}>
//         <HashRouter>
//             <div>
//                 <Route path="/home" component={App}></Route>
//                 <Route path="/about" component={About}></Route>
//             </div>
//         </HashRouter>
//     </Provider>,
//
// );

ReactDOM.render(
  <NewApp/>,
  document.getElementById('root')
);


// ReactDOM.render(
//     <Provider store={store}>
//         <Router history={history}>
//             <Route path="/" component={App}></Route>
//             <Route path="/about" component={About}></Route>
//             <Route path="/tracks/:id" component={Track}></Route>
//         </Router>
//     </Provider>,
//     document.getElementById('root')
// );

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
