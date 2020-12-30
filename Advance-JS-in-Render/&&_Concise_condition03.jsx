/*
Solve the previous example again, so the h1 only renders if display is true, 
but use the && logical operator instead of an if/else statement.
*/

import React from 'react';

class MyComponent extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
             display: true
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState((state) => ({
            display: !state.display
        }))
    }
    
    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Click to Toggle</button>
                {this.state.display && <h1>Displayed</h1>}
            </div>
        )
    }
}

export default MyComponent