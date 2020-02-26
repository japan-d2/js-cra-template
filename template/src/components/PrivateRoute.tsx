import React, { useCallback } from 'react'
import { Route, Redirect, RouteProps, RouteComponentProps } from 'react-router-dom'
import { LocationDescriptor } from 'history'
import useAuth from '../hooks/auth'

export type RouteParams = {
  [key: string]: string;
}

export type Props = RouteProps & {
  redirect?: LocationDescriptor;
  render: (props: RouteComponentProps<RouteParams>) => React.ReactNode;
}

const PrivateRoute: React.FC<Props> = ({ render, redirect, ...rest }) => {
  const currentUser = useAuth()

  const routeRender = useCallback((props: RouteComponentProps<RouteParams>) => {
    return currentUser
      ? render(props)
      : <Redirect to={redirect ?? '/sign-in'} />
  }, [currentUser, render, redirect])

  return (
    <Route
      {...rest}
      render={routeRender}
    />
  )
}

export default PrivateRoute
