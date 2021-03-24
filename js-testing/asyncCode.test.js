import {fetchData} from './asyncCode'

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