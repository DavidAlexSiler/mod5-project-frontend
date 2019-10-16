import React from 'react'
import { Card, Feed, Button } from 'semantic-ui-react'


export default function ResultCard(props){

    
    
    return (
        <Card>
            <Card.Content>
                <Card.Header>Search Results</Card.Header>
                <Button >+</Button>
            </Card.Content>
            <Card.Content>
                <Feed>
                    <Feed.Event>
                        <Feed.Label image={props.result.album.images[2].url} />
                        <Feed.Content>
                            <Feed.Date content={props.result.album.artists[0].name} />
                            <Feed.Summary>
                                {props.result.name}
                            </Feed.Summary>
                        </Feed.Content>
                    </Feed.Event>
                </Feed>
            </Card.Content>
        </Card> 
        
    )
}

