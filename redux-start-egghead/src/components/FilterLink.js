import React, { Component } from 'react'


class FilterLink extends Component {
    render() {
        return (
            <a href="#" onClick={ () => {this.props.setVisibilityFilter(this.props.filter)}}>{this.props.children}</a>
        )
    }
}
export default FilterLink

