import React from 'react'
import PlaylistDetails from '../components/PlaylistDetails.js'

class PlaylistDetailsContainer extends React.Component {

    componentDidUpdate(prevProps, prevState){
        if(prevProps.playlistDetails !== this.props.playlistDetails){
            this.mapToDetails(this.props.playlistDetails)
        }
    }

    mapToDetails = (details) => {
        return details.map(deets => <PlaylistDetails props={deets}/>)
    }


    render(){
        console.log(this.props, 'inpldetailcont')
        return (
            <div>
                {/* {this.mapToDetails()} */}
            </div>
        )
    }
}



export default PlaylistDetailsContainer