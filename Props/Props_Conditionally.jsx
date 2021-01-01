import React from 'react'

class Result extends React.Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <h1>
                {this.props.loginState ? 'Active' : 'Offline'}
            </h1>
        )
    }
}

export default class User extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
             loggedIn: false
        }

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.state({
            loggedIn: true
        })
    }
    render() {
        const loginState = this.state.loggedIn
        return (
            <div>
                <button onClick={this.handleClick}>State Changer</button>
                <Result user={loginState} />
            </div>
        )
    }
}