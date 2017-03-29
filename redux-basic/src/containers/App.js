import React, { Component } from 'react'
import { connect } from 'react-redux'

class App extends Component {
  render() {
    const user = this.props.user;
    return <div>Привет из App you {user.name}</div>
  }
}

function mapStatesToProp(state) {
  return {
    user: state
  }
}
export default connect(mapStatesToProp)(App)
