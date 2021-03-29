export const getSum = (a, b) => {
    return a+b
}

export const getTotal = (shipping, subTotal) => {
    return `Rs. ${getSum(shipping, subTotal)}`
}