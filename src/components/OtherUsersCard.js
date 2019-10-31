import React from 'react'
import { Card, Image, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import FriendsPlaylistMapper from '../containers/FriendsPlaylistMapper'
import { appUrl } from '../services/backend'
class OtherUsersCard extends React.Component {

    state = {
        show: this.props.show,
        showFriends: false
    }

    
    handleClick = (e, id) => {
        this.makeFriends(id)
    }
    makeFriends = (e, id) => {
        fetch(`${appUrl}follows`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                user_id: this.props.login.userData.id,
                followee_id: id
            })
        })
        .then(r => r.json())
        .then(window.alert('believe me, it worked.'))
        // .then(data => console.log(data))
    }

    getFriends = () => {
        fetch(`${appUrl}follows`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        })
        .then(r => r.json())        
    }

    componentDidMount = (e, id) => {
        
        fetch(`https://api.spotify.com/v1/users/${this.props.selected.spotify_id}/playlists`, {
            method: 'GET',
            headers: {
                "Accept": 'application/json',
                "Content-Type": 'application/json',
                "Authorization": 'Bearer ' + this.props.login.userData.access_token,
            }
        })
        .then(r => r.json())
        .then(data => this.props.dispatch({ type: "GET_FRIENDS_PLAYLISTS", friendsPlaylists: data }))
    }

    handleCancel = () => {
        this.setState({
            show: !this.state.show,
            showFriends: !this.state.showFriends
        })
    }

    
    render(){
        return (
            <div className='other users card'>
                {this.state.show ===true ? 
                <Card >
                    <Card.Content>
                        {this.props.selected.image === null ? <Image
                            floated='right'
                            size='large'
                            src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
                        /> : <Image
                                floated='right'
                                size='large'
                                src={this.props.selected.image}
                            />}
                        <Card.Header>{this.props.selected.title}</Card.Header>
                        <Card.Meta>Spotify User</Card.Meta>
                        <Card.Description>
                            Do you want to add {this.props.selected.title} to your friends?
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <div className='ui two buttons'>
                            <Button onClick={(e) => this.makeFriends(e, this.props.selected.id)} basic color='green'>
                                Yes
                            </Button>
                                <Button name='cancel' onClick={(e) => this.handleCancel(e, this.props.selected.spotify_id)} basic color='blue'>
                                {this.props.selected.title}'s music.
                            </Button>
                        </div>
                    </Card.Content>
                </Card>:
                null
                }
                {this.state.showFriends ? <FriendsPlaylistMapper className='friends playlist mapper' />: null}
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps)(OtherUsersCard)