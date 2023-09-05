import { lazy } from 'react';

import { LayoutType, ROUTES_NAME } from '@/constants/router';
import type { RoutesType } from '@/types/route-types';

const Login = lazy(() => import('@/features/authentication/login'));
const ForgotPassword = lazy(() => import('@/features/authentication/forgot-password'));
const ResetPassword = lazy(() => import('@/features/authentication/reset-password'));
const TwoFactorAuthentication = lazy(() => import('@/features/authentication/two-factor-authentication'));

const Authentication: RoutesType[] = [
  {
    path: ROUTES_NAME.LOGIN,
    element: <Login />,
    meta: {
      layout: LayoutType.Blank,
      publicRoute: true,
    },
  },
  {
    path: ROUTES_NAME.FORGOT_PASSWORD,
    element: <ForgotPassword />,
    meta: {
      layout: LayoutType.Blank,
      publicRoute: true,
    },
  },
  {
    path: ROUTES_NAME.RESET_PASSWORD,
    element: <ResetPassword />,
    meta: {
      layout: LayoutType.Blank,
      // delete publicRoute: true later
      publicRoute: true,
    },
  },
  {
    path: ROUTES_NAME.TWO_FACTOR_AUTHENTICATION,
    element: <TwoFactorAuthentication />,
    meta: {
      layout: LayoutType.Blank,
      // delete publicRoute: true later
      publicRoute: true,
    },
  },
];

export default Authentication;
