import React, { Component } from 'react';
import { connect } from 'react-redux';
import Select from './select.jsx'
import Input from './input.jsx'
import Dropdown from './dropdown.jsx'
import MeasurementSelect from './measurementSelect.jsx';
class App extends Component {
  render() {
    console.log(this.props.globalStore.measurementsInitial);
    return (
      <div>
        {this.props.globalStore.changeTOM === 'Specified' ? <MeasurementSelect/> : null}
        {this.props.globalStore.changeTOM === 'Custom' ? <Input/> 
          : this.props.globalStore.changeTOM === 'Specified' ? <Select/> 
          : null }
        <Dropdown/>
      </div>
    );
  }
}

export default connect(
  state => ({
    globalStore: state
  }),
  dispatch => ({})
)(App);