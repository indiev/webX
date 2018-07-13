import React, { Component, Fragment } from 'react';
import { Header, Main, Footer } from './page/Layout';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header>Header</Header>
        <Main>Main</Main>
        <Footer>Footer</Footer>
      </Fragment>
    );
  }
}

export default App;
