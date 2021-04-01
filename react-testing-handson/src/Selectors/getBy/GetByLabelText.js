import React from 'react'

const GetByLabelText = () => {
    return (
        <div>
            <input id="username-input" />

            <label id="username-label">Username</label>
            <input aria-labelledby="username-label" />
            <input placeholder='enter user-name'/>
            <a href="/about">About ℹ️</a>
            <img alt="Incredibles 2 Poster" src="/incredibles-2.png" />
        </div>
    )
}

export default GetByLabelText
