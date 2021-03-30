import React from 'react'
import ReactDom from 'react-dom'
import {cleanup, render, screen} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Button from './Button'

afterEach(cleanup)

test('button renders without crashing', () => {
    let element = document.createElement('div')
    ReactDom.render(<Button/>, element)
})

test('button renders correctly', () => {
    let {getByTestId} = render(<Button label='Click Me' />)
    expect(getByTestId('button')).toHaveTextContent('Click Me')
})

test('button renders correctly', () => {
    let {getByTestId} = render(<Button label='Save' />)
    expect(getByTestId('button')).toHaveTextContent('Save')
})