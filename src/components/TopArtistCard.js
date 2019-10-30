import React, { Component } from 'react'
import { Card, Image } from 'semantic-ui-react'


export class TopArtistCard extends Component {

    state = {
        hovered: false
    }

    displayAlbum = (e) => {
        e.target.style.opacity = 1
        this.setState({
            hovered: false
        })
    }

    displayArtistName = (e) => {
        e.target.style.opacity = 1
    }

    hideAlbum = (e) => {
        e.target.style.opacity  = 0.4
        this.setState({
            hovered: true
        })
    }

    hideArtistName = (e) => {
        e.target.style.opacity  = 0
    }

    render() {
        return (
            <Card
                className='top artist card'
                color='yellow'
                name={this.props.artist.name}
            >
                <Image className='top artist image' style={{ opacity: 1 }} 
                id={this.props.artist.name} 
                src={this.props.artist.images[1].url} 
                onMouseEnter={(e) => this.hideAlbum(e)} 
                onMouseLeave={(e) => this.displayAlbum(e)} />
                {this.state.hovered ? <div className='top artist album title' onMouseOut={(e) => this.hideAlbum(e)} onMouseEnter={(e) => this.hideAlbum(e)} 
                    >{this.props.artist.name}</div> : null}
            </Card>
        )
    }
}

export default TopArtistCard
