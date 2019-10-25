let initialState = {
    isLoggedIn: false,
    userData: {},
    recentInput: {},
    userTopArtist: {}
}

export default(state = initialState, action) =>{
    switch(action.type){
        case "GET_USER": {
            return {...state, isLoggedIn: true,  userData: action.data}
        }
        case "GET_RECENT_INPUT": {
            return {...state, recentInput: action.recentInput}
        }
        case "GET_USER_TOP_ARTIST": {
            return {...state, userTopArtist: action.userTopArtist}
        }
        default: {
            return state
        }
    }
}