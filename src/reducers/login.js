let initialState = {
    isLoggedIn: false,
    userData: {},
    recentInput: {}
}

export default(state = initialState, action) =>{
    switch(action.type){
        case "GET_USER": {
            return {...state, isLoggedIn: true,  userData: action.data}
        }
        case "GET_RECENT_INPUT": {
            return {...state, recentInput: action.recentInput}
        }
        default: {
            return state
        }
    }
}