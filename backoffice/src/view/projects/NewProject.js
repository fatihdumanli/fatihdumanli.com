import { React, Component } from 'react'
import configData from '../../config.json'
class NewProject extends Component {
    constructor(props) {
        super(props)
        this.state = {
            createdCallback: props.createdCallback,
            projectName: null,
            projectDescription: null,
            projectThumbnail: null,
            projectLink: null
        }
    }

    addNewProject = (e) => {

        e.preventDefault()

        let body = {
            name: this.state.projectName,
            description: this.state.projectDescription,
            thumbnail: this.state.projectThumbnail,
            link: this.state.projectLink
        }

        fetch(configData.apiEndpoint + '/site/add/project', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        })


        this.state.createdCallback()
       
    }

    render() {
        return (
            <div>
                <form>
                    <div className="form-group">
                        <label htmlFor="txtProjectName">Project Name</label>
                        <input type="text" className="form-control" id="txtProjectName" name="txtProjectName" onChange={(e) => { this.setState({projectName: e.target.value }) }}>
                        </input>
                    </div>

                    <div className="form-group">
                        <label htmlFor="txtEmail">Project Description</label>
                        <textarea className="form-control" id="txtDescription"
                                  name="txtDescription" onChange={ (e) => { this.setState({projectDescription: e.target.value })}} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="txtProjectThumbnail">Project Thumbnail</label>
                        <input type="text" className="form-control" id="txtProjectThumbnail" 
                            name="txtProjectThumbnail"
                            onChange={(e) => { this.setState({projectThumbnail: e.target.value}) }}>
                        </input>
                    </div>

                    <div className="form-group">
                        <label htmlFor="txtProjectLink">Project Link</label>
                        <input type="text" className="form-control" id="txtProjectLink" 
                            name="txtProjectLink"
                            onChange={ (e) => this.setState({projectLink: e.target.value })}>
                        </input>
                    </div>

                    <button type="submit" className="btn btn-success" onClick={this.addNewProject}>Save New Project</button>
                </form>

            </div>
        )
    }

}

export default NewProject