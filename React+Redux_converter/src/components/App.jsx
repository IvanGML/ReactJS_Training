import React, { Component } from 'react';
import { connect } from 'react-redux';
import Select from './select.jsx'
import InputCustomRate from './inputCustomRate.jsx'
import Input from './input.jsx'
import Output from './output.jsx'
// import Button from './button.jsx'
import Dropdown from './dropdown.jsx'
import MeasurementSelect from './measurementSelect.jsx';

class App extends Component {
  
  render() {
    return (
      <div>
        <div>
          <Input/>
          {this.props.globalStore.changeTOM === 'Specified' ? <MeasurementSelect/> : null}
        </div>
        <div>
          <Output/>
          {this.props.globalStore.changeTOM === 'Specified' ? <MeasurementSelect/> : null}
        </div>
        {this.props.globalStore.changeTOM === 'Custom' ? <InputCustomRate/> 
          : this.props.globalStore.changeTOM === 'Specified' ? <Select/> 
          : null }
        <Dropdown/>
        {/*<Button/>*/}
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