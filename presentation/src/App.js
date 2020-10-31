import { React, Component } from 'react'
import Table from './Table'
import Header from './Header'
import { Helmet } from 'react-helmet'
import LoadingSplash from './LoadingSplash';

export const execPOST = (url) => {
    return fetch(url, {
        mode: 'no-cors',
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });
};

class App extends Component {


    constructor(props) {
        super(props)

        this.state = {
            status: null,
            siteInfo: {},
            socialMediaAccounts: []
        }
    }
    componentWillMount() {
        fetch('https://api20201030233257.azurewebsites.net/info?format=json', {})
            .then((result) => result.json())
            .then((result) => {
                this.setState({
                    status: "ok",
                    siteInfo: result,
                    socialMediaAccounts: result.socialMediaAccounts
                })
            })
    }


    componentDidMount() {
    }




    //TODO: add github
    overview = {
        "text": "Overview text comes here."
    }


    latestBlogPosts = [
        {
            icon: process.env.PUBLIC_URL + '/asset/icons/026-medium.png',
            title: "Test post 1",
            link: "https://medium.com",
            publishedOn: "29.10.2020"
        },
        {
            icon: process.env.PUBLIC_URL + '/asset/icons/026-medium.png',
            title: "Test post 2",
            link: "https://medium.com",
            publishedOn: "29.10.2020"
        }
    ]


    render() {
        return (
            this.state.status == null ? 
                
                <LoadingSplash/> :

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
                                <div>
                                    <h3 className="h3 sectionHeader"> Overview</h3>

                                </div>
                                <p className="overviewText">
                                    {this.state.siteInfo.overviewText}
                                </p>

                            </div>
                            <div className="col-md-5">
                                <Table name="Latest Blog Posts" items={this.latestBlogPosts}></Table>
                            </div>
                        </div>

                    </div>
                </div>


        )
    }
}

export default App