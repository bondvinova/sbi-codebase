// ** Router imports **
import { lazy } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';

import { ROUTES_NAME } from '@/constants/router';
import BlankLayout from '@/providers/layouts/BlankLayout';
import { getRoutes } from '@/router/routes';

const CommonError = lazy(() => import('@/features/misc/common-error'));

const Router = () => {
  const allRoutes = getRoutes();

  const getHomeRoute = () => {
    return ROUTES_NAME.LOGIN;
  };

  const routes = useRoutes([
    {
      path: ROUTES_NAME.ROOT,
      index: true,
      element: <Navigate replace to={getHomeRoute()} />,
    },
    {
      path: ROUTES_NAME.ERROR,
      element: <BlankLayout />,
      children: [{ path: ROUTES_NAME.ERROR, element: <CommonError /> }],
    },
    ...allRoutes,
  ]);

  return routes;
};

export default Router;
