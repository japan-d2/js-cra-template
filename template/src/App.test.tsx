import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

test('renders "Sign In"', () => {
  const { container } = render(<App />)
  const pageTitle = container.querySelector('.app-form-title')

  expect(pageTitle).toHaveTextContent('Sign In')
})
