import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { observable } from 'mobx';
import { observer, inject } from 'mobx-react';
import { Header, Main, Footer } from './pages/Layout';
import trackGA from './utils/ga/trackGA';

@withRouter
@trackGA
@inject('UserStore')
@observer
class App extends Component {
  @observable
  loaded = false;

  async componentDidMount() {
    try {
      if (this.props.UserStore.token) {
        await this.props.UserStore.pullUser();
      }
    } finally {
      this.loaded = true;
    }
  }

  render() {
    return this.loaded ? (
      <div id="app">
        <Header />
        <Main />
        <Footer />
      </div>
    ) : null;
  }
}

export default App;
