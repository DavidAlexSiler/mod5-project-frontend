import React from 'react'
import SelectedSong from '../components/SelectedSong'
import { connect } from 'react-redux'


const SongContainer = (props) => {
    console.log(props)
    debugger
    return (
        <div>
            {props.selectedSong.map(song => <SelectedSong {...song} />)}
            <h1>hg</h1>
        </div>
    )
}

let mapStateToProps = (state) => {
    return state.songsearch
}

export default connect(mapStateToProps)(SongContainer)
