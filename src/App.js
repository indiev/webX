import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import { Header, Main, Footer } from '~/pages/Layout';

import { routes } from './constants/routes';

class Routes extends Component {
  render() {
    return (
      <Switch>{routes.map((route, i) => <Route key={i} {...route} />)}</Switch>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div id="app">
        <Header>Header</Header>
        <Main>
          <Routes />
        </Main>
        <Footer>Footer</Footer>
      </div>
    );
  }
}

export default App;
