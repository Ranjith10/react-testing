import { screen, render } from '@testing-library/react'
import GetByRole from './GetByRole'

test('Testing using getByRole - role', () => {
    render(<GetByRole/>)    
    const element = screen.getByRole('heading', {level: 1})
    expect(element).toHaveTextContent(/Testing/i)
})

test('Testing using getByRole - aria-pressed' , () => {
    render(<GetByRole/>)
    const element = screen.getByRole('button', {pressed: true})
    expect(element).toHaveTextContent('👍')
})