import React, { Component } from 'react';

class News extends Component {
    constructor(props) {
        super(props);
        this.state = {visible: true}
    }

    render() {
        let news = this.props.news;
        return (
            <div>
                this is new
                <ul>
                {news.map((item, index) =>
                    <li key={index}>{item.title}</li>
                )}
                </ul>
            </div>

        )
    }
}
export default News;