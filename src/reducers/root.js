import loginReducer from './login';
// import songsearchReducer from './songsearch';
import playlistReducer from './playlist';
import friendsReducer from './friends';
import { combineReducers } from 'redux';
// console.log(songsearchReducer, 'song  search')
export default combineReducers({
    login: loginReducer,
    songsearch: songsearchReducer,
    playlist: playlistReducer,
    friends: friendsReducer
});