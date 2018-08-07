import React, { Component } from 'react';

class Main extends Component {
  render() {
    return (
      <main className="d-flex flex-colum flex-fill" role="main">
        {this.props.children}
      </main>
    );
  }
}

export default Main;
