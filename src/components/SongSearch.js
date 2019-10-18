import React, { Component } from 'react'
import 'semantic-ui-css/semantic.min.css';
// import SearchResults from '../containers/SearchResults'
import { connect } from 'react-redux'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

const searchAPI = 'https://api.spotify.com/v1/search?q='

class SongSearch extends Component {

    state = {
        formResult: [],
        searchResults: [],
        searchInput: ''
    }

    dataMap = (data) => {
            let actualData = data.map((r, key) => { 
                key={key}
                return {
                    title: r.name,
                    description: r.artists[0].name,
                    image: r.album.images[2].url,
                    id: r.id,
                }
            }) 
        this.setState({ searchResults: actualData })
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.searchInput !== this.state.searchInput){
            this.searchSongs()   
        }
    }
    
    searchSongs = () => {
        if(this.state.searchInput < 1){
            return null
        }
        let queryString = this.state.searchInput.replace(' ', "%20")
        let type = '&type=track'
        let limit = '&limit=10'
        fetch(searchAPI + queryString + type + limit, {
            headers: {
                "Accept": 'application/json',
                "Content-Type": 'application/json',
                "Authorization": 'Bearer ' + this.props.login.userData.access_token,
            }
        })
            .then(r => r.json())
            .then(data => this.dataMap(data.tracks.items) )
    }

    handleResultSelect = (e) => {console.log(e.target)}

    handleSearchChange = (e) => {
        this.props.dispatch({ type: "IS_LOADING", isLoading: true})
        this.setState({searchInput: e.target.value})
        
        setTimeout(() => {
            if (this.state.searchInput.length < 1) return this.props.dispatch({ type: "RESET_STATE", state: []})
            this.props.dispatch({ 
                type: "SHOW_RESULTS", 
                isLoading: false, 
                results: this.state.searchResults})
        }, 300)
    }

    render() {
        return (
            <Search
                onResultSelect={this.handleResultSelect}
                onSearchChange={_.debounce((e) => this.handleSearchChange(e), 500, {
                    leading: true,
                })}
                results={this.state.searchResults}
                input={this.state.searchInput}
                {...this.props}
            />
        )
    }
}

let mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps)(SongSearch)

