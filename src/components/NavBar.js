import React from 'react'
import 'semantic-ui-css/semantic.min.css';


export default function NavBar() {
    return (
        <div>

            <div className="ui secondary pointing menu">
                <button className="active item">
                    Home
                </button>>
                <button className="item">
                    Playlists
                </button>>
                <button className="item">
                    Friends
                </button>>
                <div className="right menu">
                    <button className="ui item">
                    Logout
                    </button>>
                </div>
            </div>
            <div className="ui segment">
                <p></p>
            </div>
        </div>
    )
}