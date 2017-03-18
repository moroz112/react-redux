import React, { Component } from 'react';

class RegistrationForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    handleSubmit() {
        console.log('handle submit')
    }
    handleChange(ev) {
        this.setState({email: ev.target.value});
        console.log('email changed', ev.target.value);

    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.email} placeholder="E-mail" onChange={this.handleChange}/>
            </form>
        )
    }
}
export default RegistrationForm;