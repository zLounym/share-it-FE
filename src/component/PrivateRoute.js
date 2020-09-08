import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useAuth } from '../store/context'
import { useObserver } from 'mobx-react'

export const PrivateRoute = ({ children, ...rest }) => {
  const { isAuthenticated } = useAuth()
  return useObserver(() => (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  ))
}
