let initialState = {
    playlists: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "CREATE_PLAYLIST": {
            return {playlists: action.playlists}
        }
        case "GET_PLAYLISTS": {
            return {playlists: action.playlists}
        }
        default: {
            return state
        }
    }
}