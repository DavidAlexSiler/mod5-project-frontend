import React from 'react'
import 'semantic-ui-css/semantic.min.css';
import NavBar from './NavBar'
import UserContainer from '../containers/UserContainer'
import SongSearch from './SongSearch';


export default function ListeningRoom(props) {
    console.log(props.user.name, 'porps')
    return (
        <div>
            <NavBar />
            <UserContainer user={props.user}/>
            <SongSearch user={props.user}/>
        </div>
    )
}
