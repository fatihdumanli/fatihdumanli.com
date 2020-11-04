import { React, Component } from 'react'
import ProjectItem from './ProjectItem'

class Projects extends Component {

    constructor(props) {
        super(props)
    }


    render() {
        this.state = {
            "mode": "list"
        }

        return (
            <div class="container">

                <div className="row">
                    <div className="col-sm-12">
                        <button className="btn btn-primary right">Add New</button>
                    </div>
                </div>

                <div class="row">
                    <div class="col-sm-12">
                        <ProjectItem></ProjectItem>
                    </div>

                    <div class="col-sm-12">
                        <ProjectItem></ProjectItem>
                    </div>

                    <div class="col-sm-12">
                        <ProjectItem></ProjectItem>
                    </div>
                    
                </div>
            </div>
        )

    }
}

export default Projects