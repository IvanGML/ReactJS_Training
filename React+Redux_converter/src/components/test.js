import React, { Component } from 'react';
import { connect } from 'react-redux';

let typesOfMeasurement = ['Select type of rate','Custom','Specified']

class Test extends Component { 

    render() {
        return (
            <select>
                {this.props.typesOfMeasurement.map((item,index)=>{return (<option key={index} value={item}>{item}</option>)})}
            </select>
        );
    }
}

export default connect(
  state => ({
    testStore: state,
    typesOfMeasurement: typesOfMeasurement
  }),
  dispatch => ({})
)(Test);
