/*
You can also write JavaScript directly in your render methods, before the return statement, 
without inserting it inside of curly braces. This is because it is not yet within the JSX code.
When you want to use a variable later in the JSX code inside the return statement, you place 
the variable name inside curly braces.

In the code provided, the render method has an array that contains 20 phrases to represent 
the answers found in the classic 1980's Magic Eight Ball toy. The button click event is 
bound to the ask method, so each time the button is clicked a random number will be generated 
and stored as the randomIndex in state. On line 52, delete the string "change me!" and reassign 
the answer const so your code randomly accesses a different index of the possibleAnswers array 
each time the component updates. Finally, insert the answer const inside the p tags.
*/

import React from 'react';

export default class MyComponent extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
             userInput: '',
             randomIndex: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.ask = this.ask.bind(this);
    }

    handleChange(e) {
        this.setState({
            userInput: e.target.value
        })
    }

    ask() {
        if(this.state.userInput) {
            this.setState({
                randomIndex: Math.floor(Math.random() * 20), userInput: ''
            })
        }
    }
    
    render() {
        const someArray = [
            'It is certain',
            'It is decidedly so',
            'Without a doubt',
            'Yes, definitely',
            'You may rely on it',
            'As I see it, yes',
            'Outlook good',
            'Yes',
            'Signs point to yes',
            'Reply hazy try again',
            'Ask again later',
        ];
        const answer = someArray[this.state.randomIndex];
        return (
            <div>
                <input value={this.userInput} onChange={this.handleChange} />
                <button onClick={this.ask}>Ask</button>
                <h4>Answer: {answer}</h4>
            </div>
        )
    }
}