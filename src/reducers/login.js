let initialState = {
    isLoggedIn: false,
    userData: {}
}

export default(state = initialState, action) =>{
    switch(action.type){
        case "GET_USER": {
            return {isLoggedIn: true,  userData: action.data}
        }
        default: {
            return state
        }
    }
}