import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTracks } from './actions/tracks';
import Menu from './Menu';
import { Link } from 'react-router';

class App extends Component {

  addTrack() {
    this.props.onAddTrack(this.trackInput.value);
  }
  findTrack() {
    console.log('find this', this.searchInput.value);
    this.props.onFindTrack(this.searchInput.value);
  }
  render() {
    console.log('State of store', this.props.testStore);
    console.log('ownProps', this.props.ownProps);
    return (
        <div>
            <Menu/>
            <div>
              <input type="text" placeholder="new track" ref={(input) => {this.trackInput = input}}/>
              <button className="addTrack" onClick={this.addTrack.bind(this)}>add Track</button>
              <ul>
                {this.props.testStore.map((track, index) =>
                <li key={index}>
                    <Link to={`/tracks/${track.id}`}>{track.name}</Link>
                    </li>
                )}
              </ul>
            </div>
            <div>
                <input type="text" placeholder="new track" ref={(input) => {this.searchInput = input}}/>
                <button className="findTrack" onClick={this.findTrack.bind(this)}>find Track</button>
            </div>
            <div>
                <button className="getTracks" onClick={this.props.onGetTracks}>GET TRACKS</button>
            </div>
        </div>
    )
  }
}
export default connect(
    (state, ownProps) => ({
      testStore: state.tracks.filter(track => track.name.includes(state.filter)),
      ownProps
    }),
    dispatch => ({
      onAddTrack: (name) => {
          const payload = {
            id: Date.now().toString(),
            name: name
          };
        dispatch({type: 'ADD_TRACK', payload: payload})
      },
      onFindTrack: (name) => {
          dispatch({type: 'FIND_TRACK', payload: name})
      },
      onGetTracks: () => {
          dispatch(getTracks());
      }
    })
)(App)