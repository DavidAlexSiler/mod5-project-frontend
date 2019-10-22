let initialState = {
    allUsers: [],
    myFriends: [],
    notFriends: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "GET_ALL_USERS": {
            return { ...state, allUsers: action.allUsers }
        }
        default: {
            return state
        }
    }
}