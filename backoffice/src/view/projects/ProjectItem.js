import { React, Component } from 'react'

class ProjectItem extends Component {

    constructor(props) {
        super(props)
        this.state = {
            editCallback: props.editCallback
        }
    }
    render() {
        return (
            <a href="javascript:;" onClick={() => { this.state.editCallback(this.props.id) }}>
                <div className="row project-item">
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="row card-body">
                                <div className="col-sm-9">
                                    <h5 className="card-title">{this.props.name}</h5>
                                    <p className="card-text">{this.props.description}</p>
                                </div>
                                <div className="col-sm-3">
                                     <img className="col-sm-3" src={this.props.thumbnail} alt="sans" />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </a>


        )
    }
}

export default ProjectItem