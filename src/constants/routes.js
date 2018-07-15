import Asyncify from '~/components/Asyncify';

export const routes = [
  {
    path: '/',
    exact: true,
    component: Asyncify(() => import('~/pages/Home'))
  }
];
