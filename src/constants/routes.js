import universal from 'react-universal-component';

export const routes = [
  {
    path: '/',
    exact: true,
    component: universal(() => import('~/pages/Home'))
  }
];
