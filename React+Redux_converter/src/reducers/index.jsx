import {combineReducers} from 'redux';
import Dropdown from './dropdown.jsx'
import changeTOM from './changeTOM.jsx';
import Select from './select.jsx';
import finalSelectValuesState from './finalSelectValuesState.jsx';

export default combineReducers({
    Dropdown,
    changeTOM,
    Select,
    finalSelectValuesState
})