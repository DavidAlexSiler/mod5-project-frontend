import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import NavBar from './NavBar';
import UserContainer from '../containers/UserContainer';
import SongSearch from './SongSearch';
import { connect } from 'react-redux';
import PlaylistContainer from '../containers/PlaylistContainer'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import FriendsContainer from '../containers/FriendsContainer'



const ListeningRoom = (props) => {
    return (
        <div>
            <NavBar />
            <UserContainer />
            {/* <Route exact path='/' component={ListeningRoom} /> */}
            <Route path='/songs' component={SongSearch} />
            <Route path='/playlists' component={PlaylistContainer} />
            <Route path='/friends' component={FriendsContainer} />
        </div>
    )
}

let mapStateToProps = (state) => {
    return state.login
}

export default connect(mapStateToProps)(ListeningRoom)