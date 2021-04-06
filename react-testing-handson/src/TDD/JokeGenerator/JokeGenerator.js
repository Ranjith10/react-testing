import React, { useState } from 'react'
import axios from 'axios'
import Joke from './Joke'


const JokeGenerator = () => {
    const [jokes, setJokes] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const getJoke = async () => {
        setIsLoading(true)
        const {data: {value: {joke}}} = await axios.get('https://api.icndb.com/jokes/random')
        setJokes(joke)
        setIsLoading(false)
    }

    return (
        <div>
            {
                jokes.length === 0 && !isLoading &&
                    <div>
                        You have not loaded any joke yet
                    </div> 
            }
            {                    
                isLoading &&
                    <div>
                        Loading..
                    </div>
            }
            {
                jokes.length > 0 && !isLoading &&
                <div>
                    <Joke joke={jokes}/> 
                </div>                 
            }            
            <button onClick={() => getJoke()}>
                Load a joke
            </button>
        </div>
    )
}

export default JokeGenerator
