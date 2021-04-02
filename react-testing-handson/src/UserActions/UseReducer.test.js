import React, {useReducer} from 'react'

import {screen, render, fireEvent, cleanup} from '@testing-library/react'

const initialState = {
    isConfirmed: false,
}

const reducer = (state=initialState, action) => {
    switch(action.type) {
        case 'success': {
            return {
                ...state,
                isConfirmed: true,
            }
        }
        default: 
            return state
    }
}

const UseReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <>
            <div>
                {
                    state.isConfirmed
                    ?   <div aria-label='confirm'>Confirmed Message</div>
                    :   <div aria-label='waiting'>Waiting for confirmation</div>
                }                
            </div>       
            <button onClick={() => dispatch({type: 'success'})}>Click Me</button> 
        </>
    )
}


//Test logic
afterEach(cleanup)

describe('UseReducer Component', () => {
    test('Testing useReducer function', () => {
        render(<UseReducer/>)
        const waitingText = screen.getByLabelText('waiting')
    
        //Before firing event - assert 'waiting' text is in the document
        expect(waitingText).toBeInTheDocument()
        //Fire the button event
        const button = screen.getByRole('button') 
        fireEvent.click(button)
        const confirmationText = screen.getByLabelText('confirm')
        //After firing - assert confirmation text is in the document
        expect(confirmationText).toBeInTheDocument()
    })
})
