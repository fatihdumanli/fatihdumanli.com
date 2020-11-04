import { React, Component } from 'react'
import Parser from 'html-react-parser'

class Overview extends Component {

    
    render() {

        const parse = require('html-react-parser');

        return (
            <div>
                <div>
                    <h3 className="h3 sectionHeader"> {this.props.title}</h3>

                </div>
                <p className="overviewText">
                    {parse(this.props.overviewText)}
                </p>
            </div>
        )
    }
}

export default Overview