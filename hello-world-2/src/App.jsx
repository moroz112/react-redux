import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
	render() {
		return (
			<div>
				atata
			</div>
		)
	}
}
export default connect(
    state => ({
		testStore: state
    })
)(App)