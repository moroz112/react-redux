import React, { Component, PropTypes } from 'react';

class Header extends Component {
    static propTypes = {
        items: PropTypes.array.isRequired
    };
    render() {
        console.log(this.props.items);
        return (
            <div>{this.props.items.map((item, index) =>
                <a href={item.link} key={index}>{item.text}</a>
            )}
            </div>
        )
    }
}
export default Header;