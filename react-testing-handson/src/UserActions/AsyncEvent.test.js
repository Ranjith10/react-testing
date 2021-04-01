import {screen, render, } from '@testing-library/react'
import AsyncEvent from './AsyncEvent'

test('Async event testing', async () => {
    render(<AsyncEvent/>)
    const element = screen.queryByText(/Signed in as/)
    expect(element).toBeNull()
    const asyncEvent = await screen.findByText(/Signed in/)
    expect(asyncEvent).toBeInTheDocument()

    const submitButton = screen.queryByText('submit')
    expect(submitButton).toBeNull() // it doesn't exist
    //Asserting that no elements with text 'submit' is present

    //Alternative
    expect(submitButton).not.toBeInTheDocument()
})