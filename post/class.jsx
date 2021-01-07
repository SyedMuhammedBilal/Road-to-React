import React, { useState } from 'react'

/* with Arrow Function */

const Hello = () => {
    const [ name, setName ] = useState('serverless_cloud')

    return (
        <div>
            <h1> Hello, welcome to { name } </h1>
        </div>
    )
}

export default Hello;
