import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import App from './App';
import './index.css';


const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ]
    }
};
const Todo = () => {
    return (
        <div>
            <input placeholder="add todos"/>
            <button>Add todos</button>
        </div>
    )
};

const store = createStore(todos, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Todo/>,
    document.getElementById('root')
);



















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
