import { React, Component } from 'react'


class SocialMediaItem extends Component {
    
    socialMediaPlatforms = [
        {
            id: "1",
            name: "facebook",
            icon: process.env.PUBLIC_URL + '/asset/icons/008-twitter.png',
            userProfileUrl: "https://facebook.com/"
        },
        {
            id: "2",
            name: "twitter",
            icon: process.env.PUBLIC_URL + '/asset/icons/008-twitter.png',
            userProfileUrl: "https://twitter.com/"
        },
        {
            id: "3",
            name: "instagram",
            icon: process.env.PUBLIC_URL + '/asset/icons/instagram.png',
            userProfileUrl: "https://instagram.com/"
        },
        {
            id: "4",
            name: "medium",
            icon: process.env.PUBLIC_URL + '/asset/icons/026-medium.png',
            userProfileUrl: "https://medium.com/@"
        },
        {
            id: "5",
            name: "github",
            icon: process.env.PUBLIC_URL + '/asset/icons/github.png',
            userProfileUrl: "https://github.com/"
        },
        {
            id: "6",
            name: "linkedin",
            icon: process.env.PUBLIC_URL + '/asset/icons/027-linkedin.png',
            userProfileUrl: "https://linkedin.com/in/"
        }
    ]


    buildProfileUrl(pName, username) {
        let p = this.socialMediaPlatforms.filter(platform => platform.name == pName)[0]
        const profileUrl = p.userProfileUrl + username
        return profileUrl
    }

    getPlatformIcon(pName) {
        let p = this.socialMediaPlatforms.filter(platform => platform.name == pName)[0]
        return p.icon
    }

    render() {

        return(
            
            <a key={this.props.index} href={this.buildProfileUrl(this.props.platform, this.props.username)} target="_blank">
                <img alt={this.props.alt} src={this.getPlatformIcon(this.props.platform)}
                width="40" height="40"/>
            </a>
        )
    }
}

export default SocialMediaItem