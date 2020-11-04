import { Component, React } from 'react'
import ProjectItem from './ProjectItem'

class Portfolio extends Component {
    render() {
        return (
            <div>
                <div>
                    <h3 className="h3 sectionHeader"> {this.props.title}</h3>

                </div>

                <ProjectItem title="EventTower" description="Message bus" 
                    link="https://github.com/fatihdumanli/EventTower"
                    thumbnail="https://i.ibb.co/D71bFdC/event-tower-128x.png"></ProjectItem>
                <ProjectItem title="NPrismy" description="Lightweight orm" 
                    link="https://github.com/fatihdumanli/EventTower"
                    thumbnail="https://raw.githubusercontent.com/fatihdumanli/NPrismy/master/nprismy-logo.png"></ProjectItem>

            </div>
        )
    }
}

export default Portfolio