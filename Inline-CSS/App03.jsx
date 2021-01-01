/*
The code editor has a simple controlled input component with a styled border. 
You want to style this border red if the user types more than 15 characters of 
text in the input box. Add a condition to check for this and, if the condition 
is valid, set the input border style to 3px solid red. You can try it out by 
entering text in the input.

*/

import React from 'react'

export default class CheckInput extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
             input: ''
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({
            input: e.target.value
        })
    }
    
    render() {
        const inputStyle = {
            border: '2px solid black'
        }
        if(this.state.input > 15) {
            inputStyle.border = '2px solid red'
        }
        return (
            <div>
                <h1>Type 15 character or less</h1>
                <input value={this.state.input} onChange={this.handleChange} />
            </div>
        )
    }
}