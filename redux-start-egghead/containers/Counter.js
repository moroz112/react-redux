import React, { Component } from 'react';
import { connect } from 'react-redux';

export default class Counter extends Component{
    render() {
       return <div>Value {this.props.value}</div>
    }
}