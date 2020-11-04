import { React, Component } from 'react'

class ProjectItem extends Component {


    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="row project-item">
                <div className="col-sm-12">
                    <div className="card">
                        <div className="row card-body">
                            <div className="col-sm-9">
                                <h5 className="card-title">{this.props.title}</h5>
                                <p className="card-text">{this.props.description}</p>
                                <a href={this.props.link} target="_blank" className="btn btn-primary">Explore on GitHub</a>
                            </div>
                            <img className="col-sm-3" src={this.props.thumbnail} alt={this.props.title} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProjectItem