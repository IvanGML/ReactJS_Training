import {combineReducers} from 'redux';
import measurementsInitial from './measurementsInitial.jsx'
import changeTOM from './changeTOM.jsx';
import measurementSelect from './measurementSelect.jsx';
import finalSelectValuesState from './finalSelectValuesState.jsx';

export default combineReducers({
    measurementsInitial,
    changeTOM,
    measurementSelect,
    finalSelectValuesState
})