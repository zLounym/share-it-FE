import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { SignUp } from './authentication/SignUp'
import { Login } from './authentication/Login'
import { PeopleDeck } from './peopleDeck/PeopleDeck'
import { PrivateRoute } from './component/PrivateRoute'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/signup">
          <SignUp />
        </Route>
        <PrivateRoute path="/deck">
          <PeopleDeck />
        </PrivateRoute>
        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
