import React from 'react'
import 'semantic-ui-css/semantic.min.css';


export default function UserCard(props) {
    console.log(props.user)
    return (
        <div className="ui card">
            <div className="image">
                <img src={props.user.image} alt={'SHOULDA PUT A PICTURE'} />
            </div>
                <div className="content">
                    <a className="header">{props.user.name}</a>
                    <div className="meta">
                        <span className="location">{props.user.country}</span>
                    </div>
                    <div className="description">
                        {props.user.name} is a swamp buggy badass!
                    </div>
                </div>
                <div className="extra content">
                    <a>
                        <i className="user icon"></i>
                        22 Friends
                    </a>
                </div>
            </div>
    )
}
