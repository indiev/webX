import React from 'react';
import { render } from 'react-dom';
import { browserHistory as history } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'mobx-react';

import App from './App';

import stores from './stores';

import './styles/main.scss';

const renderApp = Component =>
  render(
    <AppContainer>
      <Provider {...stores}>
        <BrowserRouter history={history}>
          <Component />
        </BrowserRouter>
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  );

renderApp(App);

if (module.hot) {
  module.hot.accept('./App', () => renderApp(App));
}
