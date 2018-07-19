import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Header, Main, Footer } from './pages/Layout';
import trackGA from './utils/ga/trackGA';

@withRouter
@trackGA
class App extends Component {
  render() {
    return (
      <div id="app">
        <Header>Header</Header>
        <Main />
        <Footer>Footer</Footer>
      </div>
    );
  }
}

export default App;
