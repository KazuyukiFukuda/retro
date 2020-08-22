import React from 'react'

import '../static/css/css/main.css'

const Main = () => {
    const list = {
        name: 'takurinton', 
        age: 20
    }
    return (
        <div className="main">
            <h1>{list.name}</h1>
            <h2>{list.age}</h2>
        </div>
    )
}

export default Main