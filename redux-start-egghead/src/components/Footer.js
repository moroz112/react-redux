import React, { Component } from 'react';
import FilterLink from './FilterLink'

export default class Footer extends Component {
    render() {
        return (
            <div>
                <FilterLink filter="all">
                    All
                </FilterLink>
                <FilterLink filter="active">
                    Active
                </FilterLink>
                <FilterLink filter="completed">
                    Completed
                </FilterLink>
            </div>
        )
    }
}