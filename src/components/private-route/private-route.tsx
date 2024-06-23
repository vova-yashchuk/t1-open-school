import { Navigate } from 'react-router-dom';
import { AppRoute } from '../../const/const';
import React from 'react';
import { getToken } from '../../service/token';
import Loader from '../loader/loader';


type PrivateRouteProps = {
  component: React.JSX.Element;
  isUserLoading: boolean;
}

function PrivateRoute(props: PrivateRouteProps): React.JSX.Element {
  const { component, isUserLoading } = props;
  const token = getToken();

  if (isUserLoading) {
    return (
      <Loader  height={'900px'}/>
    )
  }

  return (
    token.length ? component : <Navigate to={AppRoute.Auth} />
  );
}

export default PrivateRoute;