import React from 'react'

const Joke = ({joke}) => {
    return (
        <div data-testid='joke-text'>
            {joke}
        </div>
    )
}

export default Joke
