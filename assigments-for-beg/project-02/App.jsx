import React from 'react'

class MyApp extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }

        this.Increment = this.Increment.bind(this);
        this.Decrement = this.Decrement.bind(this);
        this.Reset = this.Reset.bind(this);
    }

    Increment() {
        this.setState((state) => {
            count: state.count + 1
        })
    }

    Decrement() {
        this.setState({
            count: count - 1
        })
    }

    Reset() {
        this.setState({
            count: 0
        })
    }
    
    render() {
        return (
            <div>
                <button onClick={this.Increment}> + </button>
                <button onClick={this.Decrement}> - </button>
                <button onClick={this.Reset}> RESET </button>
                <br />
                <h1> {this.state.count} </h1>
            </div>
        )
    }
}

export default MyApp;