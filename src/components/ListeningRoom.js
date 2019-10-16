import React from 'react'
import 'semantic-ui-css/semantic.min.css';
import NavBar from './NavBar'
import UserContainer from '../containers/UserContainer'
import SongSearch from './SongSearch';
import { connect } from 'react-redux'


const ListeningRoom = (props) => {
    return (
        <div>
            <NavBar />
            <UserContainer />
            <SongSearch />
        </div>
    )
}

let mapStateToProps = (state) => {
    return state.login
}

export default connect(mapStateToProps)(ListeningRoom)