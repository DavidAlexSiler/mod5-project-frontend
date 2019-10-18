import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import NavBar from './NavBar';
import UserContainer from '../containers/UserContainer';
import SongSearch from './SongSearch';
import { connect } from 'react-redux';
import PlaylistContainer from '../containers/PlaylistContainer'
import { BrowserRouter as Router, Route } from 'react-router-dom';


const ListeningRoom = (props) => {
    return (
        <div>
            <NavBar />
            <UserContainer />
            <Route path='/search' component={SongSearch} />
            <Route path='/songs' component={SongSearch} />
            <Route path='/playlists' component={PlaylistContainer} />
        </div>
    )
}

let mapStateToProps = (state) => {
    return state.login
}

export default connect(mapStateToProps)(ListeningRoom)