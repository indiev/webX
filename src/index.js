import React from 'react';
import { render } from 'react-dom';
import { browserHistory as history } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { AppContainer } from 'react-hot-loader';

import App from './App';

import 'bootstrap/scss/bootstrap.scss';
import './index.scss';

const renderApp = Component =>
  render(
    <AppContainer>
      <BrowserRouter history={history}>
        <Component />
      </BrowserRouter>
    </AppContainer>,
    document.getElementById('root')
  );

renderApp(App);

if (module.hot) {
  module.hot.accept('./App', () => renderApp(App));
}
