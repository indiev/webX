import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import GA from 'react-ga';
import { Header, Main, Footer } from './pages/Layout';
import trackGA from './utils/ga/trackGA';

import { GA_ID } from '~/constants';

GA.initialize(GA_ID);

@withRouter
@trackGA
class App extends Component {
  render() {
    return (
      <div id="app">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
