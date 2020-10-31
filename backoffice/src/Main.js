import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import LoadingSplash from "./view/LoadingSplash";
import MainSettings from "./view/MainSettings";
import SocialMediaAccounts from "./view/SocialMediaAccounts";
const API_ENDPOINT = "https://api20201030233257.azurewebsites.net"

var makePostCall = function(path, body) {
    fetch(API_ENDPOINT + path, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
    })
}



class Main extends Component {

    state = {
        status: null,
        name: null,
        email: null,
        profilePicture: null,
        siteTitle: null
    }

    constructor() {
        super()
    }


    render() {
        return (
            this.state.status == null ? <LoadingSplash></LoadingSplash> :
                <HashRouter>
                    <div className="row">
                        <div className="col-md-2">
                            <ul className="list-group">
                                <li className="list-group-item">
                                    <NavLink exact to="/">Main Settings</NavLink>
                                </li>
                                <li className="list-group-item">
                                    <NavLink to="/socialmedia">Social Media Accounts</NavLink>
                                </li>
                            </ul>
                        </div>

                        <div className="col-md-10">
                            <div>
                            <Route exact path="/" render={(props) => (
                                <MainSettings {...props} name={this.state.name} email={this.state.email}
                                    profilePicture={this.state.profilePicture} siteTitle={this.state.siteTitle} updateSetting={this.updateSetting} />
                            )}></Route>
                            <Route path="/socialmedia" render={(props) => (
                                <SocialMediaAccounts {...props} accounts={this.state.accounts} updateUsername={this.updateSocialMediaPlatFormUserName} />
                            )}></Route>
                        </div>
                    </div>
                        </div>
            </HashRouter>

        )
    }

      
   
    componentDidMount() {
        fetch(API_ENDPOINT + '/info?format=json')
            .then((response) => response.json())
            .then((response) => {
                this.setState({
                    name: response.name,
                    email: response.email,
                    profilePicture: response.profilePicture,
                    siteTitle: response.siteTitle,
                    status: "ok",
                    accounts: response.socialMediaAccounts
                })
            })
    }

    updateSocialMediaPlatFormUserName(platform, username) {
        makePostCall('/site/set/socialmedia/' + platform, {
            Username: username
        })
    }


    updateSetting(key, value) {
        if(key === 'name') {
            makePostCall('/site/set/fullname', {
                fullName: value
            })
        }

        else if(key == 'email') {
            makePostCall('/site/set/email', {
                email: value
            })
        }

        else if(key == 'profilePicture') {
            makePostCall('/site/set/profilePicture', {
                profilePicture: value
            })
        }

        else if(key == 'siteTitle') {
            makePostCall('/site/set/siteTitle', {
                siteTitle: value
            })
        }

        alert("ok")
    }


}

export default Main;