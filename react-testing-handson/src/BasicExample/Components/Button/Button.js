import React from 'react'

import './Button.css'

const Button = ({label}) => {
    return (
        <button data-testid='button'>
            {label}            
        </button>
    )
}

export default Button
