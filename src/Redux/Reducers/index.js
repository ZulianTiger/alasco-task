const initialState = {
    input: 0,
    output: 0,
    from: '',
    to: '',
    rate: 0,
}

export default (state = initialState, action) => {
    if (action.type === 'CALCULATE_OUTPUT') {
        let tempResult = 0;
        if (action.input && state.from && state.to)
            tempResult = action.input * state.rate;
        else
            tempResult = 0;
        return Object.assign({}, state, {
            output: tempResult,
            input: action.input,
        });
    }
    else if (action.type === 'SET_TO') {
        return Object.assign({}, state, {
            to: action.to,
        });
    }
    else if (action.type === 'SET_FROM') {
        return Object.assign({}, state, {
            from: action.from,
        });
    }
    else if (action.type === 'SET_RATE') {
        let tempResult;
        if(state.input)
            tempResult = action.rate * state.input;
        else tempResult = state.output;
        return Object.assign({}, state, {
            rate: action.rate,
            output: tempResult,
        });
    }
    else return state;
}