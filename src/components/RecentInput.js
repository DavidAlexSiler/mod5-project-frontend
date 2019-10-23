import React from 'react'
import { Card, Feed } from 'semantic-ui-react'
import { connect } from 'react-redux'


class RecentInput extends  React.Component{

    

    // componentDidUpdate = (prevProps) => {
    //     if(prevProps !== this.props){
            
    //     }
    // }   

    // WHAT IN THE FUCK YOU FUCK I FUCKING FUCK YOU



    render(){
        console.log(this.props)
        return (
            <Card>
                <Card.Content>
                    <Card.Header>recentInput</Card.Header>
                </Card.Content>
                <Card.Content>
                    <Feed>
                        <Feed.Event>
                            {this.props.recentInput.album ? 
                            <Feed.Label image={this.props.recentInput.album.images[2].url} />:
                            null}
                            <Feed.Content>
                                <Feed.Date content='today' />
                                {this.props.recentInput.album ?
                                    <Feed.Summary>
                                        You enjoyed {this.props.recentInput.name} by {this.props.recentInput.artists[0].name}.
                                    </Feed.Summary> :
                                    null}
                            </Feed.Content>
                        </Feed.Event>
                    </Feed>
                </Card.Content>
            </Card>
        )
    }

    }


let mapStateToProps = (state) => {
    return state.login
}

export default connect(mapStateToProps)(RecentInput)