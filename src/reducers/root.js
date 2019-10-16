import loginReducer from './login';
import songSearchReducer from './songSearch';
import { combineReducers } from 'redux';

export default combineReducers({
    login: loginReducer,
    songSearch: songSearchReducer
});