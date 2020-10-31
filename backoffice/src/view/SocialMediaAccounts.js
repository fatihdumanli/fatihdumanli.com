import { React, Component } from 'react'
import LoadingSplash from './LoadingSplash'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th></th>
                <th>Platform</th>
                <th>Username</th>
            </tr>
        </thead>
    )
}


const platformIcon = (name) => {
    switch (name) {
        case 'twitter':
            return '/asset/icons/008-twitter.png'
        case 'medium':
            return '/asset/icons/026-medium.png'
        case 'linkedin':
            return '/asset/icons/027-linkedin.png'
        case 'github':
            return '/asset/icons/github.png'
    }
}



const TableBody = (props) => {
 
    const rows = props.accounts.map((account, i) => {
        return (
            <tr>
                <td width="10"><img width="40" src={platformIcon(account.platform)}></img></td>
                <td>{account.platform}</td>
                <td>
                    <Popup trigger={<button>{account.username}</button>} position="right center">
                        <div>
                            <input type="text" className="form-control" placeholder="Enter your username" onChange={props.handleChange}></input>    <br/>
                            <button className="btn btn-success" key={account.platform} onClick={() => props.updateUsername(account.platform)}>OK</button>                       
                        </div>
                    </Popup>

                </td>
            </tr>
        )
    });

    return (
        <tbody>
            {rows}
        </tbody>
    )
}



class SocialMediaAccounts extends Component {

    handleChange = (e) => {
        const { name, value } = e.target
        
        this.setState({
            username: value
        })
                
    }


    submitForm = (platform) => {
        this.props.updateUsername(platform, this.state.username)
    }

    constructor(props) {
        super(props)
        this.state = {}
        this.state.status = null
        this.state.accounts = props.accounts
        this.state.username = null
        this.state.ref = props.updateUsername
    }


    render() {
        return (
                <div>
                    <table class="table">
                        <TableHeader></TableHeader>
                        <TableBody accounts={this.state.accounts} handleChange={this.handleChange} updateUsername={this.submitForm}></TableBody>
                    </table>
                </div>
        )
    }
}
export default SocialMediaAccounts