import React from 'react'
import { Icon, Image, Item } from 'semantic-ui-react'


export default function PlaylistItem(props) {
    // console.log(props)
    const {name, images, tracks, collaborative} = props
    return (
        <div>
            <Item>
                {images.length > 0 ? <Item.Image size='small' src={images[0].url} />: 
                    <Item.Image size='small' 
                    src={'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/single-audio-cassette-tape-with-loose-tape-spilling-royalty-free-image-1570815830.jpg?resize=480:*'} />
                }
                <Item.Content>
                    <Item.Header as='a'>{name}</Item.Header>
                    <Item.Description>total tracks: {tracks.total}</Item.Description>
                    {collaborative ? <Item.Extra>
                        <Icon color='green' name='check' /> collaborative
                    </Item.Extra> : <Item.Extra>
                            <Icon color='red' name='x' /> collaborative
                    </Item.Extra>}
                    {props.public ? <Item.Extra>
                        <Icon color='green' name='check' /> public
                    </Item.Extra> : <Item.Extra>
                            <Icon color='red' name='x' /> public
                    </Item.Extra>}
                
                </Item.Content>
            </Item>
        </div>
    )
}
