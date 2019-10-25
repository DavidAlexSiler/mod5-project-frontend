let initialState = {
    playlists: [],
    friendsPlaylists: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "CREATE_PLAYLIST": {
            return {...state, playlists: action.playlists}
        }
        case "GET_PLAYLISTS": {
            return {...state, playlists: action.playlists}
        }
        case "GET_FRIENDS_PLAYLISTS": {
            return {...state, friendsPlaylists: action.friendsPlaylists}
        }
        default: {
            return state
        }
    }
}