import React from 'react'

const Login = ({onSubmit}) => {

    const handleSubmit = (e) => {
        e.preventDefault()
        let {username, password} =e.target.elements
        onSubmit({username : username.value, password: password.value})
    }
    
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor='username'>UserName</label>
                <input id='username'/>
                <label htmlFor='password'>Password</label>
                <input id='password'/>        
                <button type='submit'>Submit</button>    
            </form>            
        </>
    )
}

export default Login
