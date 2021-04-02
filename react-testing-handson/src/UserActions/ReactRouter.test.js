import {screen, render, cleanup} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createMemoryHistory } from 'history'
import React from 'react'
import {Router, MemoryRouter} from 'react-router-dom'

import ReactRouter, {LocationDisplay } from './ReactRouter'

afterEach(cleanup)

describe('React Router Component', () => {
    test('Full app rendering', () => {
        render(
                <ReactRouter />, {wrapper: MemoryRouter}
        )
        //OnLoad check for home page text
        expect(screen.getByText(/you are home/i)).toBeInTheDocument()

        userEvent.click(screen.getByText(/about/i), {button: 0})
        //check that the content changed to the new page    
        expect(screen.getByText(/you are on the about page/i)).toBeInTheDocument()
    })
})

test('Landing on a bad route', () => {
    const history = createMemoryHistory()
    history.push('/some/bad/route')
    render(
        <Router history={history}><ReactRouter/></Router>
    )
  
    expect(screen.getByText(/no match/i)).toBeInTheDocument()
})

test('testing LocationDisplay component', () => {
    const history = createMemoryHistory()
    const route = '/some-route'
    history.push(route)
    render(
      <Router history={history}>
        <LocationDisplay />
      </Router>
    )
    expect(screen.getByTestId('location-display')).toHaveTextContent(route)
})