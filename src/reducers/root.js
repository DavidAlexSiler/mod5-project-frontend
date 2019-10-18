import loginReducer from './login';
import songSearchReducer from './songSearch';
import playlistReducer from './playlist'
import { combineReducers } from 'redux';

export default combineReducers({
    login: loginReducer,
    songSearch: songSearchReducer,
    playlist: playlistReducer
});