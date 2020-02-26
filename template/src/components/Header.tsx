import React from 'react'
import logo from '../logo.svg'

export type Props = {
  currentPath: string;
}

const Header: React.FC<Props> = ({ currentPath }) => {
  return (
    <header className="app-header">
      <img src={logo} className="app-logo" alt="logo" />
      <p>
        Edit <code>{currentPath}</code> and save to reload.
      </p>
      <a
        className="app-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  )
}

export default Header
