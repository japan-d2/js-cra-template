import React, { useCallback, MouseEvent } from 'react'
import { match as Match, NavLink, useHistory } from 'react-router-dom'
import { Location } from 'history'

export type Props = {
  onSignOutClick: () => Promise<boolean> | boolean;
}

const Menu: React.FC<Props> = ({ onSignOutClick }) => {
  const history = useHistory()

  const handleNotFoundActive = useCallback((_match: Match, location: Location) => {
    return !/^(?:\/(?:other)?)?$/.test(location.pathname)
  }, [])

  const handleNotFoundClick = useCallback(() => `/not-found/${Math.random()}`, [])

  const handleSignOut = useCallback(async (e: MouseEvent) => {
    e.preventDefault()

    const signedOut = await onSignOutClick()

    if (signedOut) {
      history.push('/sign-in')
    }
  }, [history])

  return (
    <div className="app-menu">
      <ul>
        <li>
          <NavLink
            exact
            className="app-link"
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            className="app-link"
            to="/other"
          >
            Other
          </NavLink>
        </li>
        <li>
          <NavLink
            className="app-link"
            isActive={handleNotFoundActive}
            to={handleNotFoundClick}
          >
            Not Found
          </NavLink>
        </li>
      </ul>
      <ul>
        <li>
          <a className="app-link" onClick={handleSignOut}>Sign Out</a>
        </li>
      </ul>
    </div>
  )
}

export default Menu
