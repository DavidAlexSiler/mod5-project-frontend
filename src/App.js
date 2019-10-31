import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import Login from './components/Login'
import NavBar from './components/NavBar';
import UserContainer from './containers/UserContainer';
import SongSearch from './components/SongSearch';
import PlaylistContainer from './containers/PlaylistContainer'
import FriendsContainer from './containers/FriendsContainer'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


const App = () =>  {

 
    return (
      <div className="App">
        <div className='listening-room'>
          {/* {window.location.href !== 'http://localhost:8888/' ? <NavBar />: null} */}
          {window.location.href !== "https://current-input-front.herokuapp.com" ? <NavBar />: null}
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path='/callback' component={UserContainer} />
            <Route path='/me' component={UserContainer} />
            <Route path='/songs' component={SongSearch} />
            <Route path='/playlists' component={PlaylistContainer} />
            <Route path='/friends' component={FriendsContainer} />
          </Switch>
        </div>
      </div>
    )
  
}

export default App;
