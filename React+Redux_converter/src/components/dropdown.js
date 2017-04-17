import React, { Component } from 'react';
import { connect } from 'react-redux';

class Dropdown extends Component { 
  this.isShown = false;
  render() {

    return (
        <select>
            <option>First</option>
            <option>Second</option>
            <option>Third</option>
        </select>
      );
  }
}

export default connect(
  state => ({
    testStore: state
  }),
  dispatch => ({})
)(Dropdown);


/*import React from 'react'

const options = [
  { key: 1, text: 'One', value: 1 },
  { key: 2, text: 'Two', value: 2 },
  { key: 3, text: 'Three', value: 3 },
  { key: 4, text: 'One', value: 4 },
  { key: 5, text: 'Two', value: 5 },
  { key: 6, text: 'Three', value: 6 },
]



const DropdownExampleUncontrolled = () => (
  <Dropdown
    selection
    options={options}
    placeholder='Choose an option'
  />
)

export default DropdownExampleUncontrolled*/
