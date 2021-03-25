import {fetchData, fetchDataError} from './asyncCode'

//Async call that returns callback

// test('Async fetch function', async (done) => {
//     let todoObj = {
//         "userId": 1,
//         "id": 1,
//         "title": "delectus aut autem",
//         "completed": false
//     }    
//     function callback(data) {
//         try {
//             expect(data).resolves.toEqual(todoObj)
//             done()
//         } catch (error) {
//             done(error)
//         }
//     }    
//     fetchData(callback)
// }, 20000)


//Async call that return Promise

test('Async fetch function', () => {
    let todoObj = {
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
    }    
    return fetchData().then(data => {
        expect(data).toEqual(todoObj)
    })
})

//Test Error in API call
//expect.assertions() is necessary while testing async code for error

test('Async Fetch Failure', () => {
    expect.assertions()
    return fetchDataError().catch(e => expect('Fetch Error').toMatch('Fetch Error'))
})

//Use of resolves / rejects matchers

test('Async fetch function', () => {
    let todoObj = {
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
    }    
    expect(fetchData()).resolves.toEqual(todoObj)
})

//Use of async/await matchers

test('Async fetch function', async () => {
    let todoObj = {
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
    }    
    const data = await fetchData()
    expect(data).toEqual(todoObj)
})

//Combined use of async/await and resolved/rejects

test('Async fetch function', async () => {
    let todoObj = {
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
    }    
    await expect(fetchData()).resolves.toEqual(todoObj)
})
