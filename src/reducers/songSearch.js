let initialState = {
    results: [],
    isLoading: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "SEARCH_SONGS": {
            return {...state, results: action.results}
        }
        case "RESET_STATE": {
            return {state: action}
        }
        case "IS_LOADING": {
            return {...state, isLoading: action.isLoading}
        }
        case "SHOW_RESULTS": {
            return {...state, isLoading: action.isLoading, results: action.results }
        }
        default: {
            return state
        }
    }
}

