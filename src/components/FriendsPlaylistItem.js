import React from 'react'
import { Icon, Item } from 'semantic-ui-react'
import { connect } from 'react-redux'
import FriendsPlaylistDetails from './FriendsPlaylistDetails'

class FriendsPlaylistItem extends React.Component {

    state = {
        playlistDetails: [],
        clicked: false
    }

    handleClickPlaylist = (e) => {
        this.setState({ clicked: !this.state.clicked })
        let playlist_id = this.props.id
        fetch(`https://api.spotify.com/v1/playlists/${playlist_id}/tracks`, {
            method: 'GET',
            headers: {
                "Accept": 'application/json',
                "Content-Type": 'application/json',
                "Authorization": 'Bearer ' + this.props.login.userData.access_token,
            }
        })
            .then(r => r.json())
            .then(data => this.setState({
                playlistDetails: data
            }))
    }

    render() {
        const { name, images, tracks, collaborative } = this.props
        return (
            <div>
                <Item className='friends playlist item'>
                    {images.length > 0 ? <Item.Image onClick={(e) => this.handleClickPlaylist(e)} size='large' src={images[0].url} /> :
                        <Item.Image onClick={(e) => this.handleClickPlaylist(e)} size='large'
                            src={'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/single-audio-cassette-tape-with-loose-tape-spilling-royalty-free-image-1570815830.jpg?resize=480:*'} />
                    }
                    <Item.Content className='friends playlist item content'>
                        <Item.Header as='a'>{name}</Item.Header>
                        <Item.Description>total tracks: {tracks.total}</Item.Description>
                        {collaborative ? <Item.Extra>
                            <Icon color='green' name='check' /> collaborative
                        </Item.Extra> : <Item.Extra>
                                <Icon color='red' name='x' /> collaborative
                        </Item.Extra>}
                        {this.props.public ? <Item.Extra>
                            <Icon color='green' name='check' /> public
                        </Item.Extra> : <Item.Extra>
                                <Icon color='red' name='x' /> public
                        </Item.Extra>}
                    </Item.Content>
                </Item>
                {this.state.clicked && this.state.playlistDetails.items ? <FriendsPlaylistDetails details={this.state.playlistDetails} name={name} /> :
                    null}
            </div>
        )

    }
}

let mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps)(FriendsPlaylistItem)