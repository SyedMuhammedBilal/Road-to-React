/*
The code editor has three constants defined within the CheckUserAge component's render() method. 
They are called buttonOne, buttonTwo, and buttonThree. Each of these is assigned a simple JSX 
expression representing a button element. First, initialize the state of CheckUserAge with input 
and userAge both set to values of an empty string.

Once the component is rendering information to the page, users should have a way to interact with 
it. Within the component's return statement, set up a ternary expression that implements the following 
logic: when the page first loads, render the submit button, buttonOne, to the page. Then, when a user 
enters their age and clicks the button, render a different button based on the age. If a user enters 
a number less than 18, render buttonThree. If a user enters a number greater than or equal to 18, 
render buttonTwo.
*/

import React, { Component } from 'react'

export default class CheckUserAge extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             input: '',
             userAge: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(e) {
        this.setState({
            input: e.target.value,
            userAge: ''
        })
    }

    handleSubmit() {
        this.setState(state => ({
            userAge: state.input
        }))
    }

    render() {
        const buttonOne = <button onClick={this.handleSubmit}>Submit</button> 
        const buttonTwo = <button onClick={this.handleSubmit}>You may enter</button> 
        const buttonThree = <button onClick={this.handleSubmit}>You shall not pass</button> 
        return (
            <div>
                <h3>Enter your age</h3>
                <input value={this.state.input} onChange={this.handleChange} />
                <br />
                {
                    this.state.userAge == '' ? buttonOne : 
                    this.state.userAge < 18 ? buttonThree : 
                    this.state.age >= 18 && buttonTwo
                }
            </div>
        )
    }
}
