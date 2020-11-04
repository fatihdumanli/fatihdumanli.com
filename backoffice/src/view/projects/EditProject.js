import { React, Component } from 'react'
import configFile from '../../config.json'

const API_ENDPOINT = configFile.apiEndpoint

class EditProject extends Component {

    constructor(props) {
        super(props)

        this.state = {
            id: props.id,
            updatedCallback: props.updatedCallback,
            name: null,
            description: null,
            link: null,
            thumbnail: null
        }
    }


    componentWillMount() {
        fetch(API_ENDPOINT + '/site/project/' + this.state.id + '?format=json')
        .then(response => response.json())
        .then(response => this.setState({name: response.name, description: response.description, thumbnail: response.thumbnail, link: response.link}))
    }

    updateProject = (e) => {
        e.preventDefault()

        let body = {
            id: this.state.id,
            name: this.state.name,
            description: this.state.description,
            thumbnail: this.state.thumbnail,
            link: this.state.link
        }

        fetch(API_ENDPOINT + '/site/add/project', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        })


        this.state.updatedCallback()
    }


    render() {
        return (
            <div>
                editing project {this.state.name} <br/>

                <form>
                    <div className="form-group">
                        <label htmlFor="txtProjectName">Project Name</label>
                        <input type="text" className="form-control" id="txtProjectName" 
                        value={this.state.name}
                        name="txtProjectName" onChange={(e) => { this.setState({name: e.target.value }) }}>
                        </input>
                    </div>

                    <div className="form-group">
                        <label htmlFor="txtEmail">Project Description</label>
                        <textarea className="form-control" id="txtDescription"
                                  value={this.state.description}
                                  name="txtDescription" onChange={ (e) => { this.setState({description: e.target.value })}} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="txtProjectThumbnail">Project Thumbnail</label>
                        <input type="text" className="form-control" id="txtProjectThumbnail" 
                            value={this.state.thumbnail}
                            name="txtProjectThumbnail"
                            onChange={(e) => { this.setState({thumbnail: e.target.value}) }}>
                        </input>
                    </div>

                    <div className="form-group">
                        <label htmlFor="txtProjectLink">Project Link</label>
                        <input type="text" className="form-control" id="txtProjectLink" 
                            value={this.state.link}
                            name="txtProjectLink"
                            onChange={ (e) => this.setState({link: e.target.value })}>
                        </input>
                    </div>

                    <button type="submit" className="btn btn-success" onClick={this.updateProject}>Update Project</button>
                </form>
            </div>
        )
    }
}

export default EditProject