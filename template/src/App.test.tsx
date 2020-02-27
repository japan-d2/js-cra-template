import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

test('renders "Home"', () => {
  const { container } = render(<App />)
  const pageTitle = container.querySelector('header h1')

  expect(pageTitle).toHaveTextContent('Home')
})
