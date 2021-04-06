import Login from './Login'
import {render, screen, cleanup} from '@testing-library/react'
import userEvent from '@testing-library/user-event'

afterEach(cleanup)

test('Form submission - username and password', () => {
    const onSubmitHandler = jest.fn()    
    render(<Login onSubmit={onSubmitHandler} />)
    screen.getByLabelText(/username/i).value = 'Ranjith'
    screen.getByLabelText(/password/i).value = 'password'
    let button = screen.getByRole('button', {name: /submit/i})
    userEvent.click(button, {button: 0})
    expect(onSubmitHandler).toHaveBeenCalledTimes(1)
    expect(onSubmitHandler).toHaveBeenCalledWith({
        username: 'Ranjith',
        password: 'password'
    })
})