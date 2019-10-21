let initialState = {
    selectedSong: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "SELECT_SONG": {
            return {selectedSong: action.selectedSong}
        }
        case "REMOVE_SONG":{
            return  {selectedSong: action.selectedSong}
        }
        default: {
            return state
        }
    }
}

