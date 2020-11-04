import { React, Component } from 'react'

class ProjectItem extends Component {
    render() {
        return (
            <div className="row project-item">
                <div className="col-sm-12">
                    <div className="card">
                        <div className="row card-body">
                            <div className="col-sm-9">
                                <h5 className="card-title">Title</h5>
                                <p className="card-text">desc</p>
                            </div>
                            <img className="col-sm-3" src={this.props.thumbnail} alt="sans" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProjectItem