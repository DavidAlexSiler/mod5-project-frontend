import React from 'react'
import PlaylistItem from '../components/PlaylistItem'


export default function PlaylistMapper(props) {
    console.log(props, 'inmap')
    return (
        <div>
            {props.initialPlaylists.length > 0 ? props.initialPlaylists.map(playlist => <PlaylistItem key={playlist.id} {...playlist} />): null}
        </div>
    )
}
