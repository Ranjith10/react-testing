import React from 'react'

const GetByRole = () => {
    return (
        <div>
            <h1>Testing using `getBY` selectors</h1>
            <h2>@tesing-library/react</h2>
            <h3>Powered by Jest</h3>
            <div role="heading" aria-level="2">Heading Level Two setby Role</div>
            <button aria-pressed="true">👍</button>
            <button aria-pressed="false">👎</button>
        </div>
    )
}

export default GetByRole
