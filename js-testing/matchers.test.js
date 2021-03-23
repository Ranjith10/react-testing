import {duplicateObj, neverBeZero, emailPatternGenerator, throwError} from './matchers'

// Object
// use toEqual(recursive checks for every field) matcher and not toBe(Object.is equality)
test('Duplicate objects are equal', () => {
    let obj = [1,2]    
    expect(duplicateObj(obj)).toEqual(obj)
    expect(duplicateObj(obj)).not.toBe(obj)
})

//not matcher
test('Sum of two positive numbers can never be zero', () => {
    expect(neverBeZero(1,2)).not.toBe(0)
})

//truthiness 
test('test for truthiness of null', () => {
    let n = null;
    expect(n).toBeNull()
    expect(n).not.toBeTruthy()
    expect(n).toBeDefined()
    expect(n).not.toBeUndefined()
    expect(n).toBeFalsy()
})

//Numbers 
test('two plus two', () => {
    let sum = 2+2
    expect(sum).toBeGreaterThan(0)
    expect(sum).toBeLessThan(5)
    expect(sum).toBeLessThanOrEqual(4)

    //toBe and //toEqual are equivalent for numbers
    expect(sum).toBe(4)
    expect(sum).toEqual(4)
})

//Strings 
test('Email id has @gmail.com pattern', ()=> {
    expect(emailPatternGenerator('ranjith')).toMatch(/@gmail.com/)
    expect(emailPatternGenerator('ranjith')).not.toMatch(/@email.com/)
})

//Iterables
test('the array contains "react"', () => {
    let libraries = ['react', 'angular', 'vue']
    expect(libraries).toContain('react')
})

//Exception
test('Test for exception', () => {
    expect(() => throwError()).toThrow()
    expect(() => throwError()).toThrow(Error)
    expect(() => throwError()).toThrow("An Error has occured")
})