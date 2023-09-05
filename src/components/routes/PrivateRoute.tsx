import { Suspense, SuspenseProps } from 'react';
import { Navigate } from 'react-router-dom';

// ** Spinner Import **
import Spinner from '@/components/spinner';
// ** Reoutes Type Import **
import { ROUTES_NAME } from '@/constants/router';
import { RoutesType } from '@/types/router';

interface Props extends SuspenseProps {
  route: RoutesType;
}

const DUMMY_HAS_USER = false;

const PrivateRoute = ({ children, route }: Props) => {
  if (route) {
    if (!DUMMY_HAS_USER) {
      return <Navigate to={ROUTES_NAME.LOGIN} />;
    }
  }

  return <Suspense fallback={<Spinner />}>{children}</Suspense>;
};

export default PrivateRoute;
