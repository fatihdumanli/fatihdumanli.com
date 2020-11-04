import { React, Component } from 'react'
import BlogPosts from './BlogPosts'
import Header from './Header'
import { Helmet } from 'react-helmet'
import LoadingSplash from './LoadingSplash';
import Overview from './Overview';
import Portfolio from './Portfolio';
import configFile from './config.json'
export const execPOST = (url) => {
    return fetch(url, {
        mode: 'no-cors',
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });
};

/*const API_ENDPOINT = ""*/
const API_ENDPOINT = configFile.apiEndpoint

class App extends Component {


    constructor(props) {
        super(props)

        this.state = {
            status: null,
            siteInfo: {},
            socialMediaAccounts: [],
            blogposts: [],
            projects: []
        }
    }

    componentWillMount() {
        fetch(API_ENDPOINT + '/info?format=json', {})
            .then((result) => result.json())
            .then((result) => {
                this.setState({
                    status: "ok",
                    siteInfo: result.siteInfo,
                    socialMediaAccounts: result.siteInfo.socialMediaAccounts,
                    projects: result.projects
                })
            })

        fetch(configFile.mediumRss)
            .then((result) => result.json())
            .then(result => {
                this.setState({
                    blogposts: result.items
                })
            })
    }


    componentDidMount() {
    }




    //TODO: add github
    overview = {
        "text": "Overview text comes here."
    }


    render() {

        return (
            this.state.status == null ?

                <LoadingSplash /> :

                <div className="container">
                    <Helmet>
                        <title>{this.state.siteInfo.siteTitle}</title>
                    </Helmet>
                    <div className="centered">

                        <Header name={this.state.siteInfo.name}
                            email={this.state.siteInfo.email}
                            profilePicture={this.state.siteInfo.profilePicture}
                            socialMediaItems={this.state.socialMediaAccounts} />

                            
                        <div className="row">
                            <div className="col-md-7">
                               <Overview title="Overview" overviewText={this.state.siteInfo.overviewText}></Overview>
                               <Portfolio title="Projects" items={this.state.projects}></Portfolio>
                            </div>
                            <div className="col-md-5">
                                <BlogPosts name="Latest Blog Posts" items={this.state.blogposts}></BlogPosts>
                            </div>
                        </div>

                    </div>
                </div>


        )
    }
}

export default App