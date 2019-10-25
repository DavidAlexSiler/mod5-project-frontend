import React from 'react'
import UserCard from '../components/UserCard'
import { getUser } from '../services/backend';
import { connect } from 'react-redux'
import TopArtistMapper from './TopArtistMapper';


class UserContainer extends React.Component{

    

    componentDidMount = () => {
        this.props.isLoggedIn ? console.log('nullUC') : 
        getUser().then(data => {
            this.props.dispatch({ type: "GET_USER", data: data })
    })
}

    render(){
        return (
            <div>
                {this.props.userData ? <UserCard /> : null}
                {/* {TopArtistMapper} */}
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return state.login
}

export default connect(mapStateToProps)(UserContainer)