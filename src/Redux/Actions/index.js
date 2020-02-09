export const calculateOutput = (input) => {
    return{
        type: 'CALCULATE_OUTPUT',
        input: parseInt(input),
    }
}
export const setTo = (to) => {
    return {
        type: 'SET_TO',
        to: to,
    }
}
export const setFrom = (from) => {
    return {
        type: 'SET_FROM',
        from: from,
    }
}
export const setRate = (rate) => {
    return {
        type: 'SET_RATE',
        rate: rate,
    }
}