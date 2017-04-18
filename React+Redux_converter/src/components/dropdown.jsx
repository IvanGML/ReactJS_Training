import React, { Component } from 'react';
import { connect } from 'react-redux';

const options = [
  { key: 1, text: 'First', value: 'First' },
  { key: 2, text: 'Second', value: 'Second' },
  { key: 3, text: 'Third', value: 'Third' },
  { key: 4, text: 'Fourth', value: 'Fourth' },
  { key: 5, text: 'Fiveth', value: 'Fiveth' },
  { key: 6, text: 'Sixth', value: 'Sixth' },
]

class Dropdown extends Component { 
  changeTypeOfMeasurement(){
    // console.log(this.props.onChangeTOM());
    
    this.props.onChangeTOM();
  }
  render() {
    return (
        <select ref={(select) => { this.typeSelect = select }}
                onChange={this.changeTypeOfMeasurement.bind(this)}>
            {options.map((item)=>{ return <option key={item.key} value={item.text}>{item.text}</option>})}
        </select>
      );
  }
}

export default connect(
  state => ({
    testStore: state
  }),
  dispatch => ({
    onChangeTOM: () => {
      dispatch({ type: 'CHANGE_TOM' });
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
