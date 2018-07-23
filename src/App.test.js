import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { browserHistory as history } from 'react-router';
import { Provider } from 'mobx-react';
import stores from './stores';
import App from './App';

jest.mock('react-ga');
jest.mock('react-imported-component');
jest.mock('~/components/Image/Image');

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider {...stores}>
      <BrowserRouter history={history}>
        <App />
      </BrowserRouter>
    </Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
