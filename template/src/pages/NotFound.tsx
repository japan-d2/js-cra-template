import React from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../components/Header'

const NotFound: React.FC = () => {
  const location = useLocation()

  return (
    <>
      <Header title="Not Found" />
      <main className="app-content">
        <h1>Not Found</h1>
        <p>{location.pathname}</p>
      </main>
    </>
  )
}

export default NotFound
