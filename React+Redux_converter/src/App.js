import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Grid
} from 'semantic-ui-react'

class App extends Component { 
   render() {
    return (
      <Grid centered>
        <Grid.Row>
          <Grid.Column width={12} >
            <h1>Any shit is here</h1>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default connect(
  state => ({}),
  dispatch => ({})
)(App);
