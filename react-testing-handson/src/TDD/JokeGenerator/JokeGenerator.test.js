import {cleanup, render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import * as axios from 'axios'
import MockAxios from 'axios-mock-adapter'

import Joke from './Joke'
import JokeGenerator from './JokeGenerator'

const mock = new MockAxios(axios)

afterEach(cleanup)

//Tests
test('Joke component renders the text prop', () => {
    const {rerender} = render(<Joke joke='A sample joke'/>)
    let joke = screen.getByTestId('joke-text')
    expect(joke).toBeInTheDocument()
    expect(joke).toHaveTextContent('A sample joke')
    //re-render with a diff prop and assert that Joke component updates the joke
    rerender(<Joke joke='A new joke with props update'/>)
    expect(joke).toHaveTextContent('A new joke with props update')
}) 

test('JokeGenerator - fetched random joke from server', async () => {
    mock.onGet().replyOnce(200, {
        value: {
            joke: 'A funny joke'
        }
    })
    render(<JokeGenerator/>)
    //Check text for initial codition with no jokes
    let defaultText = screen.getByText('You have not loaded any joke yet')    
    expect(defaultText).toBeInTheDocument()
    let button = screen.getByRole('button', {name: /Load a joke/})
    expect(button).toBeInTheDocument()
    
    userEvent.click(button, {button: 0})
    await expect(screen.queryByText('You have not loaded any joke yet')).not.toBeInTheDocument()
})