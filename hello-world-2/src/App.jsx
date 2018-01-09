import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
	addTrack() {
		console.log('add track', this.trackInput.value);
		this.props.onAddTrack(this.trackInput.value);
		this.trackInput.value = '';
	}
	render() {
		console.log('component store olo ata', this.props.testStore);
		return (
			<div>
				<input type="text" ref={input => {this.trackInput = input}} />
				<button onClick={this.addTrack.bind(this)}>Submit</button>
				<ul>
					{this.props.testStore.map((value, index) =>
						<li key={index}>{value.name}</li>
					)}
				</ul>
			</div>
		)
	}
}
export default connect(
    state => ({
		testStore: state.tracks
    }),
	dispatch => ({
		onAddTrack: (newTrack) => {
			const payload = {
				id: Date.now().toString(),
				name: newTrack
			};
			dispatch({type: 'ADD_TRACK', payload: payload})
		}
	})
)(App)