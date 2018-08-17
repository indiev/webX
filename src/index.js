import 'babel-polyfill';

import React from 'react';
import { render } from 'react-dom';
import { browserHistory as history } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { AppContainer } from 'react-hot-loader';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'mobx-react';
import GA from 'react-ga';
import App from './App';
import stores from './stores';
import { GA_ID } from './constants';
import i18n from './i18n';

import './styles/main.scss';

GA.initialize(GA_ID);

const renderApp = Component =>
  render(
    <I18nextProvider i18n={i18n}>
      <AppContainer>
        <Provider {...stores}>
          <BrowserRouter history={history}>
            <Component />
          </BrowserRouter>
        </Provider>
      </AppContainer>
    </I18nextProvider>,
    document.getElementById('root')
  );

renderApp(App);

if (module.hot) {
  module.hot.accept('./App', () => renderApp(App));
}
