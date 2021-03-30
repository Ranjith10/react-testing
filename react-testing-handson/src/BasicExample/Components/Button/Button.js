import React from 'react'

import './Button.css'

const Button = ({label}) => {
    return (
        <>
        <div>React Testings</div>        
        <button data-testid='button'>
            {label}            
        </button>
        </>
    )
}

export default Button
