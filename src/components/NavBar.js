import React from 'react'
import 'semantic-ui-css/semantic.min.css';


export default function NavBar() {
    return (
        <div>

            <div className="ui secondary pointing menu">
                <a className="active item">
                    Home
                </a>
                <a className="item">
                    Playlists
                </a>
                <a className="item">
                    Friends
                </a>
                <div className="right menu">
                    <a className="ui item">
                    Logout
                    </a>
                </div>
            </div>
            <div className="ui segment">
                <p></p>
            </div>
        </div>
    )
}