import React, { Component } from 'react'
import { Button, Modal, Image, Header } from 'semantic-ui-react'
import { connect } from 'react-redux'

class NewPlaylistModal extends Component {

    state = {
        // modal
        open: true,
        // playlist
        name: '',
        description: '',
        publicPlaylist: false,
        collaborative: false,
        id: '',
        initialPlaylists: [],
        clicked: false
    }

    show = (dimmer) => () => this.setState({ open: true })
    close = () => {
        this.setState({ open: false })
    }

    createPlaylist() {
        const user_id = this.props.login.userData.spotify_id
        const { name, description, publicPlaylist, collaborative } = this.state
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
            .then(this.close)
            .then(window.alert("Playlist created, go search for songs (redirect to come)"))
    }


    handleNameInput = (e) => {
        this.setState({ name: e.target.value })
    }

    handleDescInput = (e) => {
        this.setState({ description: e.target.value })
    }

    handlePrivates = (e) => {
        e.target.className === "ui positive button active" ?
            this.setState({ public: true }) :
            this.setState({ public: false })
    }

    handleCollab = (e) => {
        e.target.className === "ui positive button active" ?
            this.setState({ collaborative: true }) :
            this.setState({ collaborative: false })
    }

    handleClick = (e) => {
        this.setState({
            clicked: !this.state.clicked
        })
    }

    handleSubmit = () => {
        debugger
        this.createPlaylist()
    }

    render() {
        const { open, dimmer } = this.state 
        return (
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
                                placeholder="Name this Playlist..." />
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
                        onClick={(e) => this.handleSubmit(e)}>
                    </Button>
                </Modal.Actions>
            </Modal>
        )
    }
}

let mapStateToProps = (state) => {
    return state
}
export default connect(mapStateToProps)(NewPlaylistModal)

