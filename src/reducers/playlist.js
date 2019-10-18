let initialState = {
    playlists: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "GET_PLAYLIST": {
            return {playlists: action.playlists}
        }
        default: {
            return state
        }
    }
}