import React from 'react'
import 'semantic-ui-css/semantic.min.css';
import { connect } from 'react-redux'
import RecentInput from './RecentInput'
import TopArtistCard from './TopArtistCard';


class UserCard extends React.Component{

    state = {
        topArtists: [],
        hovered: false,
        hoveredArtist: ''
    }

    componentDidUpdate = (prevProps) => {
            if(prevProps.login.userData !== this.props.login.userData){
                this.getUserRecentlyPlayed()
                this.getAllUsersPlaylists()
                this.getUserTopArtist()
            }
    }


    getUserRecentlyPlayed = (e) => {
        fetch('https://api.spotify.com/v1/me/player/recently-played/', {
            method: 'GET',
            headers: {
                "Authorization": 'Bearer ' + this.props.login.userData.access_token,
                "Content-Type": 'application/json'
            }
        })
        .then(r => r.json())
        .then(data => this.props.dispatch({type: "GET_RECENT_INPUT", recentInput: data.items[0].track}))
    }

    getUserTopArtist = () => {
        fetch('https://api.spotify.com/v1/me/top/artists', {
            method: 'GET',
            headers: {
                "Authorization": 'Bearer ' + this.props.login.userData.access_token,
                "Content-Type": 'application/json',
            }
        })
            .then(r => r.json())
            .then(data => this.props.dispatch({
                type: "GET_USER_TOP_ARTIST",
                userTopArtist: data
            }))
    }


    getAllUsersPlaylists = () => {
        fetch('https://api.spotify.com/v1/me/playlists', {
            method: 'GET',
            headers: {
                "Authorization": 'Bearer ' + this.props.login.userData.access_token,
                "Content-Type": 'application/json',
            }
        })
            .then(r => r.json())
            .then(data => this.props.dispatch({ type: "GET_PLAYLISTS", playlists: data }))
    }


    render(){
        return (
            <div className='user cards container'>
                <div className="ui card" id='profile'>
                    <div className="image">
                        {this.props.login.userData.image === null ? 
                        <img src={'https://thumbs.dreamstime.com/b/no-user-profile-picture-hand-drawn-illustration-53840792.jpg'} alt={'your face here'} />  :
                            <img src={this.props.login.userData.image}/>}
                    </div>
                    <div className="content">
                        <h2>{this.props.login.userData.name}</h2>
                            <div className="meta">
                            <span className="location">{this.props.login.userData.country}</span>
                            </div>
                            <div className="description">
                            {this.props.login.userData.name} is a swamp buggy badass!
                            </div>
                    </div>
                        <div className="extra content">
                        <RecentInput props={this.props.login.recentInput}/>
                        </div>
                </div>
                <h1 className='top artist header'>My Top Artists</h1>
                {this.props.login.userTopArtist.items ? this.props.login.userTopArtist.items.map(artist => 
                <TopArtistCard artist={artist}/>): 
                null}
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps)(UserCard)
