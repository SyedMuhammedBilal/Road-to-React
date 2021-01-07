/* How to write Class Component in React */

import React, { Component } from 'react'

export default class App extends Component {
    render() {
        return (
            <div>
                <h1>Hello, it's class component</h1>
            </div>
        )
    }
}


/* with state, it should look something like this */

import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'React'
        }
    }
    
    render() {
        return (
            <div>
                <h1>Hello from {this.state.name}</h1>
            </div>
        );
    }
};

export default App;
