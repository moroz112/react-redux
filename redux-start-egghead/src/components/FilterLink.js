import React, { Component } from 'react'


class FilterLink extends Component {
    render() {
        return (
            <a href="#" onClick={this.props.setVisibilityFilter}></a>
        )
    }
}
export default FilterLink

