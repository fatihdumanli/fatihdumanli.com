import { Component, React } from 'react'

class Portfolio extends Component {
    render() {
        return (
            <div>
                <div>
                    <h3 className="h3 sectionHeader"> {this.props.title}</h3>

                </div>
                <p className="overviewText">
                </p>
            </div>
        )
    }
}

export default Portfolio