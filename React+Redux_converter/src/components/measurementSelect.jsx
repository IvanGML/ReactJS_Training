import React, { Component } from 'react';
import { connect } from 'react-redux';

class MeasurementSelect extends Component { 

  render() {

    return (
        <select>
            {this.props.globalStore.finalSelectValuesState.map((item,index)=>{
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
  dispatch => ({})
)(MeasurementSelect);
