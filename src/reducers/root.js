import loginReducer from './login';
import playlistReducer from './playlist';
import friendsReducer from './friends';
import { combineReducers } from 'redux';
import  searchReducer from './search';

export default combineReducers({
    login: loginReducer,
    songsearch: searchReducer,
    playlist: playlistReducer,
    friends: friendsReducer
});