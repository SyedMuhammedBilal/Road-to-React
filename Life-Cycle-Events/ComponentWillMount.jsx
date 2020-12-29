/*
The componentWillMount() method is called before the render() method 
when a component is being mounted to the DOM. 
Log something to the console within componentWillMount() - 
you may want to have your browser console open to see the output.
*/

import React from 'react';

class MyComponent extends React.Component {

    componentWillMount() {
        console.log('Hello React!')

        // Hello React will be Logged
    };

    render() {
        return (
            <div />
        )
    }
}

export default MyComponent;