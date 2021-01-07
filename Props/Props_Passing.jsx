/* 
    ============= PROPS ==============
    props is the important thing when making a React App, it allow us to send data dynamically via props
    instead of writing it statically, like in this example, there are two component, one is Props_Passing
    and other is ShowName, let suppose for now that ShowName components is beautifully designed and it shows the current users
    and we have 4 pages on website and want to show active user all across the website, so instead of doing it statically
    what we do is we will pass data to it dynamically, after making a beautiful component of ShowName we will use it in Props_Passing
    component to show it, but we want to send the data dynamically, so we done is that, in ShowName component, down in <h1></h1> tag
    we pass a reference name {activeUser} (note: you can it, what ever you want), and after this we will use that name where ever
    we'll use that component, like in this example we used this component in Props_Passing component so in <ShowName /> component
    we'll pass the reference that we made in ShowName Component earlier, and the reference name is activeUser={}, and should look 
    something like this, and in this bracket, we can pass our data... 
*/

import React from 'react'

const Props_Passing = () => {
    const [name, setName] = React.useState('React');

    return (
        <div>
            <ShowName activeUser={name} />
        </div>
    )
}

export default Props_Passing

import React, { Component } from 'react';

class ShowName extends Component {
    render() {
        return (
            <div>
                <h1> {activeUser} </h1>
            </div>
        );
    }
}
