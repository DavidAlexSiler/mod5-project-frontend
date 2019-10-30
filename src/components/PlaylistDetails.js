import React from 'react'
import { Button, Image, Modal, Card } from 'semantic-ui-react'


class PlaylistDetails extends React.Component{
    state = { open: true }

    show = (dimmer) => () => this.setState({ dimmer, open: true })
    close = () => this.setState({ open: false })

    render() {
        const { open, dimmer } = this.state
        return (
                <Modal dimmer={dimmer} open={open} onClose={this.close} className='playlist modal'>
                    <Modal.Header>{this.props.name}</Modal.Header>
                    <Modal.Content className='playlist detail container' image>
                        {this.props.details.items.map(song => <Card className='playlist detail card'>
                            < Image src={song.track.album.images[1].url} wrapped ui = { false} />
                            <Card.Content>
                                <Card.Header>{song.track.name}</Card.Header>
                                <Card.Meta>
                                    <span className='date'>{song.track.artists[0].name}</span>
                                </Card.Meta>
                            </Card.Content>
                        </Card>)}
                    </Modal.Content>
                    <Modal.Actions>
                        <Button color='black' onClick={this.close}>
                            Close
                        </Button>
                    </Modal.Actions>
                </Modal>
        )
    }
}

export default PlaylistDetails