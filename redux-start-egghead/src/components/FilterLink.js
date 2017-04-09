import React, { Component } from 'react'
import { Link } from 'react-router'

class FilterLink extends Component {
    render() {
        return (
            <div>
                <Link to={this.props.filter} activeStyle={
                    {
                        textDecoration: 'none',
                        color: 'black'
                    }
                }>
                    {this.props.children}
                </Link>
            </div>
        )
    }
}
export default FilterLink

