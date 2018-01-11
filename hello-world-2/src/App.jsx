import React from 'react';
import { connect } from 'react-redux';
import { getTracks } from './actions/tracks';

const App = ({tracks, filterTracks, onAddTrack, onFindTrack, onGetTracks}) => {
	let trackInput = '';
	let searchInput = '';
	const addTrack = () => {
		console.log('add track', trackInput.value);
		onAddTrack(trackInput.value);
		trackInput.value = '';
	};
	const findTrack = () => {
		onFindTrack(searchInput.value);
		searchInput.value = '';
	};
	return (
		<div>
			<input type="text" ref={input => {trackInput = input}} />
			<button onClick={addTrack}>Add track</button>
			<input type="text" ref={input => {searchInput = input}} />
			<button onClick={findTrack}>Find track</button>
			<div>
				<button onClick={onGetTracks}>Got tracks</button>
			</div>
			<ul>
				{tracks.filter((val) => {
					return filterTracks ? val.name.indexOf(filterTracks) >=0 : true
				}).map((value, index) =>
					<li key={index}>{value.name}</li>
				)}
			</ul>

		</div>
	)
}
export default connect(
    state => ({
		tracks: state.tracks,
	    filterTracks: state.filterTracks
    }),
	dispatch => ({
		onAddTrack: (newTrack) => {
			const payload = {
				id: Date.now().toString(),
				name: newTrack
			};
			dispatch({type: 'ADD_TRACK', payload: payload})
		},
		onFindTrack: (name) => {
			dispatch({type: 'FIND_TRACK', payload: name})
		},
		onGetTracks: () => {
			dispatch(getTracks())
		}
	})
)(App)