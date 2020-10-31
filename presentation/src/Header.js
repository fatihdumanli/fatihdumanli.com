import { React, Component } from 'react'
import SocialMediaItems from './SocialMediaItems'

const Name = (props) => {
    return (
        <p className="display-3 name">{props.value}</p>
    )
}

const Email = (props) => {
    return (
        <p className="email">{props.value}</p>
    )
}

const ProfilePicture = (props) => {
    return (
        <div className="p-2 bd-highlight justify-content-end profilePic">
            <img src={props.imageUrl}
                className="profilePic"></img>
        </div>
    )
}


class Header extends Component {
    render() {
        return (
            <div className="d-flex p-2 bd-highlight header">


                <div className="d-flex p-2 bd-highlight flex-column full">

                    <div class="container">
                        <div class="row">
                            <div class="col-sm-2">
                                <ProfilePicture imageUrl={this.props.profilePicture} />
                            </div>

                            <div class="col-sm-10">
                                <Name value={this.props.name} />
                                <Email value={this.props.email} />
                            </div>

                        </div>

                        <div class="row">
                            <div class="col-sm-12">
                                <SocialMediaItems items={this.props.socialMediaItems} />

                            </div>
                        </div>
                    </div>




                </div>



            </div>
        )
    }
}

export default Header