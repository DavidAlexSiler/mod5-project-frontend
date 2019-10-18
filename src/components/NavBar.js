import React from 'react'
import 'semantic-ui-css/semantic.min.css';
import { Link } from 'react-router-dom'


export default function NavBar() {
    return (
        <div>
            <div className="ui secondary pointing menu">
                <Link to='/' className="active item">
                    Me
                </Link>
                <Link to='/playlists' className="item">
                    Playlists
                </Link>
                <Link to='/songs' className="item">
                    Songs
                </Link>
                <Link to='/friends' className="item">
                    Friends
                </Link>
                <div className="right menu">
                    <button className="ui item">
                    Logout
                    </button>
                </div>
            </div>
        </div>
    )
}