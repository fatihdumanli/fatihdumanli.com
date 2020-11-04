import HttpsRedirect from 'react-https-redirect';
import App from './App';
import { React, Component } from 'react'
 
 
class HttpsApp extends Component {
 
  render() {
    return (
        <HttpsRedirect>
            <App></App>
        </HttpsRedirect>
    )
  }
}

export default HttpsApp