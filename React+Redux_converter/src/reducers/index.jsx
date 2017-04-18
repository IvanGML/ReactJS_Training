import {combineReducers} from 'redux';
import measurementsInitial from './measurementsInitial.jsx'
import changeTOM from './changeTOM.jsx';

export default combineReducers({
    measurementsInitial,
    changeTOM
})