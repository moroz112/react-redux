import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
// import { composeWithDevTools } from 'redux-devtools-extension'
// import App from './App';
import TodoApp from './TodoApp'
import './index.css';


const todo = (state, action) => {
    switch(action.type) {
        case 'ADD_TODO':
            return {
                id: action.id,
                text: action.text,
                completed: false
            };
        case 'TOGGLE_TODO':
            if(state.id !== action.id) {
                return state
            }
            return {
                ...state,
                completed: !state.completed
            };
        default:
            return state
    }
};
const visibilityFilter = (state = 'SHOW_ALL', action) => {
  switch(action.type) {
      case 'SET_VISIBILITY_FILTER':
          return action.filter;
      default:
          return state
  }
};
const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                todo(undefined, action)
            ];
        case 'TOGGLE_TODO':
            return state.map(t => todo(t, action));
        default:
            return state
    }
};
const todoApp = combineReducers({
    todos,
    visibilityFilter
});

// const Todo = () => {
//     return (
//         <div>
//             <input placeholder="add todos"/>
//             <button>Add todos</button>
//         </div>
//     )
// };

const store = createStore(todoApp, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const render = () => {
    ReactDOM.render(
        <Provider store={store}>
            <TodoApp/>
        </Provider>,
            document.getElementById('root')
    );
};


store.subscribe(render);
render();













// console.log('current state', store.getState());
// console.log('dispatch adding todo');
// store.dispatch({
//     type: 'ADD_TODO',
//     id: 0,
//     text: 'Go shopping'
// });
// console.log('current state', store.getState());
// console.log('dispatching toggle');
// store.dispatch({
//     type: 'TOGGLE_TODO',
//     id: 1
// });
// console.log('current state', store.getState());
// store.dispatch({
//     type: 'SET_VISIBILITY_FILTER',
//     filter: 'show done'
// });
// console.log('current state', store.getState());




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
