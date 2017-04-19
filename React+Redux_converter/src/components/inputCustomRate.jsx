import React, { Component } from 'react';
import { connect } from 'react-redux';

class Input extends Component { 
  setValue(){
    console.log(this.inputValue.value)
    this.props.toStore(this.inputValue.value)
  }
  render() {
    return (
        <input 
          placeholder='Enter rate here' 
          type='number'
          onInput={this.setValue.bind(this)}
          ref={(input)=>(this.inputValue = input)}
        />
      );
  }
}

export default connect(
  state => ({
    globalStore: state
  }),
  dispatch => ({
    toStore(payload){
      dispatch({type: 'INPUT_TO_STORE', payload: payload});
    }
  
  })
)(Input);
