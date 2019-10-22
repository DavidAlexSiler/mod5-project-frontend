import React from 'react'
import 'semantic-ui-css/semantic.min.css';
import { Link } from 'react-router-dom'


class NavBar extends React.Component{
    
    state = {
        activeItem: {}
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.activeItem !== this.state.activeItem){
            prevState.activeItem.className = "item"
            this.state.activeItem.className = "active item"
        }
    }

    handleClick = (e) => {
        console.log(e.target)
        this.setState({
            activeItem: e.target
        })
    }

    render(){
        return (
            <div>
                <div className="ui secondary pointing menu">
                    <Link onClick={(e) => this.handleClick(e)} to='/me' className="item">
                        Me
                    </Link>
                    <Link onClick={(e) => this.handleClick(e)} to='/playlists' className="item">
                        Playlists
                    </Link>
                    <Link onClick={(e) => this.handleClick(e)} to='/songs' className="item">
                        Songs
                    </Link>
                    <Link onClick={(e) => this.handleClick(e)} to='/friends' className="item">
                        Friends
                    </Link>
                    <div className="right menu">
                        <Link onClick={(e) => this.handleClick(e)} to='/' className="ui item">
                        Logout
                        </Link>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default NavBar