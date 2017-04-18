import {combineReducers} from 'redux';
import addTracks from './addTracks.jsx'
import changeTOM from './changeTOM.jsx';

export default combineReducers({
    addTracks,
    changeTOM
})