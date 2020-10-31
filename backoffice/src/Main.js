import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import MainSettings from "./view/MainSettings";
import SocialMediaAccounts from "./view/SocialMediaAccounts";


class Main extends Component {
    render() {
        return (
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
                            <Route exact path="/" component={MainSettings} />
                            <Route path="/socialmedia" component={SocialMediaAccounts}></Route>
                        </div>
                    </div>
                </div>
            </HashRouter>

        )
    }
}

export default Main;