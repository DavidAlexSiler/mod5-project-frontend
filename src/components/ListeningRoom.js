import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import NavBar from './NavBar';
import UserContainer from '../containers/UserContainer';
import SongSearch from './SongSearch';
import { connect } from 'react-redux';
import PlaylistContainer from '../containers/PlaylistContainer'


const ListeningRoom = (props) => {
    return (
        <div>
            <NavBar />
            <UserContainer />
            <SongSearch />
            <PlaylistContainer />
        </div>
    )
}

let mapStateToProps = (state) => {
    return state.login
}

export default connect(mapStateToProps)(ListeningRoom)