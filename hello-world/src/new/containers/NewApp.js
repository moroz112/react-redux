import React, { Component } from 'react'
import NewHeader from '../components/NewHeader'

const menu = [
    {
        title: 'olo1',
        value: 'some shit'
    },
    {
        title: 'olo2',
        value: 'some shit 2'
    }
];

class NewApp extends Component {
    render() {
        return (
            <div>
                <NewHeader menu={menu} />
                New App works correct
            </div>
        )
    }
}
export default NewApp;