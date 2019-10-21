import React from 'react'
import PlaylistItem from '../components/PlaylistItem'


export default function PlaylistMapper(props) {
    console.log(props)
    return (
        <div>
            {props.initialPlaylists.items ? props.initialPlaylists.items.map(playlist => <PlaylistItem key={playlist.id} {...playlist} />): null}
        </div>
    )
}
