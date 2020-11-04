import { React, Component } from 'react'

class BlogPost extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <li className="post-item">
                <a href={this.props.link} target="_blank">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-8">

                                <div className="vertical-flexbox">
                                    <span className="post-title">{this.props.title}</span>
                                    <span className="post-date">{this.props.pubDate}</span>
                                </div>

                            </div>
                            <div className="col-sm-4">
                                <img className="post-thumbnail" src={this.props.thumbnail}></img>

                            </div>
                        </div>
                    </div>
                </a>

            </li>
        )
    }

}

export default BlogPost