import React from 'react'
import 'semantic-ui-css/semantic.min.css';
import { connect } from 'react-redux'


const UserCard = (props) => {
    console.log(props.user)
    return (
        <div className="ui card">
            <div className="image">
                <img src={props.userData.image} alt={'SHOULDA PUT A PICTURE'} />
            </div>
                <div className="content">
                    <a className="header">{props.userData.name}</a>
                    <div className="meta">
                        <span className="location">{props.userData.country}</span>
                    </div>
                    <div className="description">
                        {props.userData.name} is a swamp buggy badass!
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

let mapStateToProps = (state) => {
    return state.login
}

export default connect(mapStateToProps)(UserCard)
