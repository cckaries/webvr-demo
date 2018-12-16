import React, { Component } from 'react';
import { connect } from 'react-redux';

import LiveTour from './containers/LiveTour/LiveTour';

class App extends Component {
  render() {
    return <LiveTour />;
  }
}

export default connect()(App);
