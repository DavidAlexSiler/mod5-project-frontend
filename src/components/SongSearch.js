import React, { Component } from 'react'
import 'semantic-ui-css/semantic.min.css';
import SearchResults from '../containers/SearchResults'
import { connect } from 'react-redux'

const searchAPI = 'https://api.spotify.com/v1/search?q='

class SongSearch extends Component {

    componentDidUpdate(prevProps){
        console.log(prevProps, 'prevprops')
        if(prevProps.songSearch.input !== this.props.songSearch.input){
            this.searchSongs()   
        }
    }
    
    searchSongs = () => {
        let queryString = this.props.songSearch.input.replace(' ', "%20")
        let type = '&type=track'
        let limit = '&limit=5'
        fetch(searchAPI + queryString + type + limit, {
            headers: {
                "Accept": 'application/json',
                "Content-Type": 'application/json',
                "Authorization": 'Bearer ' + this.props.login.userData.access_token,
            }
        })
            .then(r => r.json())
            .then(data => {this.props.dispatch({type: "SEARCH_SONGS", results: data})})
    }

    handleInput = (e) => {
        this.props.dispatch({type: "GET_INPUT", input: e.target.value})
    }

    render() {
        return (
            <div>
                <div className="ui fluid category search">
                    <div className="ui icon input">
                        <input onChange={(e)=>this.handleInput(e)} className="prompt" type="text" placeholder="Search Spotify..."/>
                            <i className="search icon"></i>
                    </div>
                    <div className="results"></div>
                </div>
                <SearchResults />
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps)(SongSearch)
