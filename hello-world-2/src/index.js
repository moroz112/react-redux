import React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';
import './index.css';


function playlist(state = [], action) {
	if (action.type === 'ADD_TRACK') {
		return [
			...state,
			action.payload
		]
	}
	return state;
}
const store = createStore(playlist);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
store.subscribe(() => {
	console.log('subscribe', store.getState())
});
store.dispatch({type: 'ADD_TRACK', payload: 'some track'});
store.dispatch({type: 'ADD_TRACK', payload: 'some track 2'});

