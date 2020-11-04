import { React, Component } from 'react'
import ProjectList from './ProjectList'
import NewProject from './NewProject'
import LoadingSplash from '../LoadingSplash'
import EditProject from './EditProject'

class Projects extends Component {

    
    component = null

    edit = (id) => {
        this.setState({mode: "edit"})
        this.setState({edit: { id: id }})
    }

    created = () => {
        alert("test")
        this.setState({mode: "list"})
        this.setState({edit: { id: null }})
    }


    constructor(props) {
        super(props)

        this.state = {
            "mode":"list",
            "edit": {
                id: ""
            },
            "id":"",
            "projects": []
        }

        this.component = <ProjectList editCallback={this.edit}></ProjectList>
       
    }

   
 

    componentWillUpdate(nextProps, nextState) {
        if(nextState.mode === "new") {
            this.component = <NewProject createdCallback={this.created}></NewProject>
        } 

        else if(nextState.mode === "list") {
            this.component = <ProjectList editCallback={this.edit}></ProjectList>
        }

        if(nextState.edit.id !== null) {
            this.component = <EditProject id={nextState.edit.id} updatedCallback={this.created}></EditProject>
        }
    }


    render() {
        
            return (

                <div class="container">
                    <div className="row">
                        <div className="col-sm-12">
                            {this.state.mode === "new" ? <button className="btn btn-danger right" onClick={() => this.setState({mode: "list"})}>Cancel</button> : null }               
                            <button className="btn btn-primary right" onClick={() => this.setState({mode: "new"})}>Add New</button>
                        </div>
                    </div>
                    {this.component}
                    
                </div>
            )
        
       

    }
}

export default Projects