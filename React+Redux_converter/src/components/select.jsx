import React, { Component } from 'react';
import { connect } from 'react-redux';

class Select extends Component { 
  changeFinalSelects(){
    this.props.onChangeTOMFinal(this.typeSelect.value);
  }
  render() {

    return (
        <select onChange={this.changeFinalSelects.bind(this)}
                ref={(select) => { this.typeSelect = select }}>
            {this.props.globalStore.Select.map((item,index)=>{
              return (<option key={index} value={item}>{item}</option>)
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
    onChangeTOMFinal: (value) => {
      dispatch({ type: 'CHANGE_TOM_TO_FINAL', payload: value });
    }
  })
)(Select);
