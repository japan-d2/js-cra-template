import config from '../../jest-puppeteer.config'

export const url = (path: string): string => {
  return `http://localhost:${config.server.port}${path}`
}
