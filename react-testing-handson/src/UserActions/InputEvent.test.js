import React, { useState } from 'react'

import {screen, render, fireEvent} from '@testing-library/react'

const InputEvent = () => {
    const [value, setValue] = useState('')

    const removeDollar = (value) => {
        return value[0] === '$' ? value.slice(1) : value
    }
    const getReturnValue = (value) => (value === '' ? '' : `$${value}`)
    const handleChange = (e) => {
        e.preventDefault()
        const cost = e.target.value
        const valueWithoutDollar = removeDollar(cost)
        if(isNaN(valueWithoutDollar)) return
        setValue(getReturnValue(valueWithoutDollar))
    }

    return (
        <input aria-label='cost-input' onChange={handleChange} value={value}/>
    )
}


//TEST
const setup = () => {
    render(<InputEvent/>)
    const input = screen.getByLabelText('cost-input')
    return {
        input
    }
}

test('Add a dollar sign to the entered value', () => {
    const {input} = setup()
    fireEvent.change(input, {target: {value: 25}})
    expect(input.value).toBe('$25')
})

test('Allow a dollar sign to the entered along with the value', () => {
    const {input} = setup()
    fireEvent.change(input, {target: {value: '$25'}})
    expect(input.value).toBe('$25')
})

test('Do not allow any non-numeric values to be inputed', () => {
    const {input} = setup()
    expect(input.value).toBe('')
    fireEvent.change(input, {target: {value: 'Good day'}})
    expect(input.value).toBe('')
    //Value is empty before and after onchange event is fired
})

test('Allow a dollar sign to be deleted', () => {
    const {input} = setup()
    fireEvent.change(input, {target: {value: '$25'}})
    expect(input.value).toBe('$25')
    fireEvent.change(input, {target: {value: ''}})
    expect(input.value).toBe('')
})

test('Do not allow any symbol values to be inputed excpet $', () => {
    const {input} = setup()
    expect(input.value).toBe('')
    fireEvent.change(input, {target: {value: '%50'}})
    expect(input.value).toBe('')
    //Value is empty before and after onchange event is fired
})
