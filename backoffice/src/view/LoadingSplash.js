import { React, Component } from 'react'

class LoadingSplash extends Component {
    render() {
        return (
            <div className="loadingDiv">

                <div className="d-flex p-2 bd-highlight flex-column">

                    <div className="spinner-border text-primary" role="status">
                        <span className="sr-only"></span>
                    </div>
                </div>

            </div>
        )

    }
}

export default LoadingSplash