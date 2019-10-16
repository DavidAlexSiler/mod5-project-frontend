import React from 'react'
import ResultCard from '../components/ResultCard'
import { connect } from 'react-redux'

const SearchResults = (props) => {
    return (
        <div>
            {props.input.length > 1 ? props.results.tracks.items.map((result, i) => <ResultCard result={result} key={i} />) : null}
        </div>
    )
}

let mapStateToProps = (state) => {
    return state.songSearch
}

export default connect(mapStateToProps)(SearchResults)