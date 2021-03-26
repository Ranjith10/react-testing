import SoundPlayer from "./sound-player"
import SoundPlayerConsumer from './sound-consumer'

import fetch from 'node-fetch'
import {fetchData} from './asyncCode'
const {Response} = jest.requireActual('node-fetch');

// Return values from Mock - defaults to undefined
const sampleMock = jest.fn()
// sampleMock.mockReturnValueOnce('sample value').mockReturnValueOnce('another sample').mockReturnValue('return value')
// console.log(sampleMock(), sampleMock(), sampleMock(), sampleMock())

test('Return value of mock function is undefined', () => {
    expect(sampleMock()).toEqual(undefined)
})

//Automatic mock - module mocking
jest.mock('./sound-player')

test('Check if the consumer constructor is called', () => {
    const soundPlayerConsumer = new SoundPlayerConsumer
    expect(SoundPlayer).toHaveBeenCalledTimes(1)
})

//mock async fetch api's

jest.mock('node-fetch')

test('fetchdata calls fetch with the right args and returns the todo obj', async () => {
    let todoObj = {
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
    }   
    fetch.mockReturnValue(Promise.resolve({json: () => todoObj}))
    const data = await fetchData()
  
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/todos/1');
    expect(data).toBe(todoObj);
});