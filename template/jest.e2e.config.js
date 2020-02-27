const { moduleFileExtensions } = require('react-scripts/config/paths')

module.exports = {
  preset: 'jest-puppeteer',
  testMatch: ['<rootDir>/tests/e2e/**/*.test.{js,jsx,ts,tsx}'],
  transform: { '^.+\\.(js|jsx|ts|tsx)$': 'react-scripts/config/jest/babelTransform.js' },
  moduleFileExtensions,
}
