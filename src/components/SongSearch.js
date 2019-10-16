import React, { Component } from 'react'
const searchAPI = 'https://api.spotify.com/v1/search?q='
export class SongSearch extends Component {

    constructor(){
        super()
        this.state = {
            input: '',
            song: {}
        }
    }

    // componentDidMount(){
    //     this.searchSongs()
    // }

    searchSongs = () => {
        const queryString = this.state.input.replace(' ', "%20")
        let type = '&type=track'
        let limit = '&limit=5'
        fetch(searchAPI + queryString + type + limit, {
            headers: {
                "Accept": 'application/json',
                "Content-Type": 'application/json',
                "Authorization": 'Bearer ' + this.props.user.access_token,
            }
        })
            .then(r => r.json())
            .then(data => console.log(data, 'data', queryString, 'QUER'))
    }

    handleInput = (e) => {
        this.setState({
            input: e.target.value
        })
        this.searchSongs()
    }

    render() {
        console.log(this.state, this.props.user.access_token)
        return (
            <div className="ui fluid category search">
                <div className="ui icon input">
                    <input onChange={(e)=>this.handleInput(e)} className="prompt" type="text" placeholder="Search Spotify..."/>
                        <i className="search icon"></i>
                </div>
                <div className="results"></div>
            </div>
        )
    }
}

export default SongSearch
