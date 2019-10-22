import React from 'react'
import { Card, Feed } from 'semantic-ui-react'
import { connect } from 'react-redux'


class RecentInput extends  React.Component{

    

    // componentDidUpdate = (prevProps) => {
    //     if(prevProps !== this.props){
    //         renderCard(this.props)
    //     }
    // }   

    // WHAT IN THE FUCK YOU FUCK I FUCKING FUCK YOU



    render(){
        return (

            <Card>
                <Card.Content>
                    <Card.Header>recentInput</Card.Header>
                </Card.Content>
                <Card.Content>
                    <Feed>
                        <Feed.Event>
                            {/* {this.props} */}
                            {/* {this.props.recentInput.album.images[2].url} */}
                            <Feed.Content>
                                <Feed.Date content='boop' />
                                <Feed.Summary>
                                    what the fuck
                                </Feed.Summary>
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