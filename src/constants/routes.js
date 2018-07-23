import importedComponent from 'react-imported-component';

export const routes = [
  {
    path: '/',
    exact: true,
    component: importedComponent(() => import('~/pages/Main/Home'))
  },
  {
    path: '/signup',
    exact: true,
    component: importedComponent(() => import('~/pages/Main/SignUp'))
  },
  {
    path: '/signin',
    exact: true,
    component: importedComponent(() => import('~/pages/Main/SignIn'))
  }
];
