import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './App';
import 'bootstrap/scss/bootstrap.scss';
import './index.scss';

const renderApp = Component =>
  render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root')
  );

renderApp(App);

if (module.hot) {
  module.hot.accept(() => renderApp(App));
}
