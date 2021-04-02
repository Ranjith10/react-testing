import React from 'react'
import {Switch, Route, Link, useLocation, BrowserRouter as Router} from 'react-router-dom'

const About = () => <div>You are on the about page</div>
const Home = () => <div>You are home</div>
const NoMatch = () => <div>No match</div>

export const LocationDisplay = () => {
    const location = useLocation()
  
    return <div data-testid="location-display">{location.pathname}</div>
  }
  

const ReactRouter = () => {
    return (
        <>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>            
            <LocationDisplay/>
            <Switch>
                <Route path='/' exact>
                    <Home/>
                </Route>
                <Route path='/about'>
                    <About/>
                </Route>
                <Route >
                    <NoMatch/>
                </Route>
            </Switch>        
        </>
    )
}

export default ReactRouter
