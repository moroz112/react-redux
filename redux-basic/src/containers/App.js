import React, { Component } from 'react'
import { connect } from 'react-redux'
import Page from '../components/Page'

class App extends Component {
  render() {
    const user = this.props.user;
    return (
        <div>
            <Page/>
          Привет из App you {user.name} dew
        </div>
    )
  }
}

function mapStatesToProp(state) {
  return {
    user: state.user
  }
}
export default connect(mapStatesToProp)(App)
