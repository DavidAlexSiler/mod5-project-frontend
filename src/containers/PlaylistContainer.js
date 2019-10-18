import React, {Component} from 'react'
import { Button, Modal, Image, Header } from 'semantic-ui-react'
import { connect } from 'react-redux'

class PlaylistContainer extends Component {

    show = (dimmer) => () => this.props.dispatch({ type: "GET_DIM", open: true })
    close = () => this.props.dispatch({ type: "GET_UNDIM", open: false })

    createPlaylist(){
        const user_id = this.props.login.userData.spotify_id
        const {name, description, publicPlaylist, collaborative} = this.props.playlist
        debugger
        fetch(`https://api.spotify.com/v1/users/${user_id}/playlists`, {
            method: 'POST',
            headers: {
                "Authorization": 'Bearer ' + this.props.login.userData.access_token,
                "Content-Type": 'application/json',
            },
            body: JSON.stringify({
                name: name,
                public: publicPlaylist,
                collaborative: collaborative,
                description: description
            }) 
        }) 
        .then(r => r.json())
        // .then(data=> console.log(data))
        //     .then(data => this.props.dispatch({ 
                
        //     type: "MAKE_PLAYLIST",
        //     name: data.name, 
        //     public: data.publicPlaylist, 
        //     collaborative: data.collaborative, 
        //     description: data.description 
        // }))
    }
    
    handleNameInput = (e) => {
        this.props.dispatch({type: "GET_PLAYLIST_NAME", name: e.target.value})
    }
    
    handleDescInput = (e) => {
        this.props.dispatch({type: "GET_PLAYLIST_DESC", description: e.target.value})
    }

    handlePrivates = (e) => {
        e.target.className === "ui positive button active" ? 
        this.props.dispatch({type: "GET_PRIVACY", public: true}):
        this.props.dispatch({type: "GET_PRIVACY", public: false})
    }

    handleCollab = (e) => {
        e.target.className === "ui positive button active" ? 
        this.props.dispatch({type: "GET_COLLAB", collaborative: true}):
        this.props.dispatch({type: "GET_COLLAB", collaborative: false})
    }


    handleSubmit = () => {
        this.createPlaylist()
    }

    render() {
    const { open, dimmer } = this.props.playlist  
    return (
        <div>
            <Button onClick={this.show('blurring')}>Create New Playlist</Button>

            <Modal dimmer={dimmer} open={open} onClose={this.close}>
                <Modal.Header>Create a Playlist</Modal.Header>
                <Modal.Content image>
                    <Image
                        wrapped
                        size='medium'
                        src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQxPzQB_qj6cGSGe8UNJCHOWv1mprv90SLFIpYO24UvdMqwosbQ'
                    />
                    <Modal.Description>
                        <Header>Name Your Playlist</Header>
                        <div className="ui input">
                            <input onChange={(e) => this.handleNameInput(e)} 
                            type="text" 
                            placeholder="Name this Playlist..."/>
                        </div>    
                        <Header>Describe Your Playlist</Header>  
                        <div className="ui input">
                            <input onChange={(e) => this.handleDescInput(e)}
                                type="textarea"
                                placeholder="describe" />
                        </div>
                        <Header>Who can see it?</Header>
                        <div className="ui buttons">
                            <button onClick={(e) => this.handlePrivates(e)} className="ui button">Private</button>
                            <div className="or"></div>
                            <button onClick={(e) => this.handlePrivates(e)} className="ui positive button active">Public</button>
                        </div>
                        <Header>Who can contribute?</Header>
                        <div className="ui buttons">
                            <button onClick={(e) => this.handleCollab(e)} className="ui button">Curate</button>
                            <div className="or"></div>
                            <button onClick={(e) => this.handleCollab(e)} className="ui positive button active">Collaborate</button>
                        </div>
                    </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                    <Button color='grey' onClick={this.close}>
                        Cancel
                    </Button>
                    <Button
                        positive
                        icon='checkmark'
                        labelPosition='right'
                        content="Let's look for Songs"
                        onClick={(e) => this.handleSubmit(e)}
                    />
                </Modal.Actions>
            </Modal>
        </div>
    )
}
}
let mapStateToProps = (state) => {
    return state
}
export default connect(mapStateToProps)(PlaylistContainer)
