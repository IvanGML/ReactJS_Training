import React, { Component } from 'react';
import { connect } from 'react-redux';



class MeasurementSelect extends Component { 
  componentDidUpdate(){
    this.selectElem.childNodes[0].selected = true;
  }
  render() {

    return (
        <select ref={(select)=>(this.selectElem = select)}>
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
