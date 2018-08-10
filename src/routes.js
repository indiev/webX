import importedComponent from 'react-imported-component';

export default [
  {
    path: '/',
    exact: true,
    component: importedComponent(() => import('~/pages/Home'))
  },
  {
    path: '/signup',
    exact: true,
    component: importedComponent(() => import('~/pages/SignUp'))
  },
  {
    path: '/signin',
    exact: true,
    component: importedComponent(() => import('~/pages/SignIn'))
  }
];
