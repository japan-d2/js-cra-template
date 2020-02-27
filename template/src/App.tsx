import React, { useState, useCallback } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.scss'
import AuthContext, { CurrentUser } from './contexts/auth'
import PrivateRoute from './components/PrivateRoute'
import Menu from './components/Menu'
import SignIn from './pages/SignIn'
import Home from './pages/Home'
import Other from './pages/Other'
import NotFound from './pages/NotFound'

const dummyUser: CurrentUser = {
  name: 'Anonymous',
}

const App: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<CurrentUser | null>(dummyUser)

  const handleCurrentUser = useCallback((user: CurrentUser | null) => {
    setCurrentUser(user)
  }, [])

  const handleSignOutClick = useCallback(() => {
    setCurrentUser(null)

    return true
  }, [])

  return (
    <AuthContext.Provider value={currentUser}>
      <Router>
        <div className="app">
          {currentUser && <Menu onSignOutClick={handleSignOutClick} />}
          <div className="app-main">
            <Switch>
              <PrivateRoute exact path="/" render={() => <Home/>} />
              <PrivateRoute exact path="/other" render={() => <Other/>} />
              <Route exact path="/sign-in">
                <SignIn onSignIn={handleCurrentUser} />
              </Route>
              <Route path="/">
                <NotFound/>
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </AuthContext.Provider>
  )
}

export default App
