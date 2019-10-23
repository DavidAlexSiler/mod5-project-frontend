import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import ListeningRoom from './ListeningRoom';
import { connect } from 'react-redux';
import { getUser } from '../services/backend';
class Login extends Component {

    componentDidMount = () => {
        getUser().then(data => { this.props.dispatch({ type: "GET_USER", data: data})})
    }
    
    renderFrontPage = () => {
        return this.props.userData.name ? 
        <ListeningRoom user={this.userData}/> :
        <div>
        <img src="https://icdn9.digitaltrends.com/image/digitaltrends/european-audio-teams-b-sharp-turntable-review-4214-1920x1280.jpg" alt="record player" style={{ width: 1000 }} />
        <Button className='button' as="a" href="http://localhost:3000/api/v1/login" >
        Log in through Spotify</Button>
        </div>
    } 
    render() {
        return (
            <div className='front-page' >
                {this.renderFrontPage()} 
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return state.login
}

export default connect(mapStateToProps)(Login)