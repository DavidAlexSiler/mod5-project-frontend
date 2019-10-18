let initialState = {
    // modal
    open: false,
    // playlist
    name: '',
    description: '',
    publicPlaylist: false,
    collaborative: false,
    
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "GET_DIM": {
            return {...state, open: action.open}
        }
        case "GET_UNDIM": {
            return {...state, open: action.open}
        }
        case "GET_PLAYLIST_NAME": {
            return {...state, name: action.name}
        }
        case "GET_PLAYLIST_DESC": {
            return {...state, description: action.name}
        }
        case "GET_PRIVACY": {
            return {...state, description: action.public}
        }
        case "GET_COLLAB": {
            return {...state, description: action.collaborative}
        }
        case "MAKE_PLAYLIST": {
            return { ...state, name: action.name, 
                description: action.description, 
                publicPlaylist: action.publicPlaylist, 
                collaborative: action.collaborative}
        }
        default: {
            return state
        }
    }
}