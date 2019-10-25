import React from 'react'
import { connect } from 'react-redux'
import { Button, Card, Image } from 'semantic-ui-react'

class SelectedSong extends React.Component {

    state = {
        value: ''
    }

    componentDidMount = () => {
        this.getAllUsersPlaylists()
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

    handlePlaylistSelect = (e) => {
        if(e.target.value === 'default'){
            return null
        }else if(e.target.value === 'new'){
            console.log('new')
        }else{
            this.setState({
                value:  e.target.value
            })
        }

    }

    handleAddToPlaylist = (e)  => {
        fetch(`https://api.spotify.com/v1/playlists/${this.state.value}/tracks`, {
            method: 'POST',
            headers: {
                "Authorization": 'Bearer ' + this.props.login.userData.access_token,
                "Content-Type": 'application/json',
            }, 
            body: JSON.stringify({ uris: [`${this.props.uri}`] })
        })
        .then(r => r.json())
        .then(window.alert(`added ${this.props.title} to playlist!`))
    }

    handleCancel = (e) => {
        let updatedSongArray = this.props.songsearch.selectedSong.filter(song => song.id !== e.target.id)
        this.props.dispatch({type: "REMOVE_SONG", selectedSong: updatedSongArray})
    }

    render(){
        const {description, id, image, title, uri} = this.props
        return (
            <Card.Group>
                <Card>
                    <Card.Content>
                        <Image
                            floated='right'
                            size='mini'
                            src={image}
                        />
                        <Card.Header>{title}</Card.Header>
                        <Card.Meta>{description}</Card.Meta>
                        <Card.Description>
                            Add to playlist.
                        </Card.Description>
                        <select value={this.state.value} onChange={this.handlePlaylistSelect}>
                            <option value="default">Choose a Playlist</option>
                            {/* <option value="new">Create a new Playlist</option> */}
                            {this.props.playlist.playlists.items.map(p => 
                                <option value={p.id} id={p.id} uri={p.uri}>
                                    {p.name.slice(0, 20).length > 19 ? p.name.slice(0, 20).concat('...') : 
                                    p.name.slice(0, 20)}</option>)}
                        </select>
                    </Card.Content>
                    <Card.Content extra>
                        <div className='ui two buttons'>
                            <Button id={id} uri={uri}
                            onClick={(e, id) => this.handleAddToPlaylist(e, id)} 
                            basic color='green'>
                                Add
                            </Button>
                            <Button id={id} uri={uri} 
                            onClick={(e) => this.handleCancel(e)} 
                            basic color='red'>
                                Clear
                            </Button>
                        </div>
                    </Card.Content>
                </Card>
                
            </Card.Group>
        )
    }
    }

let mapPropsToState = (state) => {
    return state
}

export default connect(mapPropsToState)(SelectedSong)
