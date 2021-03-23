export const duplicateObj = (obj) => {
    return [...obj]
}

//Sum of 2 positive no's can never be zero
export const neverBeZero = (a, b) => {
    return a+b
}

export const emailPatternGenerator = (name) => {
    return `${name}@gmail.com`
}

export const throwError = () => {
    throw new Error('An error has occured')
}