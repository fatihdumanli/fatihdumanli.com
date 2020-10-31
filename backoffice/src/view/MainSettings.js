import { React, Component } from 'react'
import LoadingSplash from './LoadingSplash'
import { ToastContainer } from "react-toastr";
import Overview from './Overview';

class MainSettings extends Component {
    constructor(props) {
        super(props)

        this.state = {
            changedProps: [],
            status: null,
            name: props.name,
            email: props.email,
            profilePicture: props.profilePicture,
            siteTitle: props.siteTitle
        }
    }


    handleChange = (event) => {
        const { name, value } = event.target

        this.setState({
            [name]: value
        })

        this.state.changedProps.push(name)
    }

    submitForm = (e) => {
        e.preventDefault()

        if (this.state.changedProps.includes('name')) {
            this.props.updateSetting('name', this.state.name)
        }

        if (this.state.changedProps.includes('email')) {

            this.props.updateSetting('email', this.state.email)

        }

        if (this.state.changedProps.includes('profilePicture')) {
            this.props.updateSetting('profilePicture', this.state.profilePicture)

        }

        if (this.state.changedProps.includes('siteTitle')) {
            this.props.updateSetting('siteTitle', this.state.siteTitle)
        }

    }


    render() {
        return (
            <div>
                <form>
                    <div className="form-group">
                        <label htmlFor="txtName">Your Full Name</label>
                        <input type="text" className="form-control" id="txtName" name="name" value={this.state.name} onChange={this.handleChange}>

                        </input>
                    </div>

                    <div className="form-group">
                        <label htmlFor="txtEmail">Your Email</label>
                        <input type="text" className="form-control" id="txtEmail"
                            placeholder="Enter email" name="email" value={this.state.email} onChange={this.handleChange} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="txtName">Your Profile Picture</label>
                        <input type="text" className="form-control" id="txtProfilePicture" name="profilePicture" value={this.state.profilePicture} onChange={this.handleChange}>

                        </input>
                    </div>


                    <div className="form-group">
                        <label htmlFor="txtName">Site Title</label>
                        <input type="text" className="form-control" id="txtSiteTitle" name="siteTitle" value={this.state.siteTitle} onChange={this.handleChange}>

                        </input>
                    </div>
                    <button type="submit" className="btn btn-success" onClick={this.submitForm}>Save Settings</button>
                </form>

            </div>
        )
    }
}

export default MainSettings