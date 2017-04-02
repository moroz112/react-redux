import React, { Component } from 'react';

class NewHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {someState: "olo"};
        this.menu = this.props.menu;
    }
    render() {
        console.log('menu', this.menu);
        return (
            <div>
                This is header
                <ul>
                    {this.menu.map((item, index) =>
                       <li key={index}>{item.title}</li>
                    )}
                </ul>
            </div>
        )
    }
}
export default NewHeader;