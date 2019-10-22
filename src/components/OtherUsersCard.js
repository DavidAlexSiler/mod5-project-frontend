import React from 'react'
import { Card, Image, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'

class OtherUsersCard extends React.Component {

    
    handleClick = (e, id) => {
        this.makeFriends(id)
    }
    makeFriends = (id) => {
        fetch('http://localhost:3000/api/v1/follows', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                id: id,
                user_id: this.props.login.userData.id,
                followee_id: id
            })
        })
        .then(r => console.log(r))
        // .then(data => console.log(data))
    }

    getFriends = () => {
        fetch('http://localhost:3000/api/v1/follows', {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        })
        .then(r => console.log(r))
    }

    
    render(){
        return (
            <div>
                <Card onClick={(e) => this.handleClick(e, this.props.spotify_id, this.props.id)}>
                    <Card.Content>
                        {this.props.image === null ? <Image
                            floated='right'
                            size='mini'
                            src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
                        /> : <Image
                                floated='right'
                                size='mini'
                                src={this.props.image}
                            />}
                        <Card.Header>{this.props.name}</Card.Header>
                        <Card.Meta>Spotify User</Card.Meta>
                        <Card.Description>
                            Do you want to add {this.props.name} to your friends?
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <div className='ui two buttons'>
                            <Button onClick={(e) => this.handleClick(e, this.props.spotify_id, this.props.id)} basic color='green'>
                                Yes
                            </Button>
                            <Button onClick={(e) => this.handleClick(e, this.props.spotify_id, this.props.id)} basic color='red'>
                                No
                            </Button>
                        </div>
                    </Card.Content>
                </Card>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps)(OtherUsersCard)