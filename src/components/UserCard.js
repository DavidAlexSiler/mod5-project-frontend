import React from 'react'
import 'semantic-ui-css/semantic.min.css';
import { connect } from 'react-redux'
import RecentInput from './RecentInput'


class UserCard extends React.Component{

    state = {
        fivePlaylists: []
    }

    componentDidMount = () => {
            this.getUserCurrentlyPlaying()
            this.getAllUsersPlaylists()
            this.getFivePlaylists()
    }

    getUserCurrentlyPlaying = (e) => {
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


    // move to services
    getAllUsersPlaylists = () => {
        fetch('https://api.spotify.com/v1/me/playlists', {
            method: 'GET',
            headers: {
                "Authorization": 'Bearer ' + this.props.login.userData.access_token,
                "Content-Type": 'application/json',
            }
        })
            .then(r => r.json())
            // .then(this.setState({fivePlaylists: this.props.playlist.playlists.items}))
            .then(data => this.props.dispatch({ type: "GET_PLAYLISTS", playlists: data }))
    }

    render(){
        return (
            <div className="ui card">
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
        )
    }
}

let mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps)(UserCard)
