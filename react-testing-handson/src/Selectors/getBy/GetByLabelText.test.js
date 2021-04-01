import GetByLabelText from './GetByLabelText'
import {render, screen} from '@testing-library/react'

test('using getByLabelText', () =>{
    render(<GetByLabelText/>)
    const element = screen.getAllByLabelText('Username')
})

test('using getByPlaceholderText', () =>{
    render(<GetByLabelText/>)
    const element = screen.getByPlaceholderText(/enter/i)
    expect(element).toBeInTheDocument()
    
})


test('using getByText', () =>{
    render(<GetByLabelText/>)
    const element = screen.getByText(/About/i)
    expect(element).toBeInTheDocument()
})

test('using getByAltText', () =>{
    render(<GetByLabelText/>)
    const element = screen.getByAltText(/incredible/i)
    expect(element).toBeInTheDocument()
})