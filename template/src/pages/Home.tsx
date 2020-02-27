import React, { useState, useEffect, useMemo, useRef } from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import Header from '../components/Header'
import useAuth from '../hooks/auth'

const Home: React.FC = () => {
  const currentUser = useAuth()
  const chars = useMemo(() => Array.from(`Hello, ${currentUser?.name}.`), [currentUser])
  const [current, setCurrent] = useState<string[]>([])
  const indexRef = useRef(0)

  useEffect(() => {
    indexRef.current = 0

    const run = (): void => {
      if (chars.length >= indexRef.current) {
        setCurrent(chars.slice(0, indexRef.current))
        indexRef.current += 1
        handle = setTimeout(run, 100)
      }
    }

    let handle = setTimeout(run, 0)

    return () => clearTimeout(handle)
  }, [chars])

  return (
    <>
      <Header title="Home" />
      <main className="app-content">
        <h1>Home</h1>
        <p>
          <TransitionGroup component={null}>
            {current.map((char, i) => (
              <CSSTransition key={i} classNames="fade" timeout={300}>
                <span>{char}</span>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </p>
      </main>
    </>
  )
}

export default Home
