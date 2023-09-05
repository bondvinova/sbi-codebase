import { lazy } from 'react';

import { ROUTES_NAME } from '@/constants/router';
import { RoutesType } from '@/types/route-types';

const ClientManagement = lazy(() => import('@/features/client-management'));

const Pages: RoutesType[] = [
  {
    path: ROUTES_NAME.CLIENTMANAGEMENT,
    element: <ClientManagement />,
    // delete meta later
    meta: {
      publicRoute: true,
    },
  },
];

export default Pages;
