import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {

  render() {
    console.log('State of store', this.props.testStore);
    return (
        <div>
          <input type="text" placeholder="new track" />
          <button className="addTrack">add Track</button>
          <ul>
            {this.props.testStore.map((track, index) =>
            <li key={index}>{track}</li>
            )}
          </ul>
        </div>
    )
  }
}
export default connect(
    state => ({
      testStore: state
    }),
    dispatch => ({})
)(App)