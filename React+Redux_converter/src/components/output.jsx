import React, { Component } from 'react';
import { connect } from 'react-redux';


class Input extends Component { 

  render() {
    let input = this.props.globalStore.input;
    let inputCustomRate = this.props.globalStore.inputCustomRate;
    let changeTOM = this.props.globalStore.changeTOM; 
    

    return (
        <input 
          placeholder='Result is here' 
          readOnly 
          value={input !== '' && inputCustomRate !== '' && changeTOM === 'Custom'
            ? input*inputCustomRate
            : ''}
        />
      );
  }
}

export default connect(
  state => ({
    globalStore: state
  }),
  dispatch => ({})
)(Input);
