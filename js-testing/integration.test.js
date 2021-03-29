import { getSum, getTotal } from './integration-test'


//unit test - getSum is smallest unit of code that can run independently
test('sum function - unit test', () => {
    expect(getSum(1,2)).toBe(3)
    expect(getSum(1,-2)).toBe(-1)
})


//integration test - getTotal function depends on getSum function 
test('getTotal funtion - integration test', () => {
    expect(getTotal(5, 500)).toBe('Rs. 505')
})

//unit test for getTotal would involve mocking getSum function 
// so that getTotal can be run independently