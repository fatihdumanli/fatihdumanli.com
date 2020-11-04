import { React, Component } from 'react'
import BlogPosts from './BlogPosts'
import Header from './Header'
import { Helmet } from 'react-helmet'
import LoadingSplash from './LoadingSplash';
import Overview from './Overview';
import Portfolio from './Portfolio';
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
            socialMediaAccounts: [],
            blogposts: []
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

        fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@fatihdumanli')
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
                               <Portfolio title="Projects"></Portfolio>
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