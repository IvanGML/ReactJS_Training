import React, { Component } from 'react';
import { connect } from 'react-redux';

class Input extends Component { 

  render() {

    return (
        <input></input>
      );
  }
}

export default connect(
  state => ({
    testStore: state
  }),
  dispatch => ({})
)(Input);
