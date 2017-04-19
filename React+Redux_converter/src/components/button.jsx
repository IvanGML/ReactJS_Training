import React, { Component } from 'react';
import { connect } from 'react-redux';

class ConvertButton extends Component { 
  convert(){
    
  }
  render() {

    return (
        <button onClick={this.convert.bind(this)}>Convert</button>
      );
  }
}

export default connect(
  state => ({
    globalStore: state
  }),
  dispatch => ({})
)(ConvertButton);
