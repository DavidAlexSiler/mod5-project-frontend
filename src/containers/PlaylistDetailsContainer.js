import React from 'react'
import PlaylistDetails from '../components/PlaylistDetails.js'

class PlaylistDetailsContainer extends React.Component {

    render(){
        return (
            <div>
                {this.props.playlistDetails.items.map(p => <PlaylistDetails {...p} />)}
            </div>
        )
    }
}



export default PlaylistDetailsContainer