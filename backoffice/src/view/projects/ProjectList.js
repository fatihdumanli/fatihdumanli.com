import { React, Component } from 'react'
import ProjectItem from './ProjectItem'
import configFile from '../../config.json'

const API_ENDPOINT = configFile.apiEndpoint

class ProjectList extends Component {

   

    constructor(props) {
        super(props)

        this.state = {
            projects: [],
            editCallback: props.editCallback
        }
    }

    componentDidMount() {
        fetch(API_ENDPOINT + '/info?format=json')
            .then(response => response.json())
            .then(response => {
                this.setState({ projects: response.projects })
            })
    }
    render() {

        const rows = this.state.projects.map((item, i) => {
            return (
                <div class="col-sm-12">
                    <ProjectItem id={item.id} name={item.name} description={item.description} link={item.link} thumbnail={item.thumbnail} editCallback={this.state.editCallback}></ProjectItem>
                </div>
            )
        });

        return (
            <div class="row">
                {rows}
            </div>
        )
    }
}

export default ProjectList