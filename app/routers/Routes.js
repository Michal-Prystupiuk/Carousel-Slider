import { PATHS } from 'consts';
import Homepage from 'views/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

const ROUTES = [
  {
    path: PATHS.HOMEPAGE,
    component: Homepage,
  },
  {
    component: NotFoundPage,
    key: 'not-found-page',
    exact: false,
  },
];

export default ROUTES;
