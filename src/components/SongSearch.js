import React, { Component } from 'react'
import 'semantic-ui-css/semantic.min.css';
import { connect } from 'react-redux'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'
import SongContainer from '../containers/SongContainer'

const searchAPI = 'https://api.spotify.com/v1/search?q='

class SongSearch extends Component {

    state = {
        searchResults: [],
        searchInput: '',
        isLoading: false,
        open: false
    }

    //SEARCHING

    dataMap = (data) => {
        console.log(data)
            let actualData = data.map((r, key) => { 
                return {
                    title: r.name,
                    description: r.artists[0].name,
                    image: r.album.images[2].url,
                    price: '+',
                    uri: r.uri,
                    id: r.id,
                    key: r.href
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
        if(this.state.searchInput === ''){
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

    handleSearchChange = (e) => {
        this.setState({searchInput: e.target.value, isLoading: true}) 
        setTimeout(() => {
            // debugger
            if (this.state.searchInput.length <= 1) this.setState({searchResults: []})

            // this.setState({
            //     searchResults: [],
            //     searchInput: '',
            //     isLoading: false })
            const re = new RegExp(_.escapeRegExp(this.state.searchInput), 'i')
            const isMatch = (result) => re.test(result.title)
            this.setState({ 
                isLoading: false, 
                searchResults: _.filter(this.state.searchResults, isMatch)})
        }, 300)
    }

    // SELECTING

    handleResultSelect = (e, { result }, ) => {
        this.props.dispatch({ type: "SELECT_SONG", selectedSong: [...this.props.songsearch.selectedSong, result] })
    }

    render() {
        const { searchResults, searchInput } = this.state
        return (
            <div className='song search container'>
                <h1>Search For Songs</h1>
                <Search
                    className='song search'
                    loading={this.state.isLoading}
                    onResultSelect={this.handleResultSelect}
                    onSearchChange={_.debounce((e) => this.handleSearchChange(e), 500, {
                        leading: true,
                    })}
                    results={searchResults}
                    input={searchInput}
                    props={this.props}
                />
                {this.props.songsearch.selectedSong.length >= 1 ? 
                    <SongContainer />:
                    null
                }
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps)(SongSearch)

