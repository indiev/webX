import React, { Component } from 'react';
import Home from '~/page/Home';

class Main extends Component {
  render() {
    return (
      <main role="main">
        {this.props.children}
        <Home />
      </main>
    );
  }
}

export default Main;
