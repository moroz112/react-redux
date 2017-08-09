import React, { Component } from 'react';

class Dropdown extends Component {
    constructor(props) {
        super(props);
        this.state = { isOpened: false }
    }
    toggleState() {
        this.setState({isOpened: !this.state.isOpened})
    }
    render() {
        console.log('isOpened', this.state.isOpened);
        return <div onClick={this.toggleState.bind(this)}>dropdown</div>
    }

}
export default Dropdown;