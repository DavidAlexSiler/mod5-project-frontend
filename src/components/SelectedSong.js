import React from 'react'
import { connect } from 'react-redux'
import { Button, Card, Image } from 'semantic-ui-react'

const SelectedSong = (props) => {
    console.log(props)
    const {description, id, image,  title,  uri} = props
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
                        add?
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <div className='ui two buttons'>
                        <Button basic color='green'>
                            Approve
                        </Button>
                        <Button basic color='red'>
                            Decline
                        </Button>
                    </div>
                </Card.Content>
            </Card>
            
        </Card.Group>
    )
}

let mapPropsToState = (state) => {
    return state.songsearch
}

export default connect(mapPropsToState)(SelectedSong)
