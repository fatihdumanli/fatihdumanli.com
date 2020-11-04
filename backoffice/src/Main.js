import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import LoadingSplash from "./view/LoadingSplash";
import MainSettings from "./view/MainSettings";
import Overview from "./view/Overview";
import SocialMediaAccounts from "./view/SocialMediaAccounts";
import Projects from "./view/projects/Projects";
import configData from "./config.json";

const API_ENDPOINT = configData.apiEndpoint;

class Main extends Component {

    state = {
        status: null,
        name: null,
        email: null,
        profilePicture: null,
        siteTitle: null,
        overview: null,
        sessionId: null
    }

    constructor() {
        super()
    }

    makePostCall = (path, body) => {

        /*
        if (this.state.sessionId == null) {
            this.authenticate()
        }
        */

        fetch(API_ENDPOINT + path, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        })
    }

    saveOverviewText = (text) => {
        this.makePostCall('/site/set/overview', {
            Overview: text
        })

        alert("ok")
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
                                    <NavLink to="/overview">Overview</NavLink>
                                </li>

                                <li className="list-group-item">
                                    <NavLink to="/projects">Projects</NavLink>
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

                                <Route path="/projects" render={(props) => (
                                    <Projects {...props} />
                                )}></Route>

                                <Route path="/socialmedia" render={(props) => (
                                    <SocialMediaAccounts {...props} accounts={this.state.accounts} updateUsername={this.updateSocialMediaPlatFormUserName} />
                                )}></Route>

                                <Route path="/overview" render={(props) => (
                                    <Overview {...props} overview={this.state.overview} save={this.saveOverviewText} />
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
                    name: response.siteInfo.name,
                    email: response.siteInfo.email,
                    profilePicture: response.siteInfo.profilePicture,
                    siteTitle: response.siteInfo.siteTitle,
                    status: "ok",
                    accounts: response.siteInfo.socialMediaAccounts,
                    overview: response.siteInfo.overviewText
                })
            })
    }

    updateSocialMediaPlatFormUserName(platform, username) {
        this.makePostCall('/site/set/socialmedia/' + platform, {
            Username: username
        })
    }

    authenticate = () => {
        let pwd = prompt("Enter the password")
        let payload = {
            username: "fatih",
            password: pwd
        }
        fetch(API_ENDPOINT + '/auth/credentials?format=json', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload)
        }).then((response) => response.json())
            .then(response => {
                if (response.sessionId == null) {
                    alert("Incorrect password")
                }

                else {
                    this.setState({
                        sessionId: response.sessionId
                    })
                }
            }
            )
    }

    updateSetting = (key, value) => {

        if (key === 'name') {
            this.makePostCall('/site/set/fullname', {
                fullName: value
            })
        }

        else if (key == 'email') {
            this.makePostCall('/site/set/email', {
                email: value
            })
        }

        else if (key == 'profilePicture') {
            this.makePostCall('/site/set/profilePicture', {
                profilePicture: value
            })
        }

        else if (key == 'siteTitle') {
            this.makePostCall('/site/set/siteTitle', {
                siteTitle: value
            })
        }
    }


}

export default Main;