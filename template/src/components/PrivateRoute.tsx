import React, { useCallback } from 'react'
import { Route, Redirect, RouteProps, RouteComponentProps } from 'react-router-dom'
import { LocationDescriptor } from 'history'
import { observer } from 'mobx-react-lite'
import useStore from '../hooks/store'

export type RouteParams = {
  [key: string]: string;
}

export type Props = RouteProps & {
  redirect?: LocationDescriptor;
  render: (props: RouteComponentProps<RouteParams>) => React.ReactNode;
}

const PrivateRoute: React.FC<Props> = observer(({ render, redirect, ...rest }) => {
  const { session: { currentUser } } = useStore()

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
})

export default PrivateRoute
