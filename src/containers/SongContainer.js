import React from 'react'
import SelectedSong from '../components/SelectedSong'
import { connect } from 'react-redux'


const SongContainer = (props) => {
    return (
        <div>
            {props.selectedSong.map(song => <SelectedSong {...song} />)}
        </div>
    )
}

let mapStateToProps = (state) => {
    return state.songsearch
}

export default connect(mapStateToProps)(SongContainer)
