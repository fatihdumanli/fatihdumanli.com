import { React, Component } from 'react'
import LoadingSplash from './LoadingSplash'
import { ToastContainer } from "react-toastr";

class MainSettings extends Component {
    constructor(props) {
        super(props)
        this.state = {}
        this.state.changedProps = []
        this.state.name = null
        this.state.email = null
        this.state.profilePicture = null
        this.state.siteTitle = null
    }


    componentWillMount() {
        fetch('https://api20201030233257.azurewebsites.net/info?format=json')
            .then((response) => response.json())
            .then((response) => {
                this.setState({
                    name: response.name,
                    email: response.email,
                    profilePicture: response.profilePicture,
                    siteTitle: response.siteTitle
                })
            })
    }

    handleChange = (event) => {
        const { name, value } = event.target

        this.setState({
            [name]: value
        })

        this.state.changedProps.push(name)
    }


    makePostCall = (path, body) => {
        fetch('https://api20201030233257.azurewebsites.net' + path, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        })
    }

    submitForm = (e) => {

        e.preventDefault()

        if (this.state.changedProps.includes('name')) {
            this.makePostCall('/site/set/fullname', {
                fullName: this.state.name
            })
        }

        if (this.state.changedProps.includes('email')) {

            this.makePostCall('/site/set/email', {
                email: this.state.email
            })
        }

        if (this.state.changedProps.includes('profilePicture')) {
            this.makePostCall('/site/set/profilePicture', {
                profilePicture: this.state.profilePicture
            })
        }

        if (this.state.changedProps.includes('siteTitle')) {
           this.makePostCall('/site/set/siteTitle', {
               siteTitle: this.state.siteTitle
           })
        }

        alert("Settings updated successfully.")

    }


    render() {
        return (
            this.state.email == null ? <LoadingSplash></LoadingSplash> :
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