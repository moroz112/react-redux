import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {

  addTrack() {
    this.props.onAddTrack(this.trackInput.value);
  }
  render() {
    console.log('State of store', this.props.testStore);
    return (
        <div>
          <input type="text" placeholder="new track" ref={(input) => {this.trackInput = input}}/>
          <button className="addTrack" onClick={this.addTrack.bind(this)}>add Track</button>
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
      testStore: state.tracks
    }),
    dispatch => ({
      onAddTrack: (trackName) => {
        dispatch({type: 'ADD_TRACK', payload: trackName})
      }
    })
)(App)