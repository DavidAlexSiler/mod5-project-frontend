import loginReducer from './login';
import songsearchReducer from './songsearch';
import playlistReducer from './playlist'
import { combineReducers } from 'redux';

export default combineReducers({
    login: loginReducer,
    songsearch: songsearchReducer,
    playlist: playlistReducer
});