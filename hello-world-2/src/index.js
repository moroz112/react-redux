import React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
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
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);



