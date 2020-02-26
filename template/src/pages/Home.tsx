import React from 'react'
import Header from '../components/Header'
import useAuth from '../hooks/auth'

const Home: React.FC = () => {
  const currentUser = useAuth()

  return (
    <div>
      <Header currentPath="src/pages/Home.tsx" />
      <main className="app-content">
        <h1>Home</h1>
        <p>Hello, {currentUser?.name}.</p>
      </main>
    </div>
  )
}

export default Home
