import React, { Component } from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';

import { Header, Main, Footer } from './pages/Layout';
import routes from './routes';
import trackGA from './utils/ga/trackGA';

const Routes = () => (
  <Switch>{routes.map((route, i) => <Route key={i} {...route} />)}</Switch>
);

@withRouter
@trackGA
class App extends Component {
  render() {
    return (
      <div id="app">
        <Header />
        <Main>
          <Routes />
        </Main>
        <Footer />
      </div>
    );
  }
}

export default App;
