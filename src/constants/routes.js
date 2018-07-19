import importedComponent from 'react-imported-component';

export const routes = [
  {
    path: '/',
    exact: true,
    component: importedComponent(() => import('~/pages/Main/Home'))
  },
  {
    path: '/about',
    exact: true,
    component: importedComponent(() => import('~/pages/Main/About'))
  },
  {
    path: '/support',
    exact: true,
    component: importedComponent(() => import('~/pages/Main/Support'))
  }
];
