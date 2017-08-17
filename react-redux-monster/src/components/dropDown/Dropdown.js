import React, { Component } from 'react';
import './Dropdown.css'

export default class Dropdown extends Component {
    constructor(props) {
        super(props);
        this.state = { isOpened: false }
    }
    toggleState() {
        this.setState({isOpened: !this.state.isOpened})
    }
    render() {
        console.log('isOpened', this.state.isOpened);
        return (
            <div>dropdown</div>
        )
    }

}