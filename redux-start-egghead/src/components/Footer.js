import React, { Component } from 'react';
import FilterLink from './FilterLink'

export default class Footer extends Component {
    render() {
        return (
            <div>
                <p>
                    <FilterLink filter="SHOW_ALL" setVisibilityFilter={this.props.setVisibilityFilter}>
                        All
                    </FilterLink>
                    <FilterLink filter="SHOW_ACTIVE" setVisibilityFilter={this.props.setVisibilityFilter}>
                        Active
                    </FilterLink>
                    <FilterLink filter="SHOW_COMPLETED" setVisibilityFilter={this.props.setVisibilityFilter}>
                        Completed
                    </FilterLink>
                </p>
            </div>
        )
    }
}