import {screen, render, fireEvent} from '@testing-library/react'

const Button = ({ onClick, children }) => (
    <button onClick={onClick}>{children}</button>
)

test('Testing fireEvent', () => {
    const handlerFunction = jest.fn()
    render(<Button onClick={handlerFunction}>Click Me</Button>)
    fireEvent.click(screen.getByRole('button'))
    expect(handlerFunction).toBeCalledTimes(1)
})