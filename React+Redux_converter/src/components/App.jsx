import React, { Component } from 'react';
import { connect } from 'react-redux';
import Select from './select.jsx'
import Input from './input.jsx'
import Dropdown from './dropdown.jsx'

class App extends Component {
  addTrack() {
      console.log('addTrack', this.trackInput.value);
      this.props.onAddTrack(this.trackInput.value);
      this.trackInput.value = '';
  }

  render() {
    console.log(this.props.testStore.addTracks);
    return (
      <div>
        <input type="text" ref={(input) => { this.trackInput = input }} />
        <button onClick={this.addTrack.bind(this)}>Add track</button>
        <ul>
          {this.props.testStore.addTracks.map((track, index) =>
            <li key={index}>{track}</li>
          )}
        </ul>
        <Select/>
        {this.props.testStore.changeTOM ? <Input/> : null }
        <Dropdown/>
      </div>
    );
  }
}

export default connect(
  state => ({
    testStore: state
  }),
  dispatch => ({
    onAddTrack: (trackName) => {
      dispatch({ type: 'ADD_TRACK', payload: trackName });
    }
  })
)(App);