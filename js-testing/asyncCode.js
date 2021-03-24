const fetch = require('node-fetch')

//Async code

export const fetchData = async () => {
    const result = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const data = await result.json()
    return data
}