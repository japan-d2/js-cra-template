import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import './App.scss'
import useStore from './hooks/store'
import PrivateRoute from './components/PrivateRoute'
import Menu from './components/Menu'
import SignIn from './pages/SignIn'
import Home from './pages/Home'
import Other from './pages/Other'
import NotFound from './pages/NotFound'

const App: React.FC = observer(() => {
  const { session: { currentUser, loaded } } = useStore()

  return (
    <>{loaded && (
      <Router>
        <div className="app">
          {currentUser && <Menu/>}
          <div className="app-main">
            <Switch>
              <PrivateRoute exact path="/" render={() => <Home/>} />
              <PrivateRoute exact path="/other" render={() => <Other/>} />
              <Route exact path="/sign-in">
                <SignIn/>
              </Route>
              <Route path="/">
                <NotFound/>
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    )}</>
  )
})

export default App
