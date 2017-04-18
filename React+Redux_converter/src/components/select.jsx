import React, { Component } from 'react';
import { connect } from 'react-redux';

class Select extends Component { 

  render() {

    return (
        <select>
            {this.props.testStore.addTracks.map((item,index)=>{return (<option key={index} value={item}>{item}</option>)})}
        </select>
      );
  }
}

export default connect(
  state => ({
    testStore: state
  }),
  dispatch => ({})
)(Select);
