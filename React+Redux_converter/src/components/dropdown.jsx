import React, { Component } from 'react';
import { connect } from 'react-redux';

class Dropdown extends Component { 
  changeTypeOfMeasurement(){
    this.props.onChangeTOM(this.typeSelect.value);
    if(this.typeSelect.value !== 'Specified'){
        this.props.toInitialState();
    }
    // console.log(this.typeSelect.value);
  }
  render() {
    return (
        <select ref={(select) => { this.typeSelect = select }}
                onChange={this.changeTypeOfMeasurement.bind(this)}>
            {this.props.globalStore.measurementsInitial.map((item, index)=>{ 
              return <option key={index} value={item}>{item}</option>
            })}
        </select>
      );
  }
}

export default connect(
  state => ({
    globalStore: state
  }),
  dispatch => ({
    onChangeTOM: (value) => {
      dispatch({ type: 'CHANGE_TOM_TO', payload: value });
    },
    toInitialState: () => {
      dispatch({ type: 'CHANGE_TO_INITIAL_STATE' });
    }
  })
)(Dropdown);


/*import React from 'react'

const DropdownExampleUncontrolled = () => (
  <Dropdown
    selection
    options={options}
    placeholder='Choose an option'
  />
)

export default DropdownExampleUncontrolled*/
