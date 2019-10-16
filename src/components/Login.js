import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import queryString from 'query-string'
import ListeningRoom from './ListeningRoom'


class Login extends Component {

    constructor(){
        super()
        this.state = {
            isLoggedIn: false,
            userData: {}
        }
    }

    componentDidMount = () => {
        this.fetchUser()
    }

    fetchUser = () => {
        let parsed = queryString.parse(window.location.search)    
        fetch('http://localhost:3000/api/v1/users', {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(parsed)
            
        })
        .then(r => r.json())
        .then(data => {
            this.setState({
                userData: data
            })
        })
    }
    
    renderFrontPage = () => {
        return this.state.userData.name ? 
        <ListeningRoom user={this.state.userData}/> :
        <div>
        <img src="https://icdn9.digitaltrends.com/image/digitaltrends/european-audio-teams-b-sharp-turntable-review-4214-1920x1280.jpg" alt="record player" style={{ width: 1000 }} />
        <Button as="a" href="http://localhost:3000/api/v1/login" >
        Log in through Spotify</Button>
        </div>
        
    }

    render() {
        return (
            <div>
                {this.renderFrontPage()} 
            </div>
        )
    }
}

export default Login