import React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers'
import App from './App';
import './index.css';

// const initialState = {
// 	tracks: [
// 		'enter sandman',
// 		'smells like'
// 	],
// 	playlists: [
// 		'work',
// 		'home'
// 	]
// };
//
// function playlist(state = initialState, action) {
// 	if (action.type === 'ADD_TRACK') {
// 		return {
// 			tracks: [...state.tracks, action.payload],
// 			playlists: [...state.playlists]
// 		}
// 	}
// 	return state;
// }
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);



