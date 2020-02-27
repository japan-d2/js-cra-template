import React, { useCallback, MouseEvent } from 'react'
import { match as Match, NavLink, useHistory } from 'react-router-dom'
import { Location } from 'history'
import styled from 'styled-components'

export type Props = {
  onSignOutClick: () => Promise<boolean> | boolean;
}

const Wrapper = styled.div`
  width: 12rem;

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  ul + ul {
    border-top: 1px solid #eee;
    margin-top: 1rem;
  }

  a {
    display: block;
    padding: 1rem;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
    &.active {
      font-weight: bold;
    }
  }

  button {
    box-sizing: border-box;
    display: block;
    padding: 1rem;
    font-size: 1rem;
    border-style: none;
    width: 100%;
    text-align: left;
    outline: none;
    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
`

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
  }, [onSignOutClick, history])

  return (
    <Wrapper>
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
          <button className="app-link" onClick={handleSignOut}>Sign Out</button>
        </li>
      </ul>
    </Wrapper>
  )
}

export default Menu
