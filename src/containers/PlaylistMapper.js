import React from 'react'
import PlaylistItem from '../components/PlaylistItem'
import { connect } from 'react-redux'

const PlaylistMapper = (props) => {
    return (
        <div>
            {props.playlist.playlists.items.length > 0 ? 
            props.playlist.playlists.items.map(playlist => <PlaylistItem key={playlist.id} {...playlist} />):
            null}
        </div>
    )
}

let mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps)(PlaylistMapper)