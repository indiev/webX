import importedComponent from 'react-imported-component';

export const routes = [
  {
    path: '/',
    exact: true,
    component: importedComponent(() => import('~/pages/Home'))
  }
];
