import React from 'react'
import FriendsPlaylistItem from '../components/FriendsPlaylistItem'
import { connect } from 'react-redux'

const FriendsPlaylistMapper = (props) => {
    return (
        <div className='friends playlist grid'>
            {props.playlist.friendsPlaylists.items.length > 0 ?
                props.playlist.friendsPlaylists.items.map(playlist => <FriendsPlaylistItem key={playlist.id} {...playlist} />) :
                null}
        </div>
    )
}

let mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps)(FriendsPlaylistMapper)