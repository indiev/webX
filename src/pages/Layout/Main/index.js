import React, { Component } from 'react';
import Routes from './Routes';

class Main extends Component {
  render() {
    return (
      <main className="d-flex flex-colum flex-fill" role="main">
        <Routes />
      </main>
    );
  }
}

export default Main;
