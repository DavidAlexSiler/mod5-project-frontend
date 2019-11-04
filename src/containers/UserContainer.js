import React from 'react'
import UserCard from '../components/UserCard'
import { getUser } from '../services/backend';
import { connect } from 'react-redux'

class UserContainer extends React.Component{

    componentDidMount = () => {
        this.props.isLoggedIn ? console.log('null') : 
        getUser().then(data => {
            this.props.dispatch({ type: "GET_USER", data: data })
    })
}

    render(){
        return (
            <div>
                {this.props.userData ? <UserCard /> : null}
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return state.login
}

export default connect(mapStateToProps)(UserContainer)