import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
// import App from './App';
import TodoApp from './TodoApp'
import About from './about'
import { Router, Route, hashHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { routerReducer } from 'react-router-redux'

import { saveState, loadState } from './localStorage'
import { fetchPhotos, visibilityFilter, todos } from './reducers/reducer'
import thunk from 'redux-thunk'
import './index.css';



const todoApp = combineReducers({
    todos,
    visibilityFilter,
    fetchPhotos,
    routing: routerReducer
});


const store = createStore(todoApp, composeWithDevTools(applyMiddleware(thunk)));
const history = syncHistoryWithStore(hashHistory, store);

const render = () => {
    ReactDOM.render(
        <Provider store={store}>
            <Router history={history}>
                <Route path="/(:filter)" component={TodoApp}></Route>
            </Router>
        </Provider>,
            document.getElementById('root')
    );
};
store.subscribe( () => {
  saveState({
    todos: store.getState().todos
  })
});
// store.subscribe(render);

render();







     /*COUNTER APP START*/

// const counter = (state = 0, action) => {
//     switch (action.type) {
//         case 'INCREMENT':
//             return state + 1;
//             break;
//         case 'DECREMENT':
//             return state - 1;
//             break;
//         case undefined:
//             return state;
//             break;
//     }
// };
//
// const Counter = ({ value, onIncrement, onDecrement }) => {
//      return (
//          <div>
//              <h1>{value}</h1>
//              <button onClick={onIncrement}>+</button>
//              <button onClick={onDecrement}>-</button>
//          </div>
//          )
// };
// const store = createStore(counter, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
//
// const render = () => {
//     ReactDOM.render(
//         <Counter value={store.getState()} onIncrement = {() => {
//             store.dispatch({type: 'INCREMENT'})
//         }} onDecrement = {() => {
//             store.dispatch({type: 'DECREMENT'})
//         }}/>,
//         document.getElementById('root')
//     );
// };
//
// store.subscribe(render);
// render();

      /*COUNTER APP FINISH*/
