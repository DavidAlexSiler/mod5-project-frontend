import React from 'react'
import 'semantic-ui-css/semantic.min.css';
import { connect } from 'react-redux'


const UserCard = (props) => {
    console.log(props.user)
    return (
        <div className="ui card">
            <div className="image">
                <img src={props.userData.image} alt={'your face here'} />
            </div>
                <div className="content">
                    <h2>{props.userData.name}</h2>
                    <div className="meta">
                        <span className="location">{props.userData.country}</span>
                    </div>
                    <div className="description">
                        {props.userData.name} is a swamp buggy badass!
                    </div>
                </div>
                <div className="extra content">
                    <p>
                        <i className="user icon"></i>
                        22 Friends
                    </p>
                </div>
            </div>
    )
}

let mapStateToProps = (state) => {
    return state.login
}

export default connect(mapStateToProps)(UserCard)
