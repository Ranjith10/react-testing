import {screen, render, cleanup} from '@testing-library/react'

import ListItems from './ListItems'

afterEach(cleanup)

test('ListItems render No Contacts Found - empty message when props is empty or not sent', () => {
    let {rerender} = render(<ListItems/>)
    let emptyMessage = screen.getByText(/no contacts found/i)
    expect(emptyMessage).toBeInTheDocument()
    rerender(<ListItems contactsList={[]}/>)
    let newEmptyMessage = screen.getByText(/no contacts found/i)
    expect(newEmptyMessage).toBeInTheDocument()
})

test('ListItems render Contacts in the same order as props', () => {
    let fakeContacts = [ {name: 'Ranjith'}, {name: 'Sam'}]    
    let {rerender} = render(<ListItems contactsList={fakeContacts}/>)
    let renderedContacts = screen.getAllByTestId('contact-name').map(el => el.textContent)
    let fakeContactsNames = fakeContacts.map(i => i.name)    
    expect(renderedContacts).toEqual(fakeContactsNames)
    
    rerender(<ListItems contactsList={fakeContacts}/>)
    let rerenderedContactNames = screen.getAllByTestId('contact-name').map(el => el.textContent)
    expect(rerenderedContactNames).toEqual(fakeContactsNames)
})