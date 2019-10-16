let initialState = {
    input: '',
    userData: {},
    results: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "GET_INPUT": {
            return {...state, input: action.input}
        }
        case "SEARCH_SONGS": {
            return {...state, results: action.results}
        }
        default: {
            return state
        }
    }
}