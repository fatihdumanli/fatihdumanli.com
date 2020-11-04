import { Component, React } from 'react'
import ProjectItem from './ProjectItem'

class Portfolio extends Component {


    constructor(props) {
        super(props)

        this.state = {
            items: props.items
        }

    }
    render() {


        return (
            <div>
                <div>
                    <h3 className="h3 sectionHeader"> {this.props.title}</h3>
                </div>

                {this.state.items.map((item, index) => {
                    return (
                        <ProjectItem title={item.name} description={item.description}
                            link={item.link}
                            thumbnail={item.thumbnail}></ProjectItem>
                    )

                })}

            </div>
        )
    }
}

export default Portfolio