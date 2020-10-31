import { React, Component } from 'react'
import SocialMediaItem from './SocialMediaItem'

class SocialMediaItems extends Component {
    render() {

        const rows = this.props.items.map((item, i) => {
            return (
                <div className="p-2 bd-highlight" key={i}>
                    <SocialMediaItem platform={item.platform} username={item.username} index={i}></SocialMediaItem>
                </div>
            )
        })
        return (
            <div className="d-flex flex-row bd-highlight mb-3 socialMediaItemsContainer">
                   {rows}
            </div>
        )
    }
}

export default SocialMediaItems