import React from 'react'
import 'semantic-ui-css/semantic.min.css';
import { connect } from 'react-redux'
import RecentInput from './RecentInput'


class UserCard extends React.Component{

    //HELLLP 
    //THIS GETS MY CURRENT SONG , HOW DO I DISPLAY IN MY CARD
    componentDidMount = () => {
            this.getUserCurrentlyPlaying()
    }

    getUserCurrentlyPlaying = (e) => {
        fetch('https://api.spotify.com/v1/me/player/recently-played/', {
            method: 'GET',
            headers: {
                "Authorization": 'Bearer ' + this.props.userData.access_token,
                "Content-Type": 'application/json'
            }
        })
        .then(r => r.json())
        .then(data => this.props.dispatch({type: "GET_RECENT_INPUT", recentInput: data.items[0].track}))
    }

    render(){
        console.log('rendered')
        return (
            <div className="ui card">
                <div className="image">
                    {this.props.userData.image === null ? 
                    <img src={'https://thumbs.dreamstime.com/b/no-user-profile-picture-hand-drawn-illustration-53840792.jpg'} alt={'your face here'} />  :
                        <img src={this.props.userData.image}/>}
                </div>
                    <div className="content">
                        <h2>{this.props.userData.name}</h2>
                        <div className="meta">
                            <span className="location">{this.props.userData.country}</span>
                        </div>
                        <div className="description">
                            {this.props.userData.name} is a swamp buggy badass!
                        </div>
                    </div>
                    <div className="extra content">
                        <p>
                            <RecentInput props={this.props.recentInput}/>
                        </p>
                    </div>
                </div>
        )
    }
}

let mapStateToProps = (state) => {
    return state.login
}

export default connect(mapStateToProps)(UserCard)
