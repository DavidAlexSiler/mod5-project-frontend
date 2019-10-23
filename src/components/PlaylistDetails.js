import React from 'react'
import { Card, Image } from 'semantic-ui-react'


export default function PlaylistDetails(props) {
    {console.log(props, 'IN DEETS')}
    return (
        <Card>
            <Image src={props.track.album.images[1].url} wrapped ui={false} />
            <Card.Content>
                <Card.Header>{props.track.name}</Card.Header>
                <Card.Meta>
                    <span className='date'>{props.track.artists[0].name}</span>
                </Card.Meta>
                {/* <Card.Description>
                    Matthew is a musician living in Nashville.
                </Card.Description> */}
            </Card.Content>
            <Card.Content extra>
                <a>
                    
                </a>
            </Card.Content>
        </Card>
    )
}
