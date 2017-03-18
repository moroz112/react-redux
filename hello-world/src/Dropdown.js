import React, { Component } from 'react';

class Dropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {isOpened: false}
    }
    toggleDropdown() {
        this.setState({isOpened: !this.state.isOpened})
    }
    render() {
        let dropDownText;
        if(this.state.isOpened) {
            dropDownText = <div>here is dropdownText</div>
        }
        return (
            <div onClick={this.toggleDropdown.bind(this)}>
            Here is dropDown
            {dropDownText}
            </div>

        );
    }
}
export default Dropdown;