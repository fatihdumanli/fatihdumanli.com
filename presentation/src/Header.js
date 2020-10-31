import { React, Component } from 'react'
import FlexContainer from './FlexContainer'

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


                <div className="d-flex p-2 bd-highlight flex-column">
                    <Name value={this.props.name} />
                    <Email value={this.props.email} />
                    <FlexContainer items={this.props.socialMediaItems} />
                </div>

                <ProfilePicture imageUrl={this.props.profilePicture} />


            </div>
        )
    }
}

export default Header