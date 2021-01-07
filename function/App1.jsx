// how to write Functional Component in React

import React from 'react'

function App1() {
    return (
        <div>
            <h1>Hello</h1>
        </div>
    )
}

export default App1

// with states it should look something like this...

import React, { useState } from 'react'

function App1() {
    const [name, setName] = useState('React')

    return (
        <div>
            <h1>Hello from {name}</h1>
        </div>
    )
}

export default App1

// you can also write with Arrow functions like this...

// how to write Functional Component in React

import React from 'react'

function App1() {
    return (
        <div>
            <h1>Hello</h1>
        </div>
    )
}

export default App1

// with states it should look something like this...

import React, { useState } from 'react'

const App1 = () => {
    const [name, setName] = useState('React')

    return (
        <div>
            <h1>Hello from {name}</h1>
        </div>
    )
}

export default App1
