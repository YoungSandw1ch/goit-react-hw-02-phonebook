import React, { Component } from 'react';
import { Box } from './Common/Box';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  render() {
    return (
      <Box>
        <Box></Box>
        React homework template
      </Box>
    );
  }
}
